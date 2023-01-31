package com.org.samplelogin.entity;
import javax.persistence.*;

@Entity
@Table(name = "api_details")
public class ApiDetailsEntity {
     
    @Id
    private int id;
    @Column(name = "func_key")
    private String funcKey;
    @Column(name = "api_url")
    private String apiUrl;
    @Column(name = "api_token")
    private String apiToken;
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFuncKey() {
		return funcKey;
	}
	public void setFuncKey(String funcKey) {
		this.funcKey = funcKey;
	}
	public String getApiUrl() {
		return apiUrl;
	}
	public void setApiUrl(String apiUrl) {
		this.apiUrl = apiUrl;
	}
	public String getApiToken() {
		return apiToken;
	}
	public void setApiToken(String apiToken) {
		this.apiToken = apiToken;
	}
    
}