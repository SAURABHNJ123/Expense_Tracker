package com.example.iauro.service;

import com.example.iauro.entites.User;
import com.example.iauro.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepository;

    public User register(User user) {
        return userRepository.save(user);
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

//    public User findByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//
//    public User login(String username,String password) {
//        return userRepository.findByUsernameAndPassword(username,password);
//    }

}
