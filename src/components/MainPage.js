import React from 'react';
import { MP_Header } from './MP_Header/MP_Header';
import { MP_HotelInfo} from "./MP_HotelInfo/MP_HotelInfo";
import {MP_RoomInfo} from "./MP_RoomInfo/MP_RoomInfo";
import {MP_Restaurant} from "./MP_Restaurant/MP_Restaurant";
import {MP_SpecialOffers} from "./MP_SpecialOffers/MP_SpecialOffers";
import {MP_B2B} from "./MP_B2B/MP_B2B";
import {MP_YourReservation} from "./MP_YourReservation/MP_YourReservation";
import {MP_Contact} from "./MP_Contact/MP_Contact";
import {MP_ReservationEngine_Step1} from "./MP_ReservationEngine_Step1/MP_ReservationEngine_Step1";

require('../scss/main.scss');

class MainPage extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <div className={'wrapper'}>
            <MP_Header/>
             <MP_HotelInfo/>
             <MP_RoomInfo/>
             <MP_Restaurant/>
             <MP_SpecialOffers/>
             <MP_B2B/>
             <MP_YourReservation/>
             <MP_Contact/>
             <MP_ReservationEngine_Step1/>
         </div>
     )
   }
 }

export default MainPage;

