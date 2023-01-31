package com.org.samplelogin.dataprovider;

import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;

import org.apache.commons.io.IOUtils;

import com.org.samplelogin.entity.ApiDetailsEntity;

public class SERISDataprovider {
	
	public String connectToLogin(String requestJson, String configUrl) throws Exception{
		
		final String targetURL = configUrl;
		URL url = new URL(targetURL);
		HttpURLConnection httpscon = null;
		
		httpscon = (HttpURLConnection) url.openConnection();
		httpscon.setDoOutput(true);
		httpscon.setRequestMethod("POST");
		httpscon.setRequestProperty("Content-Type","application/json");
		
		byte[] postData = String.valueOf(requestJson).getBytes(Charset.forName("UTF-8"));
		httpscon.setRequestProperty("Content-Length", String.valueOf(postData.length));
		String respstring = null;
		String tokenstring = null;
		httpscon.setConnectTimeout(16000);
		try {
			System.out.print("Debug Flag");
			httpscon.getOutputStream().write(postData);
			httpscon.connect();
			System.out.print("Debug Flag");
			respstring = IOUtils.toString(new InputStreamReader (httpscon.getInputStream()));
			tokenstring = httpscon.getHeaderField("token");
			System.out.print(tokenstring);
		} catch(Exception ex) {
			System.out.print(ex.getMessage());
		} finally {
			httpscon.disconnect();
		}
		return respstring;
	}
	
public String connectToOtherDetails(String requestJson, String configUrl, String apiKey) throws Exception{
		
		final String targetURL = configUrl;
		URL url = new URL(targetURL);
		HttpURLConnection httpscon = null;
		
		httpscon = (HttpURLConnection) url.openConnection();
		httpscon.setDoOutput(true);
		httpscon.setRequestMethod("POST");
		httpscon.setRequestProperty("Content-Type","application/json");
		
		byte[] postData = String.valueOf(requestJson).getBytes(Charset.forName("UTF-8"));
		httpscon.setRequestProperty("Content-Length", String.valueOf(postData.length));
		String respstring = null;
		String tokenstring = null;
		httpscon.setConnectTimeout(16000);
		try {
			System.out.print("Debug Flag");
			httpscon.getOutputStream().write(postData);
			httpscon.connect();
			System.out.print("Debug Flag");
			respstring = IOUtils.toString(new InputStreamReader (httpscon.getInputStream()));
			tokenstring = httpscon.getHeaderField("token");
			System.out.print(tokenstring);
		} catch(Exception ex) {
			System.out.print(ex.getMessage());
		} finally {
			httpscon.disconnect();
		}
		return respstring;
	}
	
}
