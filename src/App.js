import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header"
import Footer from "./components/footer/footer";
import {lazy, Suspense} from 'react';
// import {analytics} from "./firebase"; // import the analytics instance
// import {logEvent} from "firebase/analytics";
import Loading from "./components/loading/loading";
import {AuthProvider} from "./pages/admin/useAuth";
import AdminLogin from "./pages/admin/AdminLogin";
import PrivateRoute from "./pages/admin/privateRoute";
import AdminPanel from "./pages/admin/admin";

const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about/about"));
const ContactUs = lazy(() => import("./pages/contactUs/contactUs"));
const Product = lazy(() => import("./pages/products/products"));
const ProductDetails = lazy(() => import("./pages/productDetails/productDetails"));


function App() {
    // useEffect(() => {
    //     logEvent(analytics, "page_view");
    //     const logPageView = () => {
    //         logEvent(analytics, "page_view", {
    //             page_title: "home",
    //             page_location: "/",
    //         });
    //     };
    //     logPageView();
    // }, []);

    return (
        <AuthProvider>
            <div className="App">
                <Header />
                <Suspense fallback={
                    <div style={{ height: "80vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Loading />
                    </div>
                }>
                    <Routes>
                        <Route element={<Home />} path={"/home"} />
                        <Route element={<Home />} path={"/"} />
                        <Route element={<About />} path={"/about-us"} />
                        <Route element={<ContactUs />} path={"/contactUs"} />
                        <Route element={<Product />} path="/products" />
                        <Route element={<ProductDetails />} path="/products/:id" />

                        {/* Admin routes */}
                        <Route element={<AdminLogin />} path="/admin-login" />
                        <Route element={
                            <PrivateRoute>
                                <AdminPanel />
                            </PrivateRoute>
                        } path="/admin" />
                    </Routes>
                </Suspense>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
