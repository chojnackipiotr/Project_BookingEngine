import React from 'react';
import 'moment/locale/pl';
import {extendMoment} from "moment-range";
import axios from 'axios';
import {ReservationCompleted} from "../MP_ReservationEngine_ReservationCompleted/ReservationCompleted";


class MP_ReservationEngine_Step4 extends React.Component {
   constructor(props) {
   super(props);
   this.state={
       totalAmount: this.props.totalAmount,
       totalPromoAmount: this.props.totalPromoAmount,
       totalAmmenities: this.props.totalAmmenities,
       promotion: this.props.promotion,
       nameSurname: this.props.nameSurname,
       email: this.props.email,
       phoneNumber: this.props.phoneNumber,
       breakfast: this.props.breakfast,
       breakfastPrice: this.props.breakfastPrice,
       parking: this.props.parking,
       parkingPrice: this.props.parkingPrice,
       pet: this.props.pet,
       petPrice: this.props.petPrice,
       start: this.props.start,
       end: this.props.end,
       reservationNumber:"",
       res: 0,
       thankYou: false,
       rodo: false,
       marketingCommunication: false,
       error: true
   }
   }

    handleRODO=()=>{
       this.setState({
           rodo: !this.state.rodo,
           error: !this.state.error
       })
    };
    handleMarketing=()=>{
        this.setState({
            marketingCommunication: !this.state.marketingCommunication
        })
    };

    getBack=(e)=>{
        if (typeof this.props.getBack==='function'){
            this.props.getBack(false)
        }
    }

   getConfirmation=(e)=>{
       if (this.state.error===false){
        e.preventDefault();
       function makeid() {
           let text = "";
           let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

           for (let i = 0; i < 5; i++)
               text += possible.charAt(Math.floor(Math.random() * possible.length));

           return text;
       }

           const reservation = {
               id:"",
               reservationNumber: makeid(),
               paxNumber: this.props.paxNumber,
               price: this.state.totalAmount,
               promotion: this.state.promotion,
               totalPromoAmount: this.state.totalPromoAmount,
               nameSurname: this.state.nameSurname,
               checkIN: this.state.start,
               checkOUT: this.state.end,
               email: this.state.email,
               phoneNumber: this.state.phoneNumber,
               parking: this.state.parking,
               breakfast: this.state.breakfast,
               pet: this.state.pet,
               rodo: this.state.rodo,
               marketing: this.state.marketingCommunication
           }

           axios.post('http://localhost:3000/guests', {reservation})
               .then(res=>{
                   if (res.status===201){
                       console.log(res);
                       this.setState({
                           res: res.status,
                           reservationNumber: res.data.reservation.reservationNumber,
                           thankYou: true,
                       })
                   } else {
                       this.setState({
                           thankYou: 'error'
                       })
                   }
               })
       }else{
           this.setState({
               error: true,
           })
           console.log('Błąd')
       }
    };
/*
           let increase = _.map(this.state.database.onePax, (el, i) => {

           let checkin = new Date().getTime();
           let checkout = new Date().getTime();

           if(el.Date < checkout && el.Date > checkin) {

               let sold = el.roomsSold;

               return {...el, roomsSold: sold + 1}
           }




           return el;

       })*/

   render(){
     return (
         <div className={'step4'}>
             <div className={'step4Wrapper'}>
                 <div>
                     <div className={'checkInOut'}>
                         <p>Przyjazd: <span className={'importantInfo'}>{this.state.start}</span></p> <p>Wyjazd: <span className={'importantInfo'}>{this.state.end}</span></p>
                     </div>
                     <h3>Imię i Nazwisko: <span className={'boldedInfo'}>{this.state.nameSurname}</span></h3>
                     {this.state.promotion?<p>Kwota do zapłaty: <span className={'boldedInfo'}>{this.state.totalPromoAmount} zł</span></p>:<p>Kwota do zapłaty: <span className={'boldedInfo'}>{this.state.totalAmount} zł</span></p>}
                     <p>Mail: <span className={'boldedInfo'}>{this.state.email}</span></p>
                     <p>Telefon: <span className={'boldedInfo'}>{this.state.phoneNumber}</span></p>
                     <p><u>Cena zawiera:</u></p>
                     {this.state.promotion?<p>Koszt pobytu: {this.state.totalPromoAmount-this.state.totalAmmenities}</p>:<p>Koszt pobytu: {this.state.totalAmount-this.state.totalAmmenities}</p>}
                     {this.state.breakfast&&<p>Cenę śniadania:{this.state.breakfastPrice} zł</p>}
                     {this.state.parking&&<p>Cenę śniadania:{this.state.parkingPrice} zł</p>}
                     {this.state.pet&&<p>Cenę śniadania:{this.state.petPrice} zł</p>}
                     <form className={'agreements'}>
                         <label><b>Pole obligatoryjne:</b>{this.state.error&&<small style={{color:'red'}}>Musisz zaznaczyć to pole.</small>}<br/><input type={'checkbox'} onChange={this.handleRODO}/>Zapoznałem się z informacjami na temat RODO </label><br/>
                         <label><b>Pole fakultatywne:</b><br/><input type={'checkbox'} onChange={this.handleMarketing}/>Wyrażam zgodę na marketing</label>
                     </form>
                     <input className={'nextBttn'} type={'submit'} value={'Rezerwuj teraz!'} onClick={this.getConfirmation}/>
                     <input className={'nextBttn'} type={'submit'} value={'Wróć'} onClick={this.getBack}/>
                 </div>
         </div>
             {this.state.thankYou===true&&<ReservationCompleted
                 nameSurname = {this.state.nameSurname}
                 reservationNumber = {this.state.reservationNumber}
                 email = {this.state.email}
             />}
         </div>
     )
   }
 }

 export {MP_ReservationEngine_Step4}