package com.org.samplelogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.org.samplelogin.entity.ApiDetailsEntity;
import com.org.samplelogin.entity.UserEntity;


public interface ApiDetailsRepository extends JpaRepository<ApiDetailsEntity, Integer> {

	ApiDetailsEntity findByFuncKey(String funcKey);
	
	@Query("FROM ApiDetailsEntity WHERE func_key LIKE (:funcKey)")
    public UserEntity findByFuncKeyQuary(String funcKey);
	
}
