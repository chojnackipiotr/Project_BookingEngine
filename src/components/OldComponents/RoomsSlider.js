import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Rooms} from "./Rooms";


const imageEx = 'https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?cs=srgb&dl=apartment-chair-contemporary-509922.jpg&fm=jpg'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className={'roomsInfo'}>
                    <Rooms src={imageEx} roomNumber={'Jednoosobowy'} />
                </div>
                <div className={'roomsInfo'}>
                    <Rooms src={imageEx} roomNumber={'Dwuosobowy'} />
                </div>
                <div className={'roomsInfo'}>
                    <Rooms src={imageEx} roomNumber={'Trzyosobowy'} />
                </div>
            </Carousel>
        );
    }
}

export {DemoCarousel};