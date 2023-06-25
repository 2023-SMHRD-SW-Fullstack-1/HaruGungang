package com.smhrd.haru.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.TblNutrifact;
import com.smhrd.haru.domain.TblUserSurvey;
import com.smhrd.haru.mapper.SurveyMapper;

@Service
public class SurveyService {
	
	@Autowired
	private SurveyMapper mapper;
	
	//설문조사 결과 영양제 추천
	public JSONArray recNutriByInterest(int rec1, int rec2, int rec3){
		
		System.out.println(rec1);
		System.out.println(rec2);
		System.out.println(rec3);
		
		List<TblNutrifact> list = mapper.recNutriByInterest(rec1, rec2, rec3);
		JSONArray nutri = new JSONArray();
		
		for(TblNutrifact item : list) {
			String nutriName = item.getNutri_name();
			String nutriEffect = item.getNutri_effect();
			
			JSONObject obj = new JSONObject();
			obj.put("nutri", item);
			nutri.add(obj);
		}
		return nutri;
	}
	
	
	public int addSurvey(TblUserSurvey survey) {
		System.out.println("service");
		return mapper.addSurvey(survey);
	}

}
