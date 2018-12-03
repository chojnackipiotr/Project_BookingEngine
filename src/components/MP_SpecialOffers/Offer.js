import React from 'react';

class Offer extends React.Component {
   constructor(props) {
   super(props);
   this.state={
       value: 0,
       buttonText: 'Dowiedz się więcej'
   }
   }

   handleClick=()=>{
       if (this.state.value==0){
           this.setState({
               value:1,
               buttonText: 'Zwiń'
           })
       } else {
           this.setState({
               value:0,
               buttonText: 'Dowiedz się więcej'
           })
       }

   };

   render(){

       return (
         <div className={'offer'} style={{backgroundImage: `url(${this.props.backgroundImage})`}}>
             <h4 className={'offerName'}>{this.props.offerName}</h4>
             {this.state.value===1 && <p className={'offerText'}>{this.props.textOffer}</p>}
             <button className={'offerButton'} onClick={this.handleClick}>{this.state.buttonText}</button>
         </div>
     )
   }
 }

 export {Offer};