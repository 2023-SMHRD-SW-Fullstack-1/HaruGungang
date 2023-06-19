package com.smhrd.haru.authentication.service;

import com.smhrd.haru.authentication.controller.dto.SignInRequestDto;
import com.smhrd.haru.authentication.controller.dto.SignInResponseDto;
import com.smhrd.haru.authentication.controller.dto.SignUpRequestDto;
import com.smhrd.haru.authentication.controller.dto.SignUpResponseDto;
import com.smhrd.haru.authentication.domain.HaruMember;
import com.smhrd.haru.authentication.mapper.AuthenticationMapper;
import com.smhrd.haru.profile.service.MemberProfileService;
import com.smhrd.haru.util.jwt.JwtProvider;
import com.smhrd.haru.util.time.ServerTime;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public final class AuthenticationService
    implements SignUpService, SingInService, RefreshTokenService {

    private final AuthenticationMapper mapper;
    private final JwtProvider jwtProvider;
    private final MemberProfileService memberProfileService;

    @Override
    public HaruMember signUp(HaruMember haruMember) {
        boolean saved = mapper.save(haruMember) > 0;

        if (!saved) {
            throw new IllegalStateException("회원가입이 이루어지지 않음.");
        }

        return haruMember;
    }

    @Override
    public SignUpResponseDto signUp(SignUpRequestDto dto) {
        HaruMember haruMember = HaruMember.builder()
                .userId(dto.userId())
                .userPw(dto.userPw())
                .userGender(dto.userGender())
                .userBirthdate(dto.userBirthdate())
                .userJoindate(ServerTime.now())
                .userType(dto.userType())
                .build();

        return SignUpResponseDto.builder()
                .success(signUp(haruMember) != null)
                .build();
    }

    @Override
    public String signIn(String userId, String password) {
        Map<String, String> paramMap =
                Map.of("userId", userId, "userPw", password);

        HaruMember haruMember = mapper.findByUserIdAndUserPw(paramMap)
                .orElseThrow(IllegalArgumentException::new);

        if (haruMember == null) {
            throw new IllegalArgumentException("인증 정보가 일치하지 않습니다.");
        }

        return jwtProvider.generate(userId);
    }

    @Override
    public SignInResponseDto signIn(SignInRequestDto dto) {
        return SignInResponseDto.builder()
                .token(signIn(dto.userId(), dto.userPw()))
                .build();
    }

    @Override
    public String refresh(HttpServletRequest request) {
        // No check if refreshable, yet.

        // Get user ID from request
        String userId = memberProfileService
                .findFromRequestInAuth(request)
                .getUserId();

        // Issue new access token
        return jwtProvider.generate(userId);
    }
}
