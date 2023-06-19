package com.smhrd.haru.profile.mapper;

import com.smhrd.haru.authentication.domain.HaruMember;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberProfileMapper {
    Optional<HaruMember> findByUserId(String userId);
}
