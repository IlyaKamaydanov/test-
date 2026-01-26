import { ErrorBoundary } from "react-error-boundary";
import { Footer } from "./components/Footer/Index";
import { Header } from "./components/Header/Index";
import { Info } from "./components/Info/Index";
import { SellNft } from "./components/SellNft/Index";
import { Slider } from "./components/Slider/Index";
import { ErrorFetchSlider } from "./components/ErrorFetchSlider/Index";

function App() {
  return (
    <div>
      <Header />
      <Info />
      <ErrorBoundary FallbackComponent={ErrorFetchSlider}>
        <Slider />
      </ErrorBoundary>
      <SellNft />
      <Footer />
    </div>
  );
}

export default App;
