import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SurveyResult from "./components/SurveyResult";
import Main from "./components/Main";
import Mypage from "./components/Mypage";
import WishList from "./components/WishList";
import Preview from "./components/Preview";
import Survey from "./components/Survey";
import Login from "./components/Login"
import Join from "./components/member/Join";
import Delete from "./components/member/Delete";
import NutritionInfo from "./components/Main/NutritionInfo";
import ResultSameNutri from "./components/wishList/ResultSameNutri";
import ResultOtherNutri from "./components/wishList/ResultOtherNutri";
import SurveyNew from "./components/SurveyNew";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './index.css'

function App() {
  return (
    <div className="bgColor">
      <Header />
      <Routes>
        <Route path="/haru" element={<Preview />} />
        <Route path="/haru/survey" element={<SurveyNew />} />
        <Route path="/haru/survey/result" element={<SurveyResult />} />
        <Route path="/haru/main" element={<Main />} />
        <Route path="/haru/mypage" element={<Mypage />} />
        <Route path="/haru/wishlist" element={<WishList />} />
        <Route path="haru/login" element={<Login />} />
        <Route path="haru/join" element={<Join />}/>
        <Route path="haru/delete" element={<Delete />}/>
        <Route path="haru/info/nutri" element={<NutritionInfo />} />
        <Route path="haru/wishlist/samenutri" element={<ResultSameNutri/>}/>
        <Route path="haru/wishlist/othernutri" element={<ResultOtherNutri/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
