import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import Login from "./components/Login";
import Join from "./components/Join";
import MyPage from "./components/MyPage";
import WishList from "./components/WishList";
import Survey from "./components/Survey";
import SurveyResult from "./components/SurveyResult";
import ProductContent from "./components/ProductContent";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import DeleteMember from "./components/DeleteMember";
import UpdateMember from "./components/UpdateMember";
import { CompareSameNutri } from "./components/CompareSameNutri";
import Combination from "./components/Combination";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/survey/surveyresult" element={<SurveyResult />} />
        <Route path="/productcontent" element={<ProductContent />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/deletemember" element={<DeleteMember />} />
        <Route path="/updatemember" element={<UpdateMember />} />
        <Route path="/compareproduct" element={<CompareSameNutri />} />
        <Route path="/combination" element={<Combination />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
