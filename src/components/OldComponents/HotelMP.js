import React from 'react';
import {HotelGallery} from './HotelGallery'
require('../scss/main.scss');

class HotelMP extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <section className={'hotelMainPage'}>
             <h3>HOTEL</h3>
             <div className={'hotelInfo'}>
                 <div className={'hotelGallery'}><HotelGallery/></div>
                 <div className={'hotelInfoText'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi sapien, pulvinar vel suscipit vel, fermentum iaculis sem. Integer vitae nulla odio. Donec non mauris eget dui vehicula dignissim. In ultrices dapibus velit, a hendrerit sem semper sed. Vivamus faucibus, urna non varius placerat, est dolor congue quam, ac iaculis velit dui a leo. Nullam commodo,Vivamus faucibus, urna non varius placerat, est dolor congue quam, ac iaculis velit dui a leo. Nullam commodo,Vivamus faucibus, urna non varius placerat, est dolor congue quam, ac iaculis velit dui a leo.</div>
             </div>

         </section>
     )
   }
 }

 export {HotelMP};