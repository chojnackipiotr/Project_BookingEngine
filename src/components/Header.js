import React from 'react';
import Navigation from './Navigation'
require('../scss/main.scss');


class Header extends React.Component {
   constructor() {
   super();

   }
   render(){
       const hotelLogo=require('../images/topLogoNavigation.png');
       const facebookLogo=require('../images/facebook-square.svg');
       const instagramLogo=require('../images/instagram.svg');
       const pinterestLogo=require('../images/pinterest.svg');
     return (
         <div className={'header'}>
         <section className={'topNavigation'}>
            <div className={'logo'}><img className={'topLogo'} src={hotelLogo} alt={'Hotel JS Warszawa'} title={'Hotel JS Warszawa'}/></div>
            <div className={'SocialMedia'}>
                <div className={'blackDiv'}>śledź nas:</div>
                <img src={facebookLogo} width={'37px'} height={'37px'} alt={'Facebook Hotel JS Warszawa'} title={'Odwiedź naszego Facebooka'}/>
                <img src={instagramLogo} width={'37px'} height={'37px'} alt={'Instagram Hotel JS Warszawa'} title={'Odwiedź naszego Insta'}/>
                <img src={pinterestLogo} width={'37px'} height={'37px'} alt={'Pinteres Hotel JS Warszawa'} title={'Odwiedź naszego Pinteresta'}/>
            </div>
         </section>
             <nav>
                 <Navigation/>
             </nav>
         </div>
     )
   }
 }

export default Header;
