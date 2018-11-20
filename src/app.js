import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage';
require('./scss/main.scss');

class App extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <MainPage/>
     )
   }
 }


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});
