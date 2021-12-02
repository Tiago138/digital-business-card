import Header from "./Header";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";

function CardDark() {
  return (
    <div className="card-container card-container--dark">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default CardDark;
