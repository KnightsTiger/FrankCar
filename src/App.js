import React from 'react';

import './App.css';

class App extends React.Component{
  render(){
    return (
    <div classNameName="App">      
    <div className="loader-active" >
        <div className="preloader" >
            <div className="preloader-spinner">
                <div className="loader-content">
                    <img src="assets/img/preloader.gif" alt="Loading..."/>
                </div>
            </div>
        </div>
    <header id="header-area" className="fixed-top">     
        <div id="header-top" className="d-none d-xl-block">
            <div className="container">
                <div className="row">
                    <img src="assets/img/logo.png" alt="JSOFT"/>
     
                    <div className="col-lg-3 text-left">
                        <i className="fa fa-map-marker"></i> 2/5, Solo Street, Grandpass
                    </div>
     

     
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-mobile"></i> +94 779281148
                    </div>
     

     
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-clock-o"></i> Mon-Fri 08.00 - 18.00
                    </div>
     

     
                    <div className="col-lg-3 text-right">

                    </div>
     
                </div>
            </div>
        </div>
     

     
        <div id="header-bottom">
            <div className="container">
                <div className="row">
     
                    <div className="col-lg-4">
                        <a href="index.html" className="logo">
                         
                        </a>
                    </div>
     
                </div>
            </div>
        </div>
     
    </header>
    

    
    <section id="slider-area">
    
        <div className="single-slide-item overlay">
     
        
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="book-a-car">
                            <form action="index.html">
    
                                <div className="pick-up-date book-item">
                                    <h4>PICK-UP DATE:</h4>
                                    <input id="startDate" placeholder="Pick Up Date" />
                                   
                                    <div className="return-car">
                                        <h4>Return DATE:</h4>
                                        <input id="endDate" placeholder="Return Date" />
                                    </div>
                                </div>
    

    
                                <div className="choose-car-type book-item">
                                    <h4>CHOOSE CAR TYPE:</h4>
                                    <select className="custom-select">
                                      <option selected>Select</option>
                                      <option value="1">Toyota Yaris</option>
                                      <option value="2">Hyundai i10</option>
                                      <option value="3">Mazda 3</option>
                                      <option value="3">Mitsubishi Mirage</option>
                                      <option value="3">Mazda 6</option>
                                      <option value="3">Volvo V60</option>
                                      <option value="3">Nissan NV300</option>
                                    </select>
                                </div>
    

                                <div className="book-button text-center">
                                    <button className="book-now-btn">Book Now</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-7 text-right">
                        <div className="display-table">
                            <div className="display-table-cell">
                                <div className="slider-right-text">
                                    <h1>BOOK A CAR TODAY!</h1>
                                    <p> ENJOY THE PREMIUM SERVICES WITH US.<br/> FOR OUR RETURNING CUSTOMERS
                                      </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </section>
    

    
    <section id="about-area" className="section-padding">
        <div className="container">
            <div className="row">
    
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>About us</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Best range of cars in the city.</p>
                    </div>
                </div>
    
            </div>

            <div className="row">
    
               
                    
                       
                            <div className="about-content">
                                <p>Established in 2000 as the pioneering Rent a Car Company by the managing director
                                     Mr. F. Sethu , Banger and Co.(Pvt) Ltd. is a family managed business that
                                      reign at the top of rent a car sri lanka companies. 
                                     </p>
                                <div className="about-btn">
                                </div>
                            </div>
                       
                    
              
    

            </div>
        </div>
    </section>
    



    
    <section id="funfact-area" className="overlay section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-11 col-md-12 m-auto">
                    <div className="funfact-content-wrap">
                        <div className="row">
    
                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-smile-o"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p><span className="counter">550</span>+</p>
                                        <h4>HAPPY CLIENTS</h4>
                                    </div>
                                </div>
                            </div>
    

    
                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-car"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p><span className="counter">5</span>+</p>
                                        <h4>CARS IN STOCK</h4>
                                    </div>
                                </div>
                            </div>
    

    
                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-bank"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p><span className="counter">2</span>+</p>
                                        <h4>office in cities</h4>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
    
    <section id="our-cars" className="section-padding">
        <div className="container">
            <div className="row">
    
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Our cars</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Please select the best suitable car for you from our range of cars.</p>
                    </div>
                </div>
    
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="team-content">
                        <div className="row">
    
                            <div className="col-lg-3">
                                <div className="ourcar-tab-menu">
                                    <ul className="nav nav-tabs" id="ourcartabmenu" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="ourcar_item_1" data-toggle="tab" href="#ourcar_1" role="tab" aria-selected="true">VW Golf VII</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_2" data-toggle="tab" href="#ourcar_2" role="tab" aria-selected="true">Audi A1 S-LINE</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_3" data-toggle="tab" href="#ourcar_3" role="tab" aria-selected="true">VW Golf VII</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_4" data-toggle="tab" href="#ourcar_4" role="tab" aria-selected="true">Audi A1 S-LINE</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="ourcar_item_5" data-toggle="tab" href="#ourcar_5" role="tab" aria-selected="true">VW Golf VII</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    

    
                            <div className="col-lg-9">
                                <div className="tab-content" id="ourcartabcontent">
    
                                    <div className="tab-pane fade show active" id="ourcar_1" role="tabpanel" aria-labelledby="ourcar_item_1">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src="assets/img/car/car-5.jpg" alt="JSOFT"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>$ 75.40 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    

    
                                    <div className="tab-pane fade" id="ourcar_2" role="tabpanel" aria-labelledby="ourcar_item_2">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src="assets/img/car/car-1.jpg" alt="JSOFT"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>$ 75.40 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               2

                                
                                    <div className="tab-pane fade" id="ourcar_3" role="tabpanel" aria-labelledby="ourcar_item_3">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src="assets/img/car/car-2.jpg" alt="JSOFT"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>$ 75.40 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                

                                
                                    <div className="tab-pane fade" id="ourcar_4" role="tabpanel" aria-labelledby="ourcar_item_4">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src="assets/img/car/car-3.jpg" alt="JSOFT"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>$ 75.40 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                

                                
                                    <div className="tab-pane fade" id="ourcar_5" role="tabpanel" aria-labelledby="ourcar_item_5">
                                        <div className="row">
                                            <div className="col-lg-8 text-center">
                                                <div className="display-table">
                                                    <div className="display-table-cell">
                                                        <div className="ourcar-pic">
                                                            <img src="assets/img/car/car-4.jpg" alt="JSOFT"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4">
                                                <div className="ourcar-info text-center">
                                                    <h2>$ 75.40 <span>Rent per day</span></h2>
                                                    <table className="our-table">
                                                        <tr>
                                                            <td>Model</td>
                                                            <td>Limousine</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Doors</td>
                                                            <td>5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Seats</td>
                                                            <td>15</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transmission</td>
                                                            <td>Automatic</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Air conditioning</td>
                                                            <td>Yes</td>
                                                        </tr>
                                                    </table>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    
    <div id="mobileapp-video-bg"></div>
    <section id="mobile-app-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="mobile-app-content">
                        <h2>SAVE 30% WITH THE APP</h2>
                        <p>Easy &amp; Fast - Book a car in 60 seconds</p>
                        <div className="app-btns">
                            <a href="/something.html"><i className="fa fa-android"></i> Android Store</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    



    
    <section id="testimonial-area" className="section-padding">
        <div className="container">
            <div className="row">
    
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Testimonials</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
    
            </div>

            <div className="row">
                <div className="col-lg-8 col-md-12 m-auto">
                    <div className="testimonial-content">
    
                        <div className="single-testimonial">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
                            <h3>Vongchong Smith</h3>
                            <div className="client-logo">
                                <img src="assets/img/client/client-pic-1.jpg" alt="JSOFT"/>
                            </div>
                        </div>
    

    
                        <div className="single-testimonial">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
                            <h3>Amader Tuni</h3>
                            <div className="client-logo">
                                <img src="assets/img/client/client-pic-3.jpg" alt="JSOFT"/>
                            </div>
                        </div>
    

    
                        <div className="single-testimonial">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis totam obcaecati impedit, at autem repellat vel magni architecto veritatis sed.</p>
                            <h3>Atex Tuntuni Smith</h3>
                            <div className="client-logo">
                                <img src="assets/img/client/client-pic-2.jpg" alt="JSOFT"/>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    </section>
    



   

    
    <section id="footer-area">
    
        <div className="footer-widget-area">
            <div className="container">
                <div className="row">
    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>About Us</h2>
                            <div className="widget-body">
                                <img src="assets/img/logo.png" alt="JSOFT"/>
                                <p>Lorem ipsum dolored is a sit ameted consectetur adipisicing elit. Nobis magni assumenda distinctio debitis, eum fuga fugiat error reiciendis.</p>


                            </div>
                        </div>
                    </div>
    

                  

    
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>get touch</h2>
                            <div className="widget-body">
                                <p>We wish to keep in touch. You can contact us in any time. Use the following methods.</p>

                                <ul className="get-touch">
                                    <li><i className="fa fa-map-marker"></i> 2/5, Solo Street, Grandpass</li>
                                    <li><i className="fa fa-mobile"></i>  +94 779281148</li>
                                    <li><i className="fa fa-envelope"></i> bangerandco@gmail.com</li>
                                </ul>

                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    


    </section>
    

    
    <div className="scroll-top">
        <img src="assets/img/scroll-top.png" alt="JSOFT"/>
    </div>
  </div>
  </div>  
    );
  }
}

export default App;
