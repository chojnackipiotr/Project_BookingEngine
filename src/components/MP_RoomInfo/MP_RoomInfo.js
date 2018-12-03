import React from 'react';
import {MP_RoomInfo_Slider} from './MP_RoomInfo_Slider'
class MP_RoomInfo extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <section className={'mp_roomSection'}>
             <h3 className={'mp_title'}>- POKOJE -</h3>
             <div className={'mp_roomWrapper'}>
                 <MP_RoomInfo_Slider/>
             </div>
         </section>

     )
   }
 }

 export {MP_RoomInfo}