package com.smhrd.haru.authentication.service;

import jakarta.servlet.http.HttpServletRequest;

public interface RefreshTokenService {
    String refresh(HttpServletRequest request);
}
