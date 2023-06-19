package com.smhrd.haru.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin("http://localhost:3000")
public class HomeController {
	
	@GetMapping("/")
	public String test() {
		return "test";
	}
	
}
