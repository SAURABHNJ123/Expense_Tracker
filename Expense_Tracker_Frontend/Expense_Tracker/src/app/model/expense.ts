export interface Expense {
    id?: number;
    category: string;
    amount: number;
    comments?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  