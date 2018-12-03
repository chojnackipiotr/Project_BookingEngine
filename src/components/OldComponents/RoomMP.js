import React from 'react';
import { DemoCarousel } from './RoomsSlider'
require('../scss/main.scss');

class RoomMP extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <section className={'roomsMainPage'}>
             <h3>POKOJE</h3>
             <DemoCarousel/>
         </section>


     )
   }
 }

 export {RoomMP}