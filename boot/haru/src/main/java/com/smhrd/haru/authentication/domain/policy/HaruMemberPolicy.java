package com.smhrd.haru.authentication.domain.policy;

public final class HaruMemberPolicy {
    public static final String USER_ID_REGEXP = "^[a-zA-Z][0-9a-zA-Z]{4,30}$";
    public static final String USER_ID_MESSAGE = "아이디는 영문으로 시작해야 하며, 영문, 숫자 조합으로 4~30글자로 입력하십시오.";
    public static final String USER_PW_REGEXP = "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$";
    public static final String USER_PW_MESSAGE = "비밀번호는 영문, 숫자, 특수문자를 모두 포함하여 8~30글자로 입력하십시오.";

    private HaruMemberPolicy() {}
}
