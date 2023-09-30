import "./styles/App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import TopHeader from "./components/Header/TopHeader";
import MainHeader from "./components/Header/MainHeader";
import BottomHeader from "./components/Header/BottomHeader";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Header/Footer";
import EmptyCart from "./components/Cart/EmptyCart";


function App() {
  return (
      <div className="App">
            
         <TopHeader/>
         <MainHeader/>
                  {/* <SignUp/> */}

         {/* <Login/>   */}
         <BottomHeader/>
         {/* <HomePage/> */}
         {/* <Footer/> */}
         {/* <EmptyCart/> */}
      </div>
  )
}

export default App;
