import React from 'react'

class Rooms extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
        <section>
            <img src={this.props.src}/>
            <div className={'aboutRoom'}>
                <h4>Pokój {this.props.roomNumber}</h4>
                <ul>
                    <li>TV</li>
                    <li>Klimatyzacja</li>
                    <li>Internet</li>
                    <li>Żelazko</li>
                    <li>Mini lodówka</li>
                    <li>Sejf</li>
                </ul>
            </div>
        </section>

     )
   }
 }

 export {Rooms}