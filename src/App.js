import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// imagenes
import extintores from "./extintores"
import NavBar from './components/NavBar';
import Content from './components/Content';
function App() {
  return (
    <>
      <NavBar />

      <main className="container">
        <div className="row">

        <Content extintores={extintores}/>
          {/* 
            <div className="col-md-5 col-sm-5 col-xl-5 col-lg-5 my-4">
            <div>
              <img src={imagen1} className="img-fluid rounded" alt="" />
            </div>
          </div>
          <div className="col-md-7 col-sm-7 col-xl-7 col-lg-7 my-4">
            <div className="card-body text-center p-3">
              <h3>Extintor de 5 Libras</h3>
              <p className="card-text">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati distinctio delectus tempore mollitia fugiat esse accusantium, hic impedit, modi consequatur commodi eos sint vel? Rem, ipsum adipisci soluta debitis dicta ducimus atque? Facilis quidem ipsa, vero optio excepturi aliquam modi cumque eaque, quibusdam delectus dolor. Cupiditate suscipit voluptatem adipisci ipsa?
                </small>
              </p>
              <p className="card-text">
                <small>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis tenetur debitis architecto inventore odit. Cum architecto dolores sint voluptatem quod ipsa, natus nesciunt dicta praesentium neque alias officia aperiam ullam, commodi aut quis! Magni laborum impedit iste enim, ad quo. Provident voluptate alias in voluptatem, ullam iste ad porro omnis?
                </small>
              </p>
            </div>
          </div>
          */}
        </div>
      </main>
    </>

  );
}

export default App;
