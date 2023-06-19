package com.smhrd.haru.authentication.domain;

import com.smhrd.haru.authentication.domain.type.Gender;
import com.smhrd.haru.authentication.domain.type.UserType;
import com.smhrd.haru.util.time.ServerTime;
import lombok.*;

import java.time.OffsetDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@EqualsAndHashCode
public final class HaruMember {
    private Long userSeq;
    private String userId;
    private String userPw;
    private Gender userGender;
    private OffsetDateTime userBirthdate;

    @Builder.Default
    private OffsetDateTime userJoindate = ServerTime.now();

    @Builder.Default
    private UserType userType = UserType.N;

    private String snsUserId;
    private String snsUserName;
    private String snsUserEmail;
    private String snsUserAge;
    private Gender snsUserGender;
}
