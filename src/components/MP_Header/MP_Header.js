import React from 'react';
import {MP_Header_SocialMedia} from "./MP_Header_SocialMedia";
import {MP_Header_Menu} from './MP_Header_Menu';
import {MP_Header_MainMenu} from "./MP_Header_MainMenu";

const logoTop = require('../../images/topLogoNavigation.png')

class MP_Header extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
        <header className={'topHeader'}>
            <section>
                <div><img src={logoTop} alt={'JS Hotel Warszawa'} title={'JS Hotel w Warszawie'}/></div>
                <MP_Header_SocialMedia/>
            </section>
            <div className={'mainMenuWrapper'}>
                <MP_Header_MainMenu/>
            </div>
        </header>
     )
   }
 }

 export {MP_Header}