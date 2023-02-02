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
import ExchangeWithProduct from "./pages/ExchangeWithProduct/ExchangeWithProduct";
import ChatBox from "./pages/ChatBox/ChatBox";
import { Routes, Route } from "react-router-dom";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/relatedproduct" element={<RelatedProducts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/currentuserprofile" element={<CurrentUserProfile />} />
          <Route path="/addsellproduct" element={<NewProduct mode="sell" />} />
          <Route
            path="/addexchangeproduct"
            element={<NewProduct mode="exchange" />}
          />
          <Route path="/exchangeproducts" element={<ExchangeProducts />} />
          <Route
            path="/exchangeproductdetails"
            element={<ExchangeProductDetail />}
          />
          <Route path="/exchangewith" element={<ExchangeWithProduct />} />
          <Route path="/chatbox" element={<ChatBox />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
