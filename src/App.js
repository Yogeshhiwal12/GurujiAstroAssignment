
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Testimonial from './components/Testimonial';
import ImageGrid from './components/ImageGrid';
import Problem from './components/Problem';
import Review from './components/Review';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Testimonial />
      <ImageGrid />
      
      <Problem />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
