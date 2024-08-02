package com.example.iauro.entites;

import org.springframework.security.core.GrantedAuthority;

public class Authority implements GrantedAuthority{
	
	private String authotity;
	
	

	public Authority() {
		super();
	}

	public Authority(String authotity) {
		super();
		this.authotity = authotity;
	}

	@Override
	public String getAuthority() {
		// TODO Auto-generated method stub
		return this.authotity;
	}
	

}
