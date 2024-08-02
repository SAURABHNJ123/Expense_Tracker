package com.example.iauro.controller;

import com.example.iauro.entites.User;
import com.example.iauro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
       return ResponseEntity.ok(userService.register(user));
    }

    @GetMapping("/{user_id}")
    public User grtUser(@PathVariable Long user_id){
        return userService.getUser(user_id);
    }

}
