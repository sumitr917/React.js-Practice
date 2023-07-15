import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ContainerMain from './components/ContainerMain';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ContainerMain></ContainerMain>
      <Footer></Footer>
    </div>
  );
}

export default App;
