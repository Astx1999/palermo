import {Routes, Route} from "react-router-dom";
import Header from "./components/header/header"
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import About from "./pages/about/about";
import ContactUs from "./pages/contact-us/contact-us";
import SlideOne from "./pages/slideOne/slideOne";
import SlideTwo from "./pages/slideTwo/slideTwo";
import SlideThree from "./pages/slideThree/slideThree";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<Home/>} path={"/home"}/>
                <Route element={<Home/>} path={"/"}/>
                <Route element={<SlideOne/>} path={"/plants"}/>
                <Route element={<SlideTwo/>} path={"/tanks"}/>
                <Route element={<SlideThree/>} path={"/pools"}/>
                <Route element={<About/>} path={"/about-us"}/>
                <Route element={<ContactUs/>} path={"/contact-us"}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
