import AcUnitIcon from "@mui/icons-material/AcUnit";
import CurrentUserProfile from "./pages/CurrentUserProfile/CurrentUserProfile";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import NewProduct from "./pages/NewProduct/NewProduct";
import Register from "./pages/Register/Register";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import SignIn from "./pages/SignIn/SignIn";
import ExchangeProducts from "./pages/ExchangeProducts/ExchangeProducts";
import ExchangeProductDetail from "./pages/ExchangeProductDetail/ExchangeProductDetail";
function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Product /> */}
      {/* <Profile /> */}
      {/* <CurrentUserProfile /> */}
      {/* <NewProduct mode="sell" /> */}
      {/* <Register /> */}
      {/* <VerifyOtp /> */}
      {/* <SignIn /> */}
      {/* <NewProduct mode="exchange" /> */}
      {/* <ExchangeProducts /> */}
      <ExchangeProductDetail />
    </>
  );
}

export default App;
