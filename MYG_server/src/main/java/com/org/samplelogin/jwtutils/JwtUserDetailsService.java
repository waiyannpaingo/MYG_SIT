package com.org.samplelogin.jwtutils;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.org.samplelogin.entity.UserEntity;
import com.org.samplelogin.repository.UserRepository;


@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

		UserEntity user = userRepository.findByEmail(email);
		
		if(user == null) {
			throw new UsernameNotFoundException("User not found with email: " + email); 
		}else {
			return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
		}
	}
}
