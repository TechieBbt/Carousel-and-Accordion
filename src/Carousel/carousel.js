import React, { Component } from "react";
import classes from './carousel.module.css';
import Slider from "react-slick";
import First from "../Assets/Dark man.jpg";
import Second from "../Assets/Mr Adekunle.jpg";
import Third from "../Assets/lady.jpg";
import Fourth from "../Assets/Fair man.jpg";


export default class carousel extends Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3000,
          cssEase: "linear",

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };


  return (
    <div className={classes.container}>
        <div className={classes.heading}>
            <h2>Testimonials</h2>
            <p>Our clients have this to say about us</p>
        </div>
        <Slider {...settings} className={classes.slide}>
            <div className={classes.contain}>
                <div className={classes.card}>
                    <div className={classes.innerCard}>
                        <p>Using this platform has been absolute bliss. I've earned extra income by putting my place up each time I go on vacations or travel for work. 
                        I have seen a substantial increase in quality leads for our communities!</p>
                    </div>                    
                    <div className={classes.image}>
                        <img src={First} alt="first"/>
                    </div>
                    <div className={classes.lowerText}>
                        <h3>Olayinka Abiodun</h3>
                    </div>
                </div>
            </div>
            <div className={classes.contain}>    
                <div className={classes.card}>
                    <div className={classes.innerCard}>
                        <p>Easy rent has clearly become the best online tool  to help the renter identify and connect with rental apartments in Nigeria. 
                        The website is very intuitive, and provides all the information you need to make an informed decision. </p>
                    </div>
                    <div className={classes.image}>
                        <img src={Second} alt="second"/>
                    </div>
                    <div className={classes.lowerText}>
                        <h3>Adekunle Awotipe</h3>
                    </div>                
                </div>
            </div>
            <div className={classes.contain}>
                <div className={classes.card}>
                    <div className={classes.innerCard}>
                        <p>Since I began using Easy rent I've seen an increase in leads, traffic and best of all - leases.  Easy rent has become my online
                        apartment rental marketing partner and my first choice lead source for my prospective renters.</p>
                    </div>
                    <div className={classes.image}>
                        <img src={Third} alt="third"/>
                    </div>
                    <div className={classes.lowerText}>
                        <h3>Aisha Bello</h3>
                    </div>
                </div>
            </div>
            <div className={classes.contain}>
                <div className={classes.card}>
                    <div className={classes.innerCard}>
                        <p>This platform has not only helps the prospective renter find me faster, but they are in turn more highly qualified as they 
                        are fully aware of our exact location, availability and up to date pricing before they even call.</p>
                    </div>
                    <div className={classes.image}>
                        <img src={Fourth} alt="fourth"/>
                    </div>
                    <div className={classes.lowerText}>
                        <h3>Toluwalase Adeosun</h3>
                    </div>
                </div>
            </div>
         </Slider>
        
    </div>
  );
}
}