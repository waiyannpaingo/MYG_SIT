package com.org.samplelogin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.org.samplelogin.entity.UserEntity;
import com.org.samplelogin.objects.CustomUserDetails;
import com.org.samplelogin.repository.UserRepository;

public class CustomUserDetailsService implements UserDetailsService {
	 
    @Autowired
    private UserRepository userRepo;
     
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	UserEntity user = userRepo.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomUserDetails(user);

    }
 
}