import React from 'react';

class ReservationCompleted extends React.Component {
   constructor(props) {
   super(props);

   }
   reloadPage=()=>{
       window.location.reload();
   }
   render(){
     return (
             <div className={'step5'}>
                 <div className={'info'}>
                     <h3>{this.props.nameSurname} dziękujemy za dokonanie rezerwacji!</h3>
                     <p>Na adres email <span className={'boldInfo'}>{this.props.email}</span> został wysłany mail z potwierdzeniem rezerwacji</p>
                     <p>Numer rezerwacji to: <span className={'boldInfo'}>{this.props.reservationNumber}</span>, pamietaj że możesz zarządzać nią online!</p>
                     <button className={'nextBttn'} onClick={this.reloadPage}>Powrót do strony głównej</button>
                 </div>
             </div>
     )
   }
 }

 export {ReservationCompleted}