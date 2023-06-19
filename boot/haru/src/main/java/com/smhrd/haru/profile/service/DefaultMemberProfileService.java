package com.smhrd.haru.profile.service;

import com.smhrd.haru.authentication.domain.HaruMember;
import com.smhrd.haru.profile.mapper.MemberProfileMapper;
import io.jsonwebtoken.JwtParser;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DefaultMemberProfileService
        implements MemberProfileService {

    private final MemberProfileMapper mapper;
    private final JwtParser jwtParser;

    @Override
    public HaruMember findByUserId(String userId) {
        return mapper
                .findByUserId(userId)
                .orElseThrow(IllegalStateException::new);
    }

    @Override
    public HaruMember findFromRequestInAuth(HttpServletRequest request) {
        String authorizationHeader = request.getHeader("Authorization");

        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            throw new IllegalArgumentException("Bearer 토큰이 없습니다.");
        }

        String accessToken = authorizationHeader.substring(7);
        String userId = jwtParser.parseClaimsJws(accessToken)
                .getBody()
                .getSubject();

        return findByUserId(userId);
    }
}
