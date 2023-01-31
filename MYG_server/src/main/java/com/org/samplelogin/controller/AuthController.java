package com.org.samplelogin.controller;

import java.time.Instant;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.samplelogin.bean.request.JwtRequestModel;
import com.org.samplelogin.bean.request.RegisterRequest;
import com.org.samplelogin.bean.response.AuthResponse;
import com.org.samplelogin.jwtutils.JwtUserDetailsService;
import com.org.samplelogin.jwtutils.TokenManager;
import com.org.samplelogin.objects.ValidateionObj;
import com.org.samplelogin.repository.UserRepository;
import com.org.samplelogin.service.RegisterUserService;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@CrossOrigin
public class AuthController {
   @Autowired
   private JwtUserDetailsService userDetailsService;
   @Autowired
   private AuthenticationManager authenticationManager;
   @Autowired
   private TokenManager tokenManager;
   
   @Autowired
   private UserRepository userRepository;
   
   @Value("${jwt.token.expirateion.in.seconds}")
   private String expiration;
   
   @PostMapping("/authenticate")
   public ResponseEntity<?> createToken(@RequestBody JwtRequestModel
   request) throws Exception {
      try {

  		/*BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
  		String hashedPassword = passwordEncoder.encode(request.getPassword());*/
    	  
    	  
         authenticationManager.authenticate(
            new
            UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
         );
      } catch (DisabledException e) {
         throw new Exception("USER_DISABLED", e);
      } catch (BadCredentialsException e) {
         throw new Exception("INVALID_CREDENTIALS", e);
      }
      final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
      final String jwtToken = tokenManager.generateJwtToken(userDetails);
      //String timeout = Long.toString(Instant.now().plusSeconds(Integer.parseInt(expiration)).toEpochMilli());
      //final String metaDataToken = tokenManager.generateMetaDataToken(request);
      
      HttpHeaders headers = new HttpHeaders();
      headers.add("token", jwtToken);
      
      AuthResponse response = new AuthResponse();
      response.setEmail(userDetails.getUsername());
      
      return ResponseEntity.ok().headers(headers).body(response);
   }
   
   @PostMapping("/register")
   public ValidateionObj registerUser(@RequestBody RegisterRequest request
		   ,HttpServletResponse response) throws Exception {
      
	   ValidateionObj validObj = new ValidateionObj();
	   
	   validObj = RegisterUserService.startProcess(request, userRepository);
	   
	   if(!validObj.isStatus()) {
		   response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		   return validObj;
	   }
	   
	   response.setStatus(HttpServletResponse.SC_OK);
	   return validObj;
      
   }
   
}