package com.example;

import java.io.Console;
import java.util.ArrayList;
import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class Resource {
	
	Dao data = new Dao();

	// GET
	// URI - /data
	// method - Get Data
	@GetMapping("/data/{name}")
	public Data getData(@PathVariable String name) {
		
		
		Data d1 = new Data();
		
		for (int i = 0; i < Dao.dataaselist.size(); i++) {
			
		
//			System.out.println(Dao.dataaselist.get(i).name + "=="+ name);
			if(Dao.dataaselist.get(i).name.equals(name)) {
//				System.out.println(Dao.dataaselist.get(i).name + " is comparing with "+ name);
				
				d1 = Dao.dataaselist.get(i);
						
			}
			
		}	
		
		return d1;
	}

	@PostMapping("/postdata")
	public Data postData(@RequestBody Data d2) {

		
		Dao.database=(Data) d2;
		
		Dao.dataaselist.add(d2);
		
		return d2;

	}
}
