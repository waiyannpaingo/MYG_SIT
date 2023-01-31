package com.org.samplelogin.jwtutils;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.org.samplelogin.bean.request.JwtRequestModel;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Clock;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.DefaultClock;

@Component
public class TokenManager implements Serializable{
	   private static final long serialVersionUID = 7008375124389347049L; public static final long TOKEN_VALIDITY = 10 * 60 * 60; @Value("${secret}") 
	   private String jwtSecret;
	   private Clock clock = DefaultClock.INSTANCE;
	   
	   @Value("${jwt.token.expirateion.in.seconds}")
	   private Long expiration;
	   
	   public String generateJwtToken(UserDetails userDetails) { 
	      Map<String, Object> claims = new HashMap<>(); 
	      return Jwts.builder().setClaims(claims).setSubject(userDetails.getUsername()) 
	         .setIssuedAt(new Date(System.currentTimeMillis())) 
	         .setExpiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000)) 
	         .signWith(SignatureAlgorithm.HS512, jwtSecret).compact(); 
	   } 
	   public Boolean validateJwtToken(String token, UserDetails userDetails) {
	      String username = getUsernameFromToken(token); 
	      Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
	      Boolean isTokenExpired = claims.getExpiration().before(new Date()); 
	      return (username.equals(userDetails.getUsername()) && !isTokenExpired); 
	   } 
	   public String getUsernameFromToken(String token) {
	      final Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody(); 
	      return claims.getSubject(); 
	   }
	   
	   public String generateMetaDataToken(JwtRequestModel request) {
		   Map<String, Object> claims = new HashMap<>();
		   return dogenerateDataToken(claims, request.toString());
	   }
	   
	   private String dogenerateDataToken(Map<String, Object> claims, String subject) {
		   final Date createdDate = clock.now();
		   final Date expirationDate = calculateExpirationDate(createdDate);
		   return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(createdDate) 
			         .setExpiration(expirationDate).signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
	   }
	   
	   private Date calculateExpirationDate(Date createdDate) {
		   return new Date(createdDate.getTime() + expiration *1000);
	   }
	   
	   public String refreshToken(String token) {
		   final Date createdDate = clock.now();
		   final Date expirationDate = calculateExpirationDate(createdDate);
		   final Claims claims;
		   try {
			   claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
			   claims.setIssuedAt(createdDate);
			   claims.setExpiration(expirationDate);
			   return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
		   }catch(IllegalArgumentException e) {
			   return e.getMessage();
		   } catch (ExpiredJwtException e) {
			   return e.getMessage();
		   }
	   }
	   
	   
	   
}
