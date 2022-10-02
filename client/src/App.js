import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./app.css";
export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
