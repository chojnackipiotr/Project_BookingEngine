import React from 'react';


class ReservationButton extends React.Component {
   constructor() {
   super();

   }
   render(){


     return (
        <button className={'reservationButton'}>
            <a href={'#'}>Rezerwuj teraz</a>
        </button>

     )
   }
 }

 export {ReservationButton}