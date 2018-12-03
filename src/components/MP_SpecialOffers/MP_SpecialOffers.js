import React from 'react';
import {Offer} from './Offer'

class MP_SpecialOffers extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
       let reactOffer = require('../../images/kodReact.jpg');
       let norefOffer = require('../../images/ofertaBezzwrotna.jpg')
     return (
         <section className={'mp_roomSection'}>
             <h3 className={'mp_title'}>- OFERTY SPECJALNE -</h3>
             <div className={'offersWrapper'}>
                 <Offer offerName={"Kod zniżkowy React"}
                        backgroundImage={reactOffer}
                        textOffer={'Lorem ipsum -10% dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                 />
                 <Offer offerName={"Oferta bezzwrotna"}
                        backgroundImage={norefOffer}
                        textOffer={'Lorem ipsum -20% dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
                 />

             </div>
         </section>
     )
   }
 }

 export {MP_SpecialOffers};