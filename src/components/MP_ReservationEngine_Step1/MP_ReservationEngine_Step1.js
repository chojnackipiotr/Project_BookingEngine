import React from 'react';
import moment from 'moment'

const startDate="2019-01-01";
console.log(startDate);

 class MP_ReservationEngine_Step1 extends React.Component {
    constructor() {
    super();
    this.state={
        from:startDate,
        to:undefined,
        step1: notValidated,
        }

    }
    render(){
      return (
          <section className={'mp_engine_step1'}>
              <div className={'reservationText'}>Rezerwacja online</div>
              <form className={'reservationFromTo'}>
                  <input type="date" id="start" name="trip-start"
                         value={this.state.from}
                         min={this.state.from}
                         max={"2019-06-30"}
                  />
                  <input type="date" id="end" name="trip-end"
                         value={this.state.to}
                         min={this.state.from}
                         max={"2019-06-30"}
                  />
              </form>
          </section>

      )
    }
  }
  export {MP_ReservationEngine_Step1}
