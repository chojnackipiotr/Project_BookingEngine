import React from 'react';

let styles = [
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#f49f53"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f9ddc5"
            },
            {
                "lightness": -7
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#1994bf"
            },
            {
                "saturation": -69
            },
            {
                "gamma": 0.99
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "weight": 1.3
            },
            {
                "visibility": "on"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi.business"
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 39
            }
        ]
    },
    {
        "featureType": "poi.school",
        "stylers": [
            {
                "color": "#a95521"
            },
            {
                "lightness": 35
            }
        ]
    },
    {},
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 38
            },
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
        "elementType": "labels"
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 32
            }
        ]
    },
    {},
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 46
            }
        ]
    },
    {
        "featureType": "transit.station",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "lightness": -10
            }
        ]
    },
    {},
    {},
    {}
]


class MP_Contact extends React.Component {
   constructor() {
   super();

   }
   render(){
     return (
         <section className={'mp_infoSection'}>
             <h3 className={'mp_title'}>- KONTAKT -</h3>
             <div className={'mp_contactWrapper'}>
                 <div id={'mp_contactMap'} ref={x => this.map = x}></div>
                 <div className={'mp_contactData'}>
                     <h4>Hotel JS</h4>
                     <p>Mont Caretaweg, San Nicolas, Aruba</p>
                     <a href={'tel:(00)123123123'}>tel.: (+00) 123 123 123</a>
                     <a href={'mailto:hotelJS@hoteljs.com'}>e-mail: hotelJS@hoteljs.com</a>
                 </div>
             </div>
         </section>

     )
   }
    componentDidMount(){

        // The location of Uluru
        var uluru = {lat: 54.039870, lng: 21.767149};
        // The map, centered at Uluru
        var map = new google.maps.Map(
            this.map, {
                zoom: 14,
                center: uluru,
                styles: styles
            }
        );
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({
            position: uluru,
            icon: 'https://kadimex.pl/wp-content/uploads/2016/08/R%C4%99kawice_Holik_Proline_II.jpg',
            map: map});
    }
 }

 export {MP_Contact}