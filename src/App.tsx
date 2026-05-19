import Header from "./components/Header";
import Intro from "./components/Intro";
import RouteMap from "./components/RouteMap";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="mx-auto min-h-full max-w-2xl">
      <Header />
      <Intro />
      <RouteMap />
      <Timeline />
      <Footer />
    </div>
  );
}
