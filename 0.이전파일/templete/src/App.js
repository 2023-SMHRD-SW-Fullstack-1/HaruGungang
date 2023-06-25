import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SurveyResult from "./components/SurveyResult";
import Main from "./components/Main";
import Mypage from "./components/Mypage";
import WishList from "./components/WishList";
import Preview from "./components/Preview";
import Login from "./components/Login";
import Join from "./components/member/Join";
import Delete from "./components/member/Delete";
import ResultSameNutri from "./components/wishList/ResultSameNutri";
import ResultOtherNutri from "./components/wishList/ResultOtherNutri";
import SurveyNew from "./components/SurveyNew";
import NutriDetail from "./components/Nutri/NutriDetail";
import ProductDetail from "./components/Product/ProductDetail";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Auth from "./components/Auth";
import ProfilePath from "./components/profilePath";
import "./index.css";

const kakaoClientId = "9682bae209042aa5b5a5dde259553bc4";
const kakaoRedirectUri = "http://localhost:3000/auth/kakao/callback";
const loginUri = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientId}\
&redirect_uri=${kakaoRedirectUri}&response_type=code`;

const naverClientId = "4aWJJDtBTDQlg2SlFym8";
const naverRedirectUri = "http://localhost:3000/auth/naver/callback";
const naverLoginUri = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&redirect_uri=${naverRedirectUri}&state=hLiDdL2uhPtsftcU`;

function App() {
  const [productIdMain, setProductIdMain] = useState();
  const [nutri, setNutri] = useState("");

  //임시 유저 아이디
  // const [userId, setUserId] = useState();
  let userId = "test3";

  // useEffect(() => {
  //   setUserId(sessionStorage.getItem("id"));
  // }, [isLogin]);

  //로그인 상태
  const [isLogin, setIsLogin] = useState(true);

  // //위시리스트
  // const [wishList, setWishList] = useState([]);

  //찜하기 data
  const wishData = {
    productIdMain: `${productIdMain}`,
    userId: `${userId}`,
  };

  //찜하기 클릭시 이벤트 >> DB에 제품 저장
  const addWishList = () => {
    if (isLogin) {
      console.log("찜하기 클릭", wishData);

      axios
        .post("http://localhost:8085/haru/addwishlist", wishData)
        .then((res) => {
          console.log(res.data);
          if (res.data == 0) {
            alert("이미 추가된 제품입니다.");
          }
        })
        .catch((e) => {
          console.log("error", e);
        });
    } else {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <div>
      <Header />
      <Routes>
        {/* 첫 페이지 */}
        <Route path="/haru/preview" element={<Preview />} />

        {/* 설문조사 페이지 */}
        <Route path="/haru/survey" element={<SurveyNew />} />

        {/* 설문조사 결과 페이지 */}
        <Route path="/haru/survey/result" element={<SurveyResult />} />

        {/* 메인페이지 */}
        <Route path="/haru/main" element={<Main />} />

        {/* 마이페이지 */}
        <Route path="/haru/mypage" element={<Mypage />} />

        {/* 찜리스트 */}
        <Route path="/haru/wishlist" element={<WishList userId={userId} />} />

        {/* 로그인 */}
        <Route
          path="/haru/login/:menu"
          element={<Login KAKAO_AUTH_URL={loginUri} />}
        />
        <Route path="/auth/kakao/callback" element={<Auth />} />
        <Route path="/profile" element={<ProfilePath />} />
        <Route path="/haru/join" element={<Join />} />
        <Route path="/haru/delete" element={<Delete />} />

        {/* 찜리스트 > 비교 (같은 영양성분) */}
        <Route path="/haru/wishlist/samenutri" element={<ResultSameNutri />} />

        {/* 찜리스트 > 비교 (다른 영양성분) */}
        <Route
          path="/haru/wishlist/othernutri"
          element={<ResultOtherNutri />}
        />

        {/* 영양성분 상세정보 페이지 */}
        <Route path="/haru/nutri/:nutri_name" element={<NutriDetail />} />

        {/* 제품 상세페이지 */}
        <Route
          path="/haru/product/:productId"
          element={
            <ProductDetail
              productId={productIdMain}
              setProductIdMain={setProductIdMain}
              nutri={nutri}
              setNutri={setNutri}
              wishData={wishData}
              addWishList={addWishList}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
