import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header/Index";
import { Info } from "./components/Info/Index";
import { SellNft } from "./components/SellNft/Index";
// import { Slider } from "./components/Slider/Index";

function App() {
  return (
    <div>
      <Header />
      <Info />
      <SellNft />
      {/* <Slider /> */}
      <Footer />
    </div>
  );
}

export default App;
