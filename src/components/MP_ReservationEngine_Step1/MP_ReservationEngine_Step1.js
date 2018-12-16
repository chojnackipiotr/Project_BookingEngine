import React from 'react';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Helmet from 'react-helmet';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/pl';
import {extendMoment} from "moment-range";
import {MP_ReservationEngine_Step2} from "../MP_ReservationEngine_Step2/MP_ReservationEngine_Step2";
const moments = extendMoment(moment);


const start = moment('2011-04-15', 'YYYY-MM-DD');
const end   = moment('2011-11-27', 'YYYY-MM-DD');
const range = moments.range(start, end);

class MP_ReservationEngine_Step1 extends React.Component {
    constructor(props) {
    super(props);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
        this.state = {
            from: undefined,
            to: undefined,
            range:[],
            rangeString: [],
            step1: false,
            error: false,
            errorMsg:""
        };
    }
     showFromMonth() {
         const { from, to } = this.state;
         if (!from) {
             return;
         }
         if (moment(to).diff(moment(from), 'months') < 2) {
             this.to.getDayPicker().showMonth(from);
         }
     }
     handleFromChange(from) {
         // Change the from date and focus the "to" input field
         this.setState({ from });
     }
     handleToChange(to) {
         this.setState({ to }, this.showFromMonth);
     }
     validateStepOne=(e)=>{
        e.preventDefault();
        if (this.state.from==undefined || this.state.to==undefined){
            this.setState({
                error: true,
                errorMsg: "Daty nie zostały wybrane"
            });
        } else if (moment(this.state.from).isBefore('2019-01-01')){
            this.setState({
                error: true,
                errorMsg: "Rezerwuj od 01.01.2019"
            });
        } else if (moment(this.state.to).isAfter('2019-07-01')){
            this.setState({
                error: true,
                errorMsg: "Rezerwuj do 30.06.2019"
            });
     } else if (moment(this.state.from).isSame(moment(this.state.to))){
         this.setState({
             error: true,
             errorMsg: "Daty nie mogą być takie same"
         })
        } else{
            var fromDate = moment(this.state.from);
            var toDate = moment(this.state.to);
            var range = moment().range(fromDate, toDate);
            var array = Array.from(range.by("days"));
            let arrayString = array.map((e)=>{
                return moment(e).format('DD-MM-YYYY');
            });
            this.setState({
                range: array,
                rangeString: arrayString,
                step1: true
            });
        }
    };
    clearError=()=>{
        this.setState({
            error: false,
            errorMsg:""
        })
    };
    closeEngine=()=>{
        this.setState({
            step1: false
        })
    };

    render(){
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
      return (

          <section className={'mp_engine_step1'}>
              {this.state.error===true&&<div className={'errorMsg'}>{this.state.errorMsg}<span onClick={this.clearError}>X</span></div>}
              <div className={'reservationText'}>Rezerwacja online<br/>
                  <p>Hotel przyjmuje rezerwacje w dniach 2019-01-01 do 2019-06-30</p>
              </div>
              <div className="InputFromTo">
                  <DayPickerInput
                      value={from}
                      placeholder="Data Przyjazdu"
                      format="LL"
                      formatDate={formatDate}
                      parseDate={parseDate}
                      dayPickerProps={{
                          selectedDays: [from, { from, to }],
                          disabledDays: { after: to },
                          toMonth: to,
                          modifiers,
                          numberOfMonths: 2,
                          onDayClick: () => this.to.getInput().focus(),
                          locale: 'pl',
                          localeUtils: MomentLocaleUtils,
                      }}
                      onDayChange={this.handleFromChange}
                  />
          <DayPickerInput
              ref={el => (this.to = el)}
              value={to}
              placeholder="Data Wyjazdu"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                  selectedDays: [from, { from, to }],
                  disabledDays: { before: from },
                  modifiers,
                  month: from,
                  fromMonth: from,
                  numberOfMonths: 2,
                  locale: 'pl',
                  localeUtils: MomentLocaleUtils,
              }}
              onDayChange={this.handleToChange}
          />
                  <Helmet>
                      <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 550px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -198px;
  }
`}</style>
                  </Helmet>
              </div>
              <input className={'launchReservation'}
                     type="submit"
                     value="Rezerwuj online"
                     onClick={this.validateStepOne}
              />
              {this.state.step1===true&&<MP_ReservationEngine_Step2
                  range={this.state.range}
                  rangeString={this.state.rangeString}
              />}
          </section>

      )
    }
 }
  export {MP_ReservationEngine_Step1}
