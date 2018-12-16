import React from 'react';

class RoomPic extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
       let responsive = {width:'100%'};
       if (this.props.paxNumber===1){
           return(<div><h5>Pokój jednoosobowy</h5><img className={'responsive'} src={require('../../images/RoomInfo_Images/img1_1px.jpg')} alt={'Pokój Jednoosobowy'}/></div>);
       } else if (this.props.paxNumber===2){
           return(<div><h5>Pokój dwuosobowy</h5><img className={'responsive'} src={require('../../images/RoomInfo_Images/img1_2px.jpg')} alt={'Pokój Jednoosobowy'}/></div>);
       } else {
           return(<div><h5>Pokój trzyosobowy</h5><img className={'responsive'} src={require('../../images/RoomInfo_Images/img1_3px.jpg')} alt={'Pokój Jednoosobowy'}/></div>);
       }
   }
 }

 export {RoomPic}