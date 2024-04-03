import { useState } from 'react';
import React from 'react';

import './App.css'
import { Button, Container, Nav, Navbar, NavDropdown, Form } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var [count, setCount] = useState(0);
  return (
    <>
      <NavbarContent count = {count} setCount= {setCount} />
      <Heading />
      <Data count = {count} setCount= {setCount}/>
      <Footer/>
      
    </>
  );
}



function Heading() {

  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Men's Fashion Style</h1>
            <p className="lead fw-normal text-white-50 ">All men products are available here</p>
          </div>
        </div>
      </header>
    </>
  );
}
function Data({count, setCount}) {
  
  let card = [{
    img: "https://i.pinimg.com/564x/3a/ad/c3/3aadc37cd882f286267f8f8e766ab63b.jpg",
    prodName: "T-Shirts",
    price: "₹400.00",
    options: "Add to cart"
  }, {
    img: "https://i.pinimg.com/564x/0e/f1/13/0ef113de4b877881bd328ee17f51f640.jpg",
    prodName: "Shoes",
    price: "₹180.00",
    orgPrice: "₹200.00",
    btnName: "Add to cart",
  }, {
    img: "https://i.pinimg.com/564x/8f/eb/2f/8feb2f19392bb6a6ac894e6d49a44fa2.jpg",
    prodName: "Shorts",
    price: "₹200.00",
    orgPrice: "₹250.00",
    btnName: "Add to cart",
  }, {
    img: "https://i.pinimg.com/564x/10/a6/49/10a649530be5e57ef21a4129bc24552b.jpg",
    prodName: "Hoodies",
    price: "₹500.00",
    
    btnName: "Add to cart",
  }, {
    img: "https://i.pinimg.com/564x/a5/03/57/a50357362d3003c931508ea263416ce3.jpg",
    prodName: "Cargo pants",
    price: "₹250.00",
    orgPrice: "₹350.00",
    btnName: "Add to cart",
  }, {
    img: "https://i.pinimg.com/736x/20/cc/e0/20cce0c3014cb071508dba3a0c812ffb.jpg",
    prodName: "Shirts",
    price: "₹320.00",
    options: "Add to cart"
  }, {
    img: "https://i.pinimg.com/736x/29/80/35/2980353da9623a07dc7501b432fed694.jpg",
    prodName: "Sun Glasses",
    price: "180.00",
    orgPrice: "₹220.00",
    btnName: "Add to cart",
  }, {
    img: "https://i.pinimg.com/564x/d7/6f/75/d76f75bba593f965e02259b3ff7c2888.jpg",
    prodName: "Watches",
    price: "₹1000.00",
    btnName: "Add to cart",
  }];

  return (
    <>
    <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {
        card.map((val, idx) => (
          <ProductData model={val} key={idx}  setCount={setCount} count={count} />
        ))
      }
      </div>
      </div>
      </section>
    </>
  );
}



function Star(name) {
  if (name == "Sun Glasses" || name == "Watches" || name == "Cargo pants" || name == "Shoes") {
    return (
      <div className="d-flex justify-content-center small text-warning mb-2">
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
        <div className="bi-star-fill"></div>
      </div>

    );
  }

}



function ProductData({ model ,key, count, setCount}, ) {
  const [show, setShow] = useState(true);

  function handleBuy(){
   
    setShow(!show);
    setCount(count + 1);
  }
  function handleRemove(){
    setShow(!show);
    if(count>=1){
    setCount(count - 1);}
  }
 
  return (
    <>
      
        
            <div className="col mb-5">
              <div className="card h-100">
               
                <img className="card-img-top" src={model.img} alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">{model.prodName}</h5>
                    {Star(model.prodName)}

                    <span className="text-muted text-decoration-line-through">{model.orgPrice}</span> {model.price}
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                  {show ? (
        <button className="btn btn-outline-dark mt-auto" onClick={handleBuy}>{model.btnName || model.options} 
        </button>
      ) : (
        <button className="btn btn-outline-dark mt-auto" onClick={handleRemove}>Remove from Cart</button>
      )}
                  </div>
                </div>
              </div>
            </div>
            
      </>
  );
}


function NavbarContent({count, setCount}) {
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Men's Fashion Style</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#" onClick={() => setShowAbout(false)}>Home</Nav.Link>
            <Nav.Link href="#" onClick={() => setShowAbout(true)}>About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Popular Items</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="ms-auto d-flex">
            <Button id="cart-btn" variant="outline-dark" type="submit">
              <i className="bi bi-cart-fill me-1"></i>
              Cart <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
            </Button>
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 function Footer(){
  return(
    <>
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Men's Fashion Style 2023</p></div>
        </footer>
    
    </>
  );
 }

export default App;
