package com.smhrd.haru.authentication.domain.type;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum UserType {
    // 프론트에서 NORMAL로 보내면 여기 매핑
    @JsonProperty("NAVER")
    // 프론트에서 SNS로 보내면 여기 매핑
    N,
    @JsonProperty("KAKAO")
    K,
    @JsonProperty("COMMON")
    C
}
