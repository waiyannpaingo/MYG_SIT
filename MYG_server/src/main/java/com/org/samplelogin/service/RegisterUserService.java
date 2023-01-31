package com.org.samplelogin.service;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.thymeleaf.util.StringUtils;

import com.org.samplelogin.bean.request.RegisterRequest;
import com.org.samplelogin.entity.UserEntity;
import com.org.samplelogin.objects.ValidateionObj;
import com.org.samplelogin.repository.UserRepository;

public class RegisterUserService {
	
	public static ValidateionObj startProcess(RegisterRequest registerRequest,
			UserRepository userRepository) {
		
		ValidateionObj isValid = new ValidateionObj();
		
		isValid = validate(registerRequest);
		
		if(isValid.isStatus()) {
			//insert
			UserEntity insertUser = new UserEntity();
			
			insertUser.setEmail(registerRequest.getEmail());
			insertUser.setFirstName(registerRequest.getFirstName());
			insertUser.setLastName(registerRequest.getLastName());
			
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	  		String hashedPassword = passwordEncoder.encode(registerRequest.getPassword());

			insertUser.setPassword(hashedPassword);
			
			userRepository.save(insertUser);
			
			isValid.setStatus(true);
			isValid.setMessage("User Account Created!");
			return isValid;
		}
		
		return isValid;
		
	}
	
	public static ValidateionObj validate(RegisterRequest registerRequest) {
		ValidateionObj isValid = new ValidateionObj();
		
		if(StringUtils.isEmpty(registerRequest.getEmail())) {
			isValid.setStatus(false);
			isValid.setMessage("Email cannot be null");
			return isValid;
		}
		
		if(StringUtils.isEmpty(registerRequest.getPassword())) {
			isValid.setStatus(false);
			isValid.setMessage("Password cannot be null");
			return isValid;
		}
		
		if(StringUtils.isEmpty(registerRequest.getFirstName())) {
			isValid.setStatus(false);
			isValid.setMessage("FirstName cannot be null");
			return isValid;
		}
		
		if(StringUtils.isEmpty(registerRequest.getLastName())) {
			isValid.setStatus(false);
			isValid.setMessage("LastName cannot be null");
			return isValid;
		}
		
		isValid.setStatus(true);
		isValid.setMessage("");
		return isValid;
	}
	
}
