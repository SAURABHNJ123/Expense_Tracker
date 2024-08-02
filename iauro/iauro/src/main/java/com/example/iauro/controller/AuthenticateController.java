package com.example.iauro.controller;

import java.security.Principal;

import com.example.iauro.config.JwtHelper;
import com.example.iauro.entites.JWTRequest;
import com.example.iauro.entites.JWTResponse;
import com.example.iauro.entites.User;
import com.example.iauro.service.UserDetailServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin("*")
public class AuthenticateController {
    @Autowired
	private AuthenticationManager authenticationManager;
    
    @Autowired
    private UserDetailServiceImpl userDetailServiceImpl;
    
    @Autowired
    private JwtHelper jwtHelper;
    
    //genrate token
    
    @PostMapping("/genrate")
    public ResponseEntity<JWTResponse> genrateToken(@RequestBody JWTRequest jwtRequest) throws NotFoundException
    {
    	try {
    		System.out.println(jwtRequest.getUsername()+" "+jwtRequest.getPassword());
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
    		
		} catch (Exception e) {
			System.out.println("User not found gfhjftrhs");
			e.printStackTrace();
			throw new NotFoundException();
			
		}
    	
    	UserDetails userDetails= this.userDetailServiceImpl.loadUserByUsername(jwtRequest.getUsername());
    	String token= this.jwtHelper.generateToken(userDetails);
    	
    	return ResponseEntity.ok(new JWTResponse(token));
    	
    }

    @GetMapping("current-user")
    public User getCurrentUser(Principal principal) {
    	System.out.println("Curent User is: "+principal.getName());
    	User currentUser=(User)this.userDetailServiceImpl.loadUserByUsername(principal.getName());
    	     currentUser.setPassword("25420121");
    	return currentUser;
    
    }

        
    private void authenticate(String username,String password) throws Exception {
    	
    	try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    		
		} catch (DisabledException e) {
			throw new Exception("User Disable");
		}catch (BadCredentialsException e) {
			throw new Exception("Invalid User");
		}
    	
    }
	
	
}
