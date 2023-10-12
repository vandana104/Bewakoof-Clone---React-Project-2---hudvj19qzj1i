import "./styles/App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import TopHeader from "./components/Header/TopHeader";
import MainHeader from "./components/Header/MainHeader";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Header/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Route, Routes, useLocation } from "react-router-dom";
import FilteredPage from "./components/FilteredPage/FilteredPage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/login" ? (
        <Login />
      ) : location.pathname === "/signup" ? (
        <SignUp />
      ) : location.pathname === "/forgot" ? (
        <Forgot />
      ) : (
        <>
          <TopHeader />
          <MainHeader />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/filter" element={<FilteredPage />} />
          </Routes>
          <Footer />
        </>
      )}

      {/* <SignUp/> */}
      {/* <Login/>   */}
      {/* <BottomHeader/> */}
      {/* <HomePage/> */}
      {/* <Footer/> */}
      {/* <EmptyCart/> */}
      {/* <Collection/> */}
    </div>
  );
}

export default App;
