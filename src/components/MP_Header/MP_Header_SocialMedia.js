import React from 'react';

const fbIcon = require('../../images/facebook-square.svg');
const igIcon = require('../../images/instagram.svg');
const pnIcon = require('../../images/pinterest.svg');

class MP_Header_SocialMedia extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <div className={'smContainer'}>
             <div className={'blackDiv'}>Śledź nas:</div>
             <a href={'#'} title={'Śledź nas na Facebooku'} target={'_blank'}><img src={fbIcon} className={'smIcon'} alt={'Hotel JS Facebook'}/></a>
             <a href={'#'} title={'Śledź nas na Instagramie'} target={'_blank'}><img src={igIcon} className={'smIcon'} alt={'Hotel JS Instagram'}/></a>
             <a href={'#'} title={'Śledź nas na Pinterest'} target={'_blank'}><img src={pnIcon} className={'smIcon'} alt={'Hotel JS Pinterest'}/></a>
         </div>

     )
   }
 }

 export {MP_Header_SocialMedia}