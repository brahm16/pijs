import React, { Component } from 'react'
import MapBox from './MapBox';
import Header from './Header';

class  PlaceDetails extends Component {

      render(){
        const { name,image } = this.props;

        const style2 = {
            backgroundImage: "url('../img/zagh/0.jpg')",
          };
        return (
            <>
        
        <Header/>
<div class="image_bg--single" style={style2}></div>
<div class="page_content single-page tour-single">
    <div class="content-head">
        <div class="wrap">
            <div class="wrap_float">
                <div class="main">
                    <div class="section-top single-row">
                        <div class="single-left">
                            <div class="rating">
                               <div class="stars">
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star active"></div>
                                   <div class="star"></div>
                               </div>
                               <div class="reviews_count">
                                   (2 Reviews)
                               </div>
                            </div>
                            <h1 class="title">
                                America, San Francisco
                            </h1>
                            <div class="geo">America, San Francisco</div>
                        </div>
                        <div class="single-right controls">
                            <button class="btn getModal" data-href="#book-now"><span>Book now</span></button>
                            <div class="slick-arrows tour-single-arrows">
                                <div class="arrow prev"></div>
                                <div class="arrow next"></div>
                            </div>
                        </div>
                    </div>
                    <div class="single-tour-slider" id="single-tour-slider">
                        <div class="single-tour-slide">
                            <img src="../img/zagh/IMG1.jpg" class="image-cover" alt="" style={{marginTop:"1rem"}} />
                        </div>
                        <div class="single-tour-slide">
                            <img src="../img/zagh/IMG2.jpg" class="image-cover" alt="" style={{marginTop:"1rem"}} />
                        </div>
                        <div class="single-tour-slide">
                            <img src="../img/zagh/IMG3.jpg" class="image-cover" alt="" style={{marginTop:"1rem"}} />
                        </div>
                        <div class="single-tour-slide">
                            <img src="../img/zagh/IMG4.jpg" class="image-cover" alt="" style={{marginTop:"1rem"}} />
                        </div>
    
                    </div>
                   <div class="description single-row">
                       <div class="single-left">
                           <p>
                               Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum.
                           </p>
                       </div>
                       <div class="single-right">
                           <div class="map-iframe">
                           {/* <MapContainer/> */}
                           <MapBox/>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
    </div>

            </>
        )
    

      }
    }
export default PlaceDetails;
