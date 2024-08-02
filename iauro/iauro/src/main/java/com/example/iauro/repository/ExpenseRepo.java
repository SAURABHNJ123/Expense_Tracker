package com.example.iauro.repository;

import com.example.iauro.entites.Expense;
import com.example.iauro.entites.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepo extends JpaRepository<Expense,Long> {
    List<Expense> findByUserOrderByCreatedAtDesc(User user);
}
