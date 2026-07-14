import CardList from "./components/CardList";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <section>
      <Header />
      <h1 className="text-center my-2">React.js - Assignment 01 - Component</h1>

      <div className="mb-4">
        <Carousel />
      </div>

      <div className="mb-4">
        <CardList />
      </div>

      <Footer />
    </section>
  );
}

export default App;
