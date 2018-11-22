import React from 'react';
import { Header } from './Header';
import { HotelMP } from './HotelMP';
require('../scss/main.scss');

class MainPage extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <div>
             <Header/>
             <HotelMP/>
         </div>
     )
   }
 }

export default MainPage;

