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
import EditProduct from "./pages/EditProduct/EditProduct";
import Search from "./pages/Search/Search";
import EditExchangeProduct from "./pages/EditProduct/EditExchangeProduct";
import ExchangeWithProductDetails from "./pages/ExchangeWithProductDetails/ExchangeWithProductDetails";
import Analytics from "./pages/Analytics/Analytics";
import Awards from "./pages/Awards/Awards";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/relatedproduct" element={<RelatedProducts />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/currentuserprofile" element={<CurrentUserProfile />} />
          <Route path="/addsellproduct" element={<NewProduct mode="sell" />} />
          <Route path="/editproduct/:productId" element={<EditProduct />} />
          <Route
            path="/editexchangeproduct/:productId"
            element={<EditExchangeProduct />}
          />
          <Route path="/search" element={<Search />} />
          <Route
            path="/addexchangeproduct"
            element={<NewProduct mode="exchange" />}
          />
          <Route path="/exchangeproducts" element={<ExchangeProducts />} />
          <Route
            path="/exchangeproductdetails/:productId"
            element={<ExchangeProductDetail />}
          />
          <Route
            path="/exchangewith/:productId"
            element={<ExchangeWithProduct />}
          />
          <Route
            path="/exchangewithproductdetails/:productId"
            element={<ExchangeWithProductDetails />}
          />
          <Route path="/chatbox" element={<ChatBox />} />
          {/* analytics for working product */}
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/views" element={<Awards />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
