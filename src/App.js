import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Productlist from './Components/Productlist';
import Carouselle from './Components/Carousel';
import { Route, Routes } from 'react-router-dom';
import Allproducts from './Components/Allproducts';
import Singleproduct from './Components/Singleproduct';
import ChocolatsMacarons from './Components/Chocolats&Macarons';

function App() {
  return (
   <div style={{background:"#E6E6E6"}}>

<Header/>
<Routes>
  <Route path='/' element={
    <div>
<Carouselle/>
<Productlist/>

<section className="mt-4 position-relative py-20 pt-md-32 bg-dark overflow-hidden mb-4">
  <img
    className="position-absolute top-0 start-0 end-0 img-fluid"
    src="https://shuffle.dev/yofte-assets/elements/line-top.svg"
    alt=""
  />
  <div className="position-relative container">
    <h2 className="mb-20 text-white">What Customers Say</h2>
    <div className="position-relative mw-4xl mx-auto">
      <div
        className="position-absolute top-50 translate-middle-y start-0 end-0 border ms-n6 me-n6"
        style={{ height: "90%" }}
      />
      <div className="position-relative mx-auto mb-20 py-12 py-md-28 bg-dark border border-white">
        <img
          className="mb-10 d-block mx-auto rounded-circle"
          style={{ width: 128, height: 128 }}
          src="https://shuffle.dev/yofte-assets/images/placeholder-portrait.png"
          alt=""
        />
        <div className="position-relative mw-2xl px-4 mx-auto">
          <img
            className="d-none d-md-block position-absolute top-0 start-0 img-fluid"
            src="https://shuffle.dev/yofte-assets/elements/quote.svg"
            alt=""
          />
          <img
            className="d-none d-md-block position-absolute top-0 end-0 img-fluid"
            src="https://shuffle.dev/yofte-assets/elements/quote.svg"
            alt=""
          />
          <div className="mw-md mx-auto px-4">
            <h5 className="mb-16 text-white">
              Tonight I had interdum at ante porta, eleifend feugiat nunc. In
              semper euismod mi a accumsan. Thaaank you! 👏💥
            </h5>
            <div className="d-flex flex-wrap align-items-center">
              <p className="mb-6 mb-md-0 text-muted">Alice Kenowski, NYC</p>
              <div className="ms-auto d-flex align-items-center justify-content-end">
                <a
                  className="me-5 d-flex align-items-center justify-content-center bg-primary rounded-2"
                  href="#"
                  style={{ width: 48, height: 48 }}
                >
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.02344 5.99748L7.14844 10.1225L5.97043 11.3008L0.66742 5.99748L5.97043 0.694179L7.14844 1.87248L3.02344 5.99748Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  className="d-flex align-items-center justify-content-center bg-info rounded-2"
                  href="#"
                  style={{ width: 48, height: 48 }}
                >
                  <svg
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.97656 6.00252L0.851562 1.87752L2.02957 0.699219L7.33258 6.00252L2.02957 11.3058L0.851562 10.1275L4.97656 6.00252Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
     
    </div>
  </div>
</section>

    </div>
    }/>
<Route path='/products' element={<Allproducts/>}/>
<Route path='/product/:id' element={<Singleproduct/>}/>
<Route path= '/Chocolats' element={<ChocolatsMacarons/>}/>
</Routes>

<Footer/>


   </div>


  );
}

export default App;
