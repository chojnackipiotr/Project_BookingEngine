import React from 'react';
import axios from "axios";

class MP_B2B_Input extends React.Component {
   constructor(props) {
   super(props);
   this.state={
       value: '',
       error: false,
       thankYou: false,
       res: 0,
       }
   }
    handleChange=(e)=>{
       this.setState({
          value: e.target.value
       })
    };
    validateB2B=(e)=>{
        e.preventDefault()
        if (this.state.value.indexOf('@')===-1){
            this.setState({
                error:true
            })
        } else {
            const b2bMail={
                b2bMail: this.state.value
            }
            axios.post('http://localhost:3000/b2b', {b2bMail})
                .then(res=>{
                    if (res.status===201){
                        this.setState({
                            res: res.status,
                            thankYou: true,
                            error: false
                        })
                    } else {
                        this.setState({
                            error: true
                        })
                    }
                })
        }
    };
   render(){
     return (
         <form className={'mp_b2bForm'}>
             <label> <b>Podaj swój adres e-mail:</b>
             <input type="email" value={this.state.value} onChange={this.handleChange}/>
             </label>
             {this.state.error===true&&<p>Błędny adres e-mail</p>}
             <input type="submit" onClick={this.validateB2B}/>
             {this.state.thankYou===true&&<p style={{color:'green'}}>Dziękujemy, wkrótce skontaktujemy się z Tobą!</p>}
             {this.state.error===true&&<p style={{color:'red'}}>Wystąpił błąd! Spróbuj ponownie.</p>}
         </form>
     )
   }
 }
 
 export {MP_B2B_Input}