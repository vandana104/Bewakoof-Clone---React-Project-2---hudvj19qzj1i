import "./styles/App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import TopHeader from "./components/Header/TopHeader";
import MainHeader from "./components/Header/MainHeader";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { Route, Routes, useLocation } from "react-router-dom";
import FilteredPage from "./components/FilteredPage/FilteredPage";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import { useEffect } from "react";
import { useStateProvider } from "./utils/StateProvider";
import SearchResults from "./components/SearchResults";
import UserAccount from "./components/User/UserAccount";
import Profile from "./components/User/Profile";

function App() {
  const location = useLocation();
  const [, dispatch] = useStateProvider();
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    const userName = localStorage.getItem("userName");

    if (jwtToken && userName) {
      dispatch({ type: "SET_NAME", payload: userName });
      dispatch({ type: "SET_TOKEN", payload: jwtToken });
    }
  }, [dispatch]);
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
            <Route path="/" exact element={<HomePage />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/filter" element={<FilteredPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/profile" element={<Profile />} />
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