import React from 'react';
import {YourReservationCheck} from "./YourReservationCheck";

class MP_YourReservation extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <section className={'mp_roomSection'}>
             <h3 className={'mp_title'}>- TWOJA REZERWACJA -</h3>
             <div className={'mp_yourReservation_Container'}>
             <div className={'mp_yourReservation_Text'}>
             <h4>Dokonałeś rezerwacji?</h4>
                 <p><b>Możesz zarządzać nią ONLINE!</b></p>
             <p>Wpisz adres email na który rezerwacja została dokonana oraz jej numer:</p>
             </div>
             <div className={'mp_yourReservation_Input'}>
             <YourReservationCheck/>
             </div>
             </div>
         </section>
     )
   }
 }

 export {MP_YourReservation}