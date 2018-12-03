import React from 'react';

class MP_B2B_Input extends React.Component {
   constructor(props) {
   super(props);
   this.state={
       value: ''
       }
   }
    handleChange=(e)=>{
       this.setState({
          value: e.target.value
       })
    }
   render(){
     return (
         <form className={'mp_b2bForm'}>
             <label> <b>Podaj swój adres e-mail:</b>
             <input type="email" value={this.state.value} onClick={this.clearState} onChange={this.handleChange}/>
             </label>
             <input type="submit"/>
         </form>
     )
   }
 }
 
 export {MP_B2B_Input}