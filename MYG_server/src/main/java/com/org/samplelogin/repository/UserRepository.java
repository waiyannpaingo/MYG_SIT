package com.org.samplelogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.org.samplelogin.entity.UserEntity;


public interface UserRepository extends JpaRepository<UserEntity, Long> {
	@Query("SELECT u FROM UserEntity u WHERE u.email = ?1")
    public UserEntity findByEmail(String email);
}
