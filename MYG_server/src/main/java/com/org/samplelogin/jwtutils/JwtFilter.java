package com.org.samplelogin.jwtutils;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import io.jsonwebtoken.ExpiredJwtException;
@Component
public class JwtFilter extends OncePerRequestFilter {
   @Autowired
   private JwtUserDetailsService userDetailsService;
   @Autowired
   private TokenManager tokenManager;
   @Override
   protected void doFilterInternal(HttpServletRequest request,
      HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {
      
      String tokenHeader = request.getHeader("Authorization");
      String email = null;
      String token = null;
      if (tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
         token = tokenHeader.substring(7);
         try {
            email = tokenManager.getUsernameFromToken(token);
         } catch (IllegalArgumentException e) {
            System.out.println("Unable to get JWT Token");
         } catch (ExpiredJwtException e) {
            System.out.println("JWT Token has expired");
         }
      } else {
         System.out.println("Bearer String not found in token");
      }
      if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
         UserDetails userDetails = userDetailsService.loadUserByUsername(email);
         if (tokenManager.validateJwtToken(token, userDetails)) {
            UsernamePasswordAuthenticationToken
            authenticationToken = new UsernamePasswordAuthenticationToken(
            userDetails, null,
            userDetails.getAuthorities());
            authenticationToken.setDetails(new
            WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            
            //generate new token
            String refreshedToken = tokenManager.refreshToken(token);
            
            response.addHeader("token", refreshedToken);
         }
      }
      filterChain.doFilter(request, response);
   }
}
