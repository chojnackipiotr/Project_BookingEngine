import React from 'react';
import moment from 'moment';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'moment/locale/pl';
import {extendMoment} from "moment-range";
const moments = extendMoment(moment);
import axios from 'axios';
import lodash from 'lodash';
import {MP_ReservationEngine_Step4} from "../MP_ReservationEngine_Step4/MP_ReservationEngine_Step4";
import {RoomPic} from './RoomPic';


class MP_ReservationEngine_Step2 extends React.Component {
   constructor(props) {
   super(props);
   this.state={
       array: this.props.range,
       arrayString: this.props.rangeString,
       database:[],
       stayInfo:[],
       promoError: false,
       promo: false,
       step2: true,
       step3: false,
       nameSurname: "",
       email: "",
       phoneNumber: "",
       breakfast: false,
       breakfastPrice: 0,
       parking: false,
       parkingPrice: 0,
       pet: false,
       petPrice: 0,
       error:"",
       step4: false,
       test:true,
       paxNumber: 1,
       paxError: false
   }
   }

   promoCode = (e) =>{
       if (e.target.value=='react'){
           this.setState({
               promo: true,
           })
       } else {
           this.setState({
               promo: false
           })
       }
   };
    stepThree = (e) =>{
        e.preventDefault()
        this.setState({
            step2: false,
            step3: true,
        })
    };
    handleName=(e)=>{
        this.setState({
            nameSurname: e.target.value
        })
    };
    handleEmail=(e)=>{
        this.setState({
            email: e.target.value
        })
    };
    handlePhone=(e)=>{
        this.setState({
            phoneNumber: e.target.value
        })
    };
    handleBreakfast=(e)=>{
        if (this.state.breakfast===false){
        this.setState({
            breakfast: !this.state.breakfast,
            breakfastPrice: (this.state.array.length-1)*30
        })}else{
            this.setState({
                breakfast: !this.state.breakfast,
                breakfastPrice: 0
            })
        }
    };
    handleParking=()=>{
        if(this.state.parking===false){
        this.setState({
            parking: !this.state.parking,
            parkingPrice: (this.state.array.length-1)*15
        })}else{
            this.setState({
                parking: !this.state.parking,
                parkingPrice: 0
            })
        }
    };
    handlePet=()=>{
        if(this.state.pet===false){
        this.setState({
            pet: !this.state.pet,
            petPrice: (this.state.array.length-1)*20
        })}else{
            this.setState({
                pet: !this.state.pet,
                petPrice: 0
            })
        }};

    addGuest=()=>{

        let counter = this.state.paxNumber;
        if (this.state.paxNumber<3){
            this.setState({
                paxNumber: counter+1,
                paxError: false
            })
        } else {
            this.setState({
                paxError: true
            })
        }
    }

    removeGuest=()=>{
        let counter = this.state.paxNumber;
        if(this.state.paxNumber>1){
            this.setState({
                paxNumber: counter-1,
                paxError: false
            })
        } else if (this.state.paxNumber===1){
            return
        }
    };

    backTo2=(e)=>{
        this.setState({
            step3: false,
            step2:true
        })
    }

    stepFour=(e)=>{
        e.preventDefault()
        if(this.state.nameSurname===0 || this.state.nameSurname.indexOf(' ')===-1){
            this.setState({
                error:"Pole imię i nazwisko jest błędnie wypełnione"
            })
        } else if (this.state.email.indexOf('@')===-1){
            this.setState({
                error:"Pole email jest błędnie wypełnione"
            })
        } else if(this.state.phoneNumber.length<6||this.state.phoneNumber.length>12){
            this.setState({
                error: "Błędny numer telefonu"
            })
        } else {
            this.setState({
                step3: false,
                step4: true,
            })
            console.log(this.state.step4)
        }
    };
    getBackHere=(back)=>{
        this.setState({
            step4: back,
            step3:true
        })
    }

