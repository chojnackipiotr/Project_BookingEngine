import React from 'react';
import {MP_HotelInfoGallery} from "./MP_HotelInfoGallery";


class MP_HotelInfo extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
        <section className={'mp_infoSection'}>
            <h3 className={'mp_title'}>- HOTEL -</h3>
            <div className={'mp_hotelWrapper'}>
                <div className={'mp_hotelGallery'}><MP_HotelInfoGallery/></div>
                <div className={'mp_hotelInfo'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi sapien, pulvinar vel suscipit vel, fermentum iaculis sem. Integer vitae nulla odio. Donec non mauris eget dui vehicula dignissim. In ultrices dapibus velit, a hendrerit sem semper sed. Vivamus faucibus, urna non varius placerat, est dolor congue quam, ac iaculis velit dui a leo. Nullam commodo,</div>
            </div>
        </section>
     )
   }
 }

export {MP_HotelInfo}