import CartDrawer from "./Components/Common/CartDrawer";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
import PageDrawer from "./Components/Common/PageDrawer";
import Home from "./Pages/Home";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
      
      <PageDrawer />
      <AllRoutes /> 
       {/* <Navbar />*/}
      {/* <Home />*/}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
