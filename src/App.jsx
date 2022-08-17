import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./pages/home/Home";


const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/player" element={Player} /> */}
      </Routes>
    </>
  );
};
export default App;
