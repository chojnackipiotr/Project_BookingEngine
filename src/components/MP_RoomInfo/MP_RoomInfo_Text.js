import React from 'react';
import {ReservationButton} from '../ReservationButton'

class MP_RoomInfo_Text extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
            <section className={'roomAmenities'}>
                <h3>Pokój {this.props.roomName}</h3>
                <ul className={'roomAmenities_list'}>
                    <li>TV</li>
                    <li>KLIMATYZACJA</li>
                    <li>WIFI</li>
                    <li>ŻELAZKO</li>
                    <li>MINI LODÓWKA</li>
                    <li>ZESTAW DO PARZENIA KAWY</li>
                </ul>
            </section>

     )
   }
 }

export {MP_RoomInfo_Text}