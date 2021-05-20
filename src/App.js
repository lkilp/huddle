import './App.scss';
import Attribution from './components/Attribution';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoContainer from './components/InfoContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoContainer />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
