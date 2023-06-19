package com.smhrd.haru.authentication.controller.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.Builder;

@Builder
public record SignInResponseDto(
        @JsonInclude(Include.NON_EMPTY)
        String token
) {
}