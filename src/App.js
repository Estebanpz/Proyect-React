//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import extintores from "./extintores"
import NavBar from './components/NavBar';
import Content from './components/Content';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <NavBar />
      <main>
        <Content/>
        <Contact />
      </main>
    </>

  );
}

export default App;
