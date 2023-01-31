package com.org.samplelogin.service;

import com.org.samplelogin.bean.request.GetDataReq;
import com.org.samplelogin.dataprovider.SERISDataprovider;
import com.org.samplelogin.entity.ApiDetailsEntity;
import com.org.samplelogin.repository.ApiDetailsRepository;

public class GetDetailsAPIService {

	public String startProcess(ApiDetailsRepository apiDetailsRepository, GetDataReq request) {
		System.out.print("StartProcess");
		
		SERISDataprovider serisDataProvider = new SERISDataprovider();
		boolean dateReceived = false;
		
		ApiDetailsEntity apiDetails = apiDetailsRepository.findByFuncKey("otherData");
		ApiDetailsEntity apiDetailsLogin = apiDetailsRepository.findByFuncKey("login");
		
		if(apiDetails.getApiToken() != null) {
			//OtherDetailsAPI
			String response = connectOtherDetailsAPI(serisDataProvider, apiDetails
					,request);
			if(response != null) {
				//done
				return response;
			} 
		}
		//login
		String token = connectLoginAPI(serisDataProvider, apiDetailsLogin);
		apiDetails.setApiToken(token);
		apiDetailsRepository.save(apiDetails);
		//apiDetails
		String response = connectOtherDetailsAPI(serisDataProvider, apiDetails, request);
		//final
		if(response != null) {
			return response;
		}
		
		return null;
			
	}
	
	private String connectLoginAPI(SERISDataprovider serisDataProvider,
			ApiDetailsEntity apiDetails) {
		try {
			//turn request to json
			String requestJson = "{\"email\" : \"test@gmail.com\",\"password\" : \"September2022\"}";
			String configUrl = apiDetails.getApiUrl();
			
			String response = serisDataProvider.connectToLogin(requestJson, configUrl);
			System.out.println(response);
			return response;
		} catch(Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
	
	private String connectOtherDetailsAPI(SERISDataprovider serisDataProvider, 
			ApiDetailsEntity apiDetails, GetDataReq request) {
		try {
			//turn request to json
			String requestJson = "{\"email\" : \"test@gmail.com\",\"password\" : \"September2022\"}";
			String configUrl = apiDetails.getApiUrl();
			
			String response = serisDataProvider.connectToOtherDetails(requestJson, configUrl,
					apiDetails.getApiToken());
			System.out.println(response);
			return response;
		} catch(Exception e) {
			System.out.println(e.getMessage());
			return null;
		}
	}
}
