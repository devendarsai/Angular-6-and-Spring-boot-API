package com.example;

import java.util.ArrayList;
import java.util.List;

public class Data {

	String name;
	List<String> cars=new ArrayList<String>();
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getCars() {
		return cars;
	}

	public void setCars(List<String> cars) {
		this.cars = cars;
	}


	

}
