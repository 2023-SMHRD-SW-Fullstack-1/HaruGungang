package com.smhrd.haru.authentication.controller;

import com.smhrd.haru.authentication.controller.dto.SignInRequestDto;
import com.smhrd.haru.authentication.controller.dto.SignInResponseDto;
import com.smhrd.haru.authentication.controller.dto.SignUpRequestDto;
import com.smhrd.haru.authentication.controller.dto.SignUpResponseDto;
import com.smhrd.haru.authentication.service.RefreshTokenService;
import com.smhrd.haru.authentication.service.SignUpService;
import com.smhrd.haru.authentication.service.SingInService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public final class AuthenticationController {

    private final SignUpService signUpService;
    private final SingInService singInService;
    private final RefreshTokenService refreshTokenService;

    @PostMapping("/sign-up")
    public SignUpResponseDto signUp(
            @RequestBody @Valid SignUpRequestDto body
    ) {
        return signUpService.signUp(body);
    }

    @PostMapping("/sign-in")
    public SignInResponseDto signIn(@RequestBody @Valid SignInRequestDto body) {
        return singInService.signIn(body);
    }

    @PostMapping("/refresh")
    public SignInResponseDto refresh(HttpServletRequest request) {
        return SignInResponseDto.builder()
                .token(refreshTokenService.refresh(request))
                .build();
    }
}
