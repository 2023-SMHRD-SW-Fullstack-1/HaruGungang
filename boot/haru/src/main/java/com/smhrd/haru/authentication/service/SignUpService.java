package com.smhrd.haru.authentication.service;

import com.smhrd.haru.authentication.controller.dto.SignUpRequestDto;
import com.smhrd.haru.authentication.controller.dto.SignUpResponseDto;
import com.smhrd.haru.authentication.domain.HaruMember;

public interface SignUpService {
    HaruMember signUp(HaruMember haruMember);
    SignUpResponseDto signUp(SignUpRequestDto dto);
}
