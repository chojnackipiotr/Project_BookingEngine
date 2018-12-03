import React from 'react';
class YourReservationCheck extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <form className={'yourReservationCheck'} action="">
             <label>
                 <b>Adres e-mail: </b>
                 <input type="email"/>
             </label><br/>
             <label>
                 <b>Numer rezerwacji: </b>
                 <input type="text"/>
             </label><br/>
             <input type="submit"/>
         </form>

     )
   }
 }

 export {YourReservationCheck}