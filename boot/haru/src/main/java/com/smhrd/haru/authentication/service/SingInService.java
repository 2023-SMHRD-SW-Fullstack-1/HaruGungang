package com.smhrd.haru.authentication.service;

import com.smhrd.haru.authentication.controller.dto.SignInRequestDto;
import com.smhrd.haru.authentication.controller.dto.SignInResponseDto;

public interface SingInService {
    String signIn(String userId, String password);
    SignInResponseDto signIn(SignInRequestDto dto);
}
