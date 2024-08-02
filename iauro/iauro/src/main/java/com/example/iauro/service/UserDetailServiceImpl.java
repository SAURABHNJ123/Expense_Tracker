package com.example.iauro.service;
import com.example.iauro.entites.User;
import com.example.iauro.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepo userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub

        User user=userRepository.findByUsername(username);
        System.out.println(user);

        if(user==null) {
            throw new UsernameNotFoundException("user not found");
        }

        return  user;
    }
}
