package com.org.samplelogin.controller;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.org.samplelogin.bean.request.GetDataReq;
import com.org.samplelogin.bean.request.RegisterRequest;
import com.org.samplelogin.repository.ApiDetailsRepository;
import com.org.samplelogin.service.GetDetailsAPIService;

@RestController
@RequestMapping(path="/view")
public class ViewController {
	
	@Autowired
	ApiDetailsRepository apiDetailsRepository;

	@PostMapping("/getData")
	public String getData(@RequestBody GetDataReq request
			   ,HttpServletResponse response) {
		
		GetDetailsAPIService getDataUtils = new GetDetailsAPIService();
		getDataUtils.startProcess(apiDetailsRepository, request);
		return "test";
	}
	
	@PostMapping("/test")
	public String getData() {
		return "test";
	}
	
}
