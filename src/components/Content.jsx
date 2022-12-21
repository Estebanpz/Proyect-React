import { Fragment } from "react";
import ScrollReveal from 'scrollreveal'

const Content = ({ extintores }) => {
    ScrollReveal().reveal('.scroll',{
        delay:  1000,
        reset: true
    })
    
  return (
    <>
      {extintores.map((extintor, index) => (
        <Fragment key={extintor.id}>
          {index % 2 === 0 ? (
            <>
              <div className="col-md-5 col-sm-5 col-xl-5 col-lg-5 my-4 scroll">
                <div>
                  <img
                    src={extintor.imagen}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-7 col-sm-7 col-xl-7 col-lg-7 my-4 scroll">
                <div className="card-body text-center p-3">
                  <h3>Extintor de 5 Libras</h3>
                  <p className="card-text">
                    <small>{extintor.texto}</small>
                  </p>
                  <p className="card-text">
                    <small>{extintor.texto}</small>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className="col-md-7 col-sm-7 col-xl-7 col-lg-7 my-4 scroll"
                key={extintor.id}
              >
                <div className="card-body text-center p-3">
                  <h3>Extintor de 5 Libras</h3>
                  <p className="card-text">
                    <small>
                      {extintor.texto}
                    </small>
                  </p>
                  <p className="card-text">
                    <small>
                      {extintor.texto}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-5 col-sm-5 col-xl-5 col-lg-5 my-4">
                <div>
                  <img
                    src={extintor.imagen}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            </>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default Content;
