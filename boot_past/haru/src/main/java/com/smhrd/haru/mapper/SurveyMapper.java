package com.smhrd.haru.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.haru.domain.TblNutrifact;
import com.smhrd.haru.domain.TblUserSurvey;

@Mapper
public interface SurveyMapper {
	
	//설문조사 결과 영양제 추천
	public List<TblNutrifact> recNutriByInterest(int rec1, int rec2, int rec3);
	
	
	public int addSurvey(TblUserSurvey survey);
	
}


