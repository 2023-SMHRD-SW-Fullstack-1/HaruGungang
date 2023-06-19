package com.smhrd.haru.authentication.mapper;

import com.smhrd.haru.authentication.domain.HaruMember;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;
import java.util.Optional;

@Mapper
public interface AuthenticationMapper {
    int save(HaruMember haruMember);
    Optional<HaruMember> findByUserId(String userId);
    Optional<HaruMember> findByUserIdAndUserPw(Map<String, String> userIdAndUserPw);
}
