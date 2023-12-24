import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AmazingArt from "./Components/AmazinArt/AmazingArt";
import Banner from "./Components/Banner/Banner";
import Discover from "./Components/Discover/Discover";
import FeaturedNft from "./Components/FeaturedNft/FeaturedNft";
import Footer from "./Components/Footer/Footer";
import Navigation from "./Components/Navigation/Navigation";
import SignUp from "./Components/SignUp/SignUp";
import TopCollections from "./Components/TopCollections/TopCollections";

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Banner />
      <AmazingArt />
      <TopCollections />
      <FeaturedNft />
      <SignUp />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
