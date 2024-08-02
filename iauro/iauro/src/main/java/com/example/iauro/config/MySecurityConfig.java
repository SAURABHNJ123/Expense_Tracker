package com.example.iauro.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@EnableWebSecurity
@Configuration
//@EnableMethodSecurity
public class MySecurityConfig{
	
	@Autowired
	private JwtAuthenticationEntryPoint unothrizedHandler;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
	private JwtAthenticationFilter jwtAthenticationFilter;
	
	@Autowired
	private UserDetailsService userDetailsService;


    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
        return builder.getAuthenticationManager();
    }
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

      return  http.csrf(csrf -> csrf.disable())
             .cors(cors->cors.disable())
             .authorizeHttpRequests(auth->auth.requestMatchers("/genrate","/user/**").permitAll().requestMatchers(HttpMethod.OPTIONS).permitAll().anyRequest().authenticated())
             .exceptionHandling(ex->ex.authenticationEntryPoint(unothrizedHandler))
             .sessionManagement(se->se.sessionCreationPolicy(SessionCreationPolicy.STATELESS)).authenticationProvider(authenticationProvider()).addFilterBefore(jwtAthenticationFilter,UsernamePasswordAuthenticationFilter.class).build();
             
    }
    
    @Bean
    public AuthenticationProvider authenticationProvider() {
    	DaoAuthenticationProvider daoProvider=new DaoAuthenticationProvider();
    	daoProvider.setUserDetailsService(userDetailsService);
        daoProvider.setPasswordEncoder(passwordEncoder);



    	return daoProvider;
    	
    }
	

}
