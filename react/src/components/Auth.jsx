import React, {useEffect} from 'react';
import axios from "axios";
import qs from "qs";
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_CLIENT_ID
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_CALLBACK_URL

    const navigate = useNavigate();

    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
        const payload = qs.stringify({
          grant_type: "authorization_code",
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code: code,
        });
        try {
          // access token 가져오기
          const res = await axios.post(
            "https://kauth.kakao.com/oauth/token",
            payload

          );
            console.log('토큰 :', res);
          // Kakao Javascript SDK 초기화
          window.Kakao.init(REST_API_KEY);
          // access token 설정
          window.Kakao.Auth.setAccessToken(res.data.access_token);
          navigate("/profile");

        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        getToken();
    }, []);

    return (
        <div>
            {/* { code } */}
        </div>
    );
};
export default Auth;