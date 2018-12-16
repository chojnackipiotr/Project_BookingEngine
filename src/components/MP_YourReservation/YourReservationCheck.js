import React from 'react';
import axios from "axios";
import lodash from 'lodash';
class YourReservationCheck extends React.Component {
   constructor() {
   super();
   this.state={
       database:[],
       email:"",
       reservation:"",
       currentRes: [],
       error: false,
       info: false
   }
   }

    handleEmail=(e)=>{
       this.setState({
           email:e.target.value
       })
    };
    handleRes=(e)=>{
      this.setState({
          reservation:e.target.value
      })
    };


    findReservation=(e)=>{
        e.preventDefault()
        let email=this.state.email;
        let res=this.state.reservation
        console.log(this.state.database);
        let filteredRes = _.filter(this.state.database, function (o) {
            return o.reservation.email == email && o.reservation.reservationNumber==res
        });

        if (filteredRes.length>0){
        this.setState({
            currentRes: filteredRes,
            error:false,
            info: true
        })
        } else {
            this.setState({
                error:true
            })
        }

        console.log(filteredRes)
    };

    hideData=()=>{
        this.setState({
            currentRes: [],
            info: false,
            email:"",
            reservation:"",
        })
    }

   render(){
     return (
         <form className={'yourReservationCheck'} action="">
             <label>
                 <b>Adres e-mail: </b>
                 <input type="email" onChange={this.handleEmail} value={this.state.email}/>
             </label><br/>
             <label>
                 <b>Numer rezerwacji: </b>
                 <input type="text" onChange={this.handleRes} value={this.state.reservation}/>
             </label><br/>
             <input type="submit" onClick={this.findReservation}/>
             {this.state.error===true&&<p style={{color:'red'}}>Niestety nie znaleźliśmy Twojej rezerwacji</p>}
             {this.state.info===true&&<div>
                 <p>Dane osoby rezerwującej: <b style={{fontSize:'21px'}}>{this.state.currentRes[0].reservation.nameSurname}</b></p>
                 <p>Liczba gości: <b style={{fontSize:'21px'}}>{this.state.currentRes[0].reservation.paxNumber}</b></p>
                 <p>Przyjazd: <b style={{fontSize:'21px'}}>{this.state.currentRes[0].reservation.checkIN}</b></p>
                 <p>Wyjazd: <b style={{fontSize:'21px'}}>{this.state.currentRes[0].reservation.checkOUT}</b></p>
                 <p>Parking: <b style={{fontSize:'21px'}}>{this.state.currentRes[0].reservation.parking===true?"Tak":"Nie"}</b></p>
                 <p>Śniadanie: <b style={{fontSize:'21px'}}>{this.state.currentRes[0].reservation.breakfast===true?"Tak":"Nie"}</b></p>
                 <p>Zwierzak: <b style={{fontSize:'21px'}}>{this.state.currentRes[0].reservation.pet===true?"Tak":"Nie"}</b></p>
                 <button onClick={this.hideData} style={{fontSize:'20px',backgroundColor:'gold', width:'100%',color:'white',fontWeight:'900'}}>Ukryj dane</button>
                 </div>}
         </form>

     )
   }

    componentDidMount() {
        axios.get('http://localhost:3000/guests').then(res => {
            this.setState({database: res.data})
        })
    }
 }

 export {YourReservationCheck}