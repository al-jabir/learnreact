import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Test from './components/Test/Test';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Test tst="Test will be solution code." />
        <Footer />
      </div>
    </>
  );
}

export default App;
