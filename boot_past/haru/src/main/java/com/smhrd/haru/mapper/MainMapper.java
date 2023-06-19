package com.smhrd.haru.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.haru.domain.TblNutriRecVol;

@Mapper
public interface MainMapper {

	public List<TblNutriRecVol> recNutriList();
}
