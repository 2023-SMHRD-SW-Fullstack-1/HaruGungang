package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class TblNutrifact {
	
	private int nutri_seq;
	private String nutri_name;
	private String nutri_effect;

}
