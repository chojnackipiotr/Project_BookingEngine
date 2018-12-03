import React from 'react';

class MP_Header_MainMenu extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <ul className={'headerMainMenu'}>
             <li><a href={'#'}>HOTEL</a></li>
             <li><a href={'#'}>POKOJE</a></li>
             <li><a href={'#'}>RESTAURACJA</a></li>
             <li><a href={'#'}>OFERTY SPECJALNE</a></li>
             <li><a href={'#'}>DLA FIRM</a></li>
             <li><a href={'#'}>TWOJA REZERWACJA</a></li>
             <li><a href={'#'}>KONTAKT</a></li>
         </ul>

     )
   }
 }

 export {MP_Header_MainMenu}