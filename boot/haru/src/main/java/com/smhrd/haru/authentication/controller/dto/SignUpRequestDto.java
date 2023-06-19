package com.smhrd.haru.authentication.controller.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.smhrd.haru.authentication.domain.type.Gender;
import com.smhrd.haru.authentication.domain.type.UserType;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

import java.time.OffsetDateTime;

import static com.smhrd.haru.authentication.domain.policy.HaruMemberPolicy.USER_ID_MESSAGE;
import static com.smhrd.haru.authentication.domain.policy.HaruMemberPolicy.USER_ID_REGEXP;
import static com.smhrd.haru.authentication.domain.policy.HaruMemberPolicy.USER_PW_MESSAGE;
import static com.smhrd.haru.authentication.domain.policy.HaruMemberPolicy.USER_PW_REGEXP;

public record SignUpRequestDto(
        @NotEmpty(message = "아이디를 입력하세요.")
        @Pattern(
                regexp = USER_ID_REGEXP,
                message = USER_ID_MESSAGE
        )
        @JsonProperty("username")
        String userId,

        @NotEmpty(message = "비밀번호를 입력하세요.")
        @Pattern(
                regexp = USER_PW_REGEXP,
                message = USER_PW_MESSAGE
        )
        @JsonProperty("password")
        String userPw,

        @NotNull
        @JsonProperty("gender")
        Gender userGender,

        @NotNull
        @JsonProperty("birth")
        OffsetDateTime userBirthdate,

        @JsonProperty("certType")
        UserType userType
) {
    public SignUpRequestDto {
        if (userType == null) {
            userType = UserType.C;
        }
    }
}
