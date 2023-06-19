package com.smhrd.haru.profile.service;

import com.smhrd.haru.authentication.domain.HaruMember;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Optional;

public interface MemberProfileService {
    HaruMember findByUserId(String userId);
    HaruMember findFromRequestInAuth(HttpServletRequest request);
}
