import React from 'react';
import {MP_B2B_Input} from "./MP_B2B_Input";

class MP_B2B extends React.Component {
   constructor() {
   super();

   }
   render(){

       let b2bImage=require('../../images/b2b_mainpic.jpg');

     return (
         <section className={'mp_infoSection'}>
             <h3 className={'mp_title'}>- DLA FIRM -</h3>
             <div className={'mp_b2bWrapper'}>
                 <div className={'mp_b2bImage'}><img src={b2bImage}/></div>
                 <div className={'mp_b2bText'}>
                     <h4>Prowadzisz firmę?</h4>
                     <p><b>Podpisz umowę z naszym hotelem i uzyskaj wiele benefitów!</b></p>
                     <ul>
                         <li>Stałe ceny lub stały rabat przez cały rok</li>
                         <li>Możlwiość anulacji rezerwacji w dowolnym momencie</li>
                         <li>Dedykowany opiekun klienta</li>
                     </ul>
                     <MP_B2B_Input/>
                 </div>
             </div>
         </section>
     )
   }
 }
export {MP_B2B}