import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../../service/expense.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrl: './addexpense.component.css'
})
export class AddexpenseComponent implements OnInit{
  expenseForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseForm = this.formBuilder.group({
      category: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      comments: ['']
    });
  }

  get f() {
    return this.expenseForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.expenseForm.invalid) {
      return;
    }

    this.expenseService.addExpense(this.expenseForm.value).subscribe((response: any) => {
      console.log('Expense added!', response);
      this.expenseForm.reset();
      this.submitted = false;
    }, (error: any) => {
      console.error('Error adding expense', error);
    });
  }

}
