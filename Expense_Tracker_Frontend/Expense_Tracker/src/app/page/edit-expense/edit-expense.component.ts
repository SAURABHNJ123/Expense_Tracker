import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Expense } from '../../model/expense';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../../service/expense.service';
declare var bootstrap: any;

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrl: './edit-expense.component.css'
})
export class EditExpenseComponent {
  @Input() expense!: Expense;
  @Output() update = new EventEmitter<void>();
  expenseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private expenseService: ExpenseService) {
    this.expenseForm = this.formBuilder.group({
      category: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      comments: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expense'] && this.expense) {
      this.expenseForm.patchValue(this.expense);
    }
  }

  onSubmit(): void {
    if (this.expenseForm.invalid) {
      return;
    }

    const updatedExpense: Expense = {
      ...this.expense,
      ...this.expenseForm.value,
      updatedAt: new Date()
    };

    this.expenseService.updateExpense(updatedExpense).subscribe(() => {
       this.update.emit();
       const editExpenseModal = new bootstrap.Modal(document.getElementById('editExpenseModal')!);
       editExpenseModal.hide();

    }, (error: any) => {
      console.error('Error updating expense', error);
    });
  }

}
