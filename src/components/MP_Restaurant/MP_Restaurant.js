import React from 'react';


class MP_Restaurant extends React.Component {
   constructor() {
   super();

   }
   render(){
       let restaurantImage=require('../../images/restaurantPhoto.jpg');
     return (
        <section className={'mp_infoSection'}>
            <h3 className={'mp_title'}>- RESTAURACJA -</h3>
            <div className={'restaurantInfo'}>
                <div className={'restaurantPhoto'}><img src={restaurantImage} alt={'Restauracja Hotelowa'}/></div>
                <div className={'restaurantText'}>Gingerbread cake jelly pudding jelly beans. Fruitcake gingerbread wafer wafer gingerbread apple pie marshmallow. Biscuit jelly cookie dragée brownie dessert carrot cake macaroon bonbon. Unerdwear.com liquorice marshmallow fruitcake caramels dessert gingerbread. Cupcake caramels biscuit macaroon. Cookie fruitcake chocolate bar donut bonbon tiramisu cake croissant. Pastry gingerbread pastry danish halvah sweet muffin jelly. Macaroon cake icing halvah marshmallow applicake.</div>
            </div>
        </section>

     )
   }
 }

 export {MP_Restaurant}