package com.smhrd.haru.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.haru.domain.TblNutrifact;
import com.smhrd.haru.domain.TblUserSurvey;
import com.smhrd.haru.service.SurveyService;

@RestController
@CrossOrigin("http://localhost:3000")
public class SurveyController {
	
	@Autowired
	private SurveyService service;

	//1. survey 결과 출력 
	@GetMapping("/survey")
	public JSONArray survey(@RequestParam("gender") char gender, @RequestParam("birthYear") int birthyear, @RequestParam("interest") String interest) {
		
		//survey 정보 가져오기
		TblUserSurvey survey =  new TblUserSurvey(gender, birthyear, interest);
		System.out.println(survey.getSurvey_result_seq());
		String[] surveyResult = survey.getSurvey_result_seq().split(",");
		System.out.println(surveyResult[0] + surveyResult[1] + surveyResult[2]);
		
		int rec1 = Integer.parseInt(surveyResult[0]);
		int rec2 = Integer.parseInt(surveyResult[1]);
		int rec3 = Integer.parseInt(surveyResult[2]);
		
		
		//설문조사 결과 영양제 추천
		JSONArray nutri = service.recNutriByInterest(rec1, rec2, rec3);
		
		System.out.println(nutri);
		
		return nutri;
		
//		int cnt = service.addSurvey(survey);
//		
//		System.out.println(cnt);
//		
//		if(cnt>0) {
//			System.out.println("설문 성공");
//		}else {
//			System.out.println("설문 실패");
//		}
	}

}
