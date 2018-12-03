import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ImageGallery from 'react-image-gallery';
import {room1pax, room2pax, room3pax} from './MP_RoomInfo_Slider_Images';
import {MP_RoomInfo_Text} from "./MP_RoomInfo_Text";


class MP_RoomInfo_Slider extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <Carousel showThumbs={false}>
             <div className={'singleRoomWrapper'}>
                 <div className={'rooms_leftSide'}><ImageGallery items={room1pax} showPlayButton={false}/></div>
                 <div className={'rooms_rightSide'}><MP_RoomInfo_Text roomName={'Jednoosobowy'}/></div>
             </div>
             <div className={'singleRoomWrapper'}>
                 <div className={'rooms_leftSide'}><ImageGallery items={room2pax} showPlayButton={false} /></div>
                 <div className={'rooms_rightSide'}><MP_RoomInfo_Text roomName={'Dwuosobowy'}/></div>
             </div>
             <div className={'singleRoomWrapper'}>
                 <div className={'rooms_leftSide'}><ImageGallery items={room3pax} showPlayButton={false}/></div>
                 <div className={'rooms_rightSide'}><MP_RoomInfo_Text roomName={'Trzyosobowy'}/></div>
             </div>
         </Carousel>

     )
   }
 }

 export {MP_RoomInfo_Slider}
