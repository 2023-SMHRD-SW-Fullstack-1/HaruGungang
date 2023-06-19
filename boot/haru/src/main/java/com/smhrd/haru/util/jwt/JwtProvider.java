package com.smhrd.haru.util.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public final class JwtProvider {

    private final Key secretKey;
    private final Long expireIn;


    public JwtProvider(
            @Value("${security.jwt.secret}") String secretAsSting,
            @Value("${security.jwt.expiration}") Long expiration
    ) {
        byte[] keyBytes = Decoders.BASE64.decode(secretAsSting);
        secretKey = Keys.hmacShaKeyFor(keyBytes);
        this.expireIn = expiration;
    }

    public String generate(String userId) {
        // Role 정책이 없어서 그냥 넣는 것.
        return generate(userId, "USER");
    }

    public String generate(String userId, String... roles) {
        Claims claims = Jwts.claims().setSubject(userId);

        Date now = new Date();
        Date expireAt = new Date(now.getTime() + expireIn);

        claims.put("roles", roles);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expireAt)
                .signWith(secretKey, SignatureAlgorithm.HS256)
                .compact();
    }
}