   render(){
       if (!this.state.database.length){
             return (
                 <div className={'step2'}>
                     <div className={'topContainer'}>
                         <h1>Wczytuję system</h1>
                     </div></div>
             )
         }
       let start = moment(this.state.array[0]);
       let end = moment(this.state.array[this.state.array.length-1]);

       let result = _.filter(this.state.database, function(o){
           return o.Date >= moment(start).format('DD-MM-YYYY') && o.Date <= moment(end).format('DD-MM-YYYY');
       });
       result.length=this.state.array.length-1;

       let price = result.map((e)=>{
           return e.Price
       });
       let totalAmount = price.reduce((prev, cur)=>{
           return prev + cur
       });

/*       let roomsSold = result.map((e)=>{
           return e.RoomsSold
       });

       let roomAv;

       for (var i=0; i<roomsSold.length;i++){
           if (roomsSold[i]>197){
               return roomAv=false
           }
       }

       console.log(roomAv);*/

       let promoAmount = parseInt(totalAmount*0.9,10);

       let ammenitiesAmount = (this.state.breakfastPrice*this.state.paxNumber)+this.state.parkingPrice+this.state.petPrice;

       let error = {
           color: 'red',
       };





       return(
           <div className={'bigBackground'} >
             {this.state.step2==true && <div className={'step2'}>
                 <div className={'topContainer'}>
                     <div className={'dateHandler'}>
                     <p><small className={'smallTxt'}><b>DATA PRZYJAZDU:</b></small> {moment(start).format('DD-MM-YYYY')} <small className={'smallTxt'}><b>DATA WYJAZDU:</b></small> {moment(end).format('DD-MM-YYYY')}</p>
                     </div>
                     <p><small><b>LICZBA GOŚCI:</b></small> <b>{this.state.paxNumber}</b> <button className={'plusMinus'} onClick={this.addGuest}>+</button> <button className={'plusMinus'} onClick={this.removeGuest}>-</button></p>
                     {this.state.paxError&&<p style={error}>Max liczba gości to 3 os.</p>}
                     <RoomPic paxNumber={this.state.paxNumber}/>
                     <p>LICZBA DÓB HOTELOWYCH: {this.state.array.length-1}</p>
                     <p>Cena:{totalAmount*this.state.paxNumber} zł</p>
                     <label>Wpisz kod rabatowy:<input className={'promoCode'} type={'text'} onChange={this.promoCode} /></label>
                     {this.state.promo==true && <p className={'promoTrue'}>Cena po rabacie: {promoAmount*this.state.paxNumber} zł</p>}
                     <input className={'nextBttn'} type={'submit'} value={'Dalej'} onClick={this.stepThree}/>
                     <button className={'nextBttn'}><a href={'http://localhost:9002'} style={{color:'black'}}>Wróć</a></button>
                 </div>
             </div>}
             {this.state.step3==true && <div className={'step3'}>
                 <div className={'step3Wrapper'}>
                 <form className={'reservationForm'}>
                     <label>
                         Podaj imię i nazwisko:<br/>
                         <input type={'text'} placeholder={'Imię i nazwisko'} value={this.state.nameSurname} onChange={this.handleName}/>
                     </label>
                     <label>
                         Podaj adres e-mail:<br/>
                         <input type={'email'} placeholder={'Email'} value={this.state.email} onChange={this.handleEmail}/>
                     </label><br/>
                     <label>
                         Podaj nr telefonu:<br/>
                         <input type={'number'} placeholder={'Numer telefonu'} value={this.state.phoneNumber} onChange={this.handlePhone}/>
                     </label><br/>
                     <div className={'ammenitiesForm'}>
                         <div><b>Wybierz dodatki:</b></div>
                         <label htmlFor="breakfast"><input type="checkbox" id="breakfast" value={this.state.breakfast*this.state.paxNumber} onChange={this.handleBreakfast} />Śniadanie - 30 zł/dobę/os.</label>
                         <label htmlFor="parking"><input type="checkbox" id="parking" value={this.state.parking} onChange={this.handleParking} />
                                 Parking - 15 zł/dobę</label>
                         <label htmlFor="animal"><input type="checkbox" id="animal" value={this.state.pet} onChange={this.handlePet} />
                                 Zwierzak - 20 zł/dobę</label>
                     </div>
                 </form>
                 <div>
                     {this.state.promo?<p className={'priceTxt'}>Za nocleg płacisz: {promoAmount*this.state.paxNumber} zł</p>:<p className={'priceTxt'}>Za nocleg płacisz: {totalAmount*this.state.paxNumber} zł</p>}
                     {this.state.breakfast?<p>Za śniadanie zapłacisz: <span className={'priceTxt'}> {this.state.breakfastPrice*this.state.paxNumber} zł</span></p>:<p>Pobyt bez śniadania</p>}
                     {this.state.parking?<p>Za parking zapłacisz <span className={'priceTxt'}> {this.state.parkingPrice} zł</span></p>:<p>Pobyt bez parkingu</p>}
                     {this.state.pet?<p>Za swojego zwierzaka zapłacisz <span className={'priceTxt'}> {this.state.petPrice} zł</span></p>:<p>Pobyt bez zwierzaka</p>}
                     <p className={'priceTxt'}>Do zapłaty: {this.state.promo?<span className={'priceTxt'}>{(promoAmount*this.state.paxNumber)+ammenitiesAmount} zł</span>:<span className={'priceTxt'}>{(totalAmount*this.state.paxNumber)+ammenitiesAmount} zł</span>}</p>
                 </div>
                 {this.state.error.length>0&&<div className={'errorInfo'}>{this.state.error}</div>}
                 <input className={'nextBttn'} type={"submit"} value={'Do potwierdzenia'} onClick={this.stepFour}/>
                 <input className={'nextBttn'} type={"submit"} value={'Wróć'} onClick={this.backTo2}/>
             </div>
             </div>}
             {this.state.step4&&<MP_ReservationEngine_Step4
                 totalAmount = {(totalAmount*this.state.paxNumber)+ammenitiesAmount}
                 totalPromoAmount = {(promoAmount*this.state.paxNumber)+ammenitiesAmount}
                 totalAmmenities = {ammenitiesAmount}
                 promotion = {this.state.promo}
                 nameSurname = {this.state.nameSurname}
                 email ={this.state.email}
                 phoneNumber = {this.state.phoneNumber}
                 breakfast={this.state.breakfast}
                 breakfastPrice={this.state.breakfastPrice*this.state.paxNumber}
                 parking = {this.state.parking}
                 parkingPrice = {this.state.parkingPrice}
                 pet = {this.state.pet}
                 petPrice = {this.state.petPrice}
                 start = {moment(start).format('DD-MM-YYYY')}
                 end = {moment(end).format('DD-MM-YYYY')}
                 paxNumber={this.state.paxNumber}
                 getBack={this.getBackHere}
             />}
         </div>
     )
   }

    componentDidMount() {
        axios.get('http://localhost:3000/onePax').then(res => {
            this.setState({database: res.data})
        })
    }
}


 export {MP_ReservationEngine_Step2}