import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../model/expense';
import url from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) {}

  addExpense(expense: Expense): any {
    return this.http.post(`${url}/expenses`, expense);
  }
  getExpenses():any {
    return this.http.get(`${url}/expenses`);
  }

  updateExpense(expense: Expense):any {
    return this.http.put(`${url}/expenses/${expense.id}`, expense);
  }

  deleteExpense(id: number){
    return this.http.delete<void>(`${url}/expenses/${id}`);
  }

}
