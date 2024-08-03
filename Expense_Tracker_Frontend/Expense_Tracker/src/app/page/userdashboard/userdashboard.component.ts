import { Component } from '@angular/core';
import { ExpenseService } from '../../service/expense.service';
import { Expense } from '../../model/expense';
declare var bootstrap: any;

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
  expenses: Expense[] = [];
  selectedExpense!: Expense;


  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((response: any[]) => {
      // Sort by latest added record
      this.expenses = response.sort((a, b) => new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime());
    }, (error: any) => {
      console.error('Error fetching expenses', error);
    });
  }

  deleteExpense(id: number | undefined): void {
    if (id != null) {
      this.expenseService.deleteExpense(id).subscribe(() => {
        this.loadExpenses();
      }, error => {
        console.error('Error deleting expense', error);
      });
    } else {
      console.error('Expense ID is undefined');
    }
  }

  openEditModal(expense: Expense): void {
    this.selectedExpense = { ...expense };
    const editExpenseModal = new bootstrap.Modal(document.getElementById('editExpenseModal')!);
    editExpenseModal.show();
  }

}
