import Home from './pages/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
      <Cart />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
