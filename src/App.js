import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// imagenes
import extintores from "./extintores"
import NavBar from './components/NavBar';
import Content from './components/Content';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <NavBar />

      <main className="container">
        <div className="row">
          <Content extintores={extintores} />
          <Contact/>
        </div>
      </main>
    </>

  );
}

export default App;
