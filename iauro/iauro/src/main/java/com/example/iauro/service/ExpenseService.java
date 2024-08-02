package com.example.iauro.service;

import com.example.iauro.entites.Expense;
import com.example.iauro.entites.User;
import com.example.iauro.repository.ExpenseRepo;
import com.example.iauro.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepo expenseRepository;

    @Autowired
    private UserRepo userRepository;

    public Expense addExpense(Expense expense, String username) {
        User user = userRepository.findByUsername(username);
        expense.setUser(user);
        return expenseRepository.save(expense);
    }

    public List<Expense> getExpensesByUser(String username) {
        User user = userRepository.findByUsername(username);
        return expenseRepository.findByUserOrderByCreatedAtDesc(user);
    }

    public Optional<Expense> getExpenseById(Long id) {
        return expenseRepository.findById(id);
    }

    public Expense updateExpense(Expense expense) {
        return expenseRepository.save(expense);
    }

    public void deleteExpense(Long id) {
        expenseRepository.deleteById(id);
    }
}

