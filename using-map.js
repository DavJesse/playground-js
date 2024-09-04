function citiesOnly(arrObj) {
    return arrObj.map(obj => obj.city);
}

function upperCasingStates(arrStr) {
    return arrStr.map(state => toTitle(state));
}

function toTitle(str) {
    const result = []
    const sliced = str.split(' ');
    for (let i = 0; i < sliced.length; i++) {
        let titled = sliced[i].charAt(0).toUpperCase() + sliced[i].slice(1);
        result.push(titled)
    }
    return result.join(' ')
}

function fahrenheitToCelsius(arr) {
    return arr.map(tmp => {
        let fahr = parseFloat(tmp);
        let celc = Math.floor((fahr - 32) * 5 / 9);
        return `${celc}°C`;
    });
}

function trimTemp(arr) {
    return arr.map(obj => ({
        ...obj,
        temperature: obj.temperature.replace(/\s+/g, '')
    }));
}

function tempForecasts(arr) {
    
    return arr.map(forecast => {
        let fahr = parseFloat(forecast.temperature);
        let celcius = Math.floor((fahr - 32) * 5 / 9);
        let state = toTitle(forecast.state)

        return `${celcius}°Celsius in ${forecast.city}, ${state}`;
    });
}

const CitiesOnly = [
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
]
//onst upperCasingStates = ['alabama', 'new jersey'] // -> ['Alabama', 'New Jersey']

// console.log(citiesOnly(CitiesOnly))
// console.log(upperCasingStates(['alabama', 'new jersey']))
// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))
// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ]))
  console.log(tempForecasts([
{
  city: 'Los Angeles',
  region: 'West',
  state: 'california',
  temperature: '101 °F'
},
{
  city: 'San Francisco',
  region: 'West',
  state: 'california',
  temperature: '84 °F'
},
{
  city: 'Miami',
  region: 'South',
  state: 'Florida',
  temperature: ' 112 °F'
},
{
  city: 'New York City',
  region: 'North East',
  state: 'new york',
  temperature: ' 0 °F'
},
{
  city: 'Juneau',
  region: 'West',
  state: 'Alaska',
  temperature: ' 21° F'
},
{
  city: 'Boston',
  region: 'North East',
  state: 'massachussetts',
  temperature: '45 °F'
},
{
  city: 'Jackson',
  region: 'South',
  state: 'mississippi',
  temperature: ' 70°F  '
},
{
  city: 'Utqiagvik',
  region: 'West',
  state: 'Alaska',
  temperature: ' -1 °F'
}]))