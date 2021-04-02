import React, { Component } from "react";
import { PLACES } from "../shared/places";
import { Link } from "react-router-dom";
import Header from "./Header";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: PLACES,
    };
  }
  render() {
    const style2 = {
      backgroundImage: "url('img/zagh/0.jpg')",
    };
    const all = this.state.places.map((place) => {
      return (
        <Link  className="item"to={`/place/${place.id}`}>
          <div className="sq_parent">
            <div className="sq_wrap">
              <div className="sq_content">
                <LazyLoadImage 
                effect="blur"
                src={place.image} 
                alt={place.name} />
              </div>
            </div>
          </div>
        </Link>
      );
    });
    return (
      <>
                      <Header/>

        <div class="breadcrumbs">
          <div class="wrap">
            <div class="wrap_float">
              <a href="#">Places</a>
              <span class="separator">/</span>
              <a href="#" class="current">
                List of Places
              </a>
            </div>
          </div>
        </div>
        <div class="image_bg--single" style={style2}></div>
        <div class="gallery_page">
          <div class="wrap">
            <div class="wrap_float">
              <div class="title">Places</div>
              <div class="section_content lightgallery" id="lightgallery">
                {all}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Places;
