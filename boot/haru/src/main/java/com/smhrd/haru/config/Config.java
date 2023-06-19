package com.smhrd.haru.config;

import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.security.Key;

@Configuration
@RequiredArgsConstructor
public class Config {
	@Bean
	public JwtParser jwtParser(@Value("${security.jwt.secret}") String secretAsString) {
		byte[] keyBytes = Decoders.BASE64.decode(secretAsString);
		Key secretKey = Keys.hmacShaKeyFor(keyBytes);
		
		return Jwts.parserBuilder()
				.setSigningKey(secretKey)
				.build();
	}
}