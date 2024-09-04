function citiesOnly(arrObj) {
    let cityMap = new Map();
    let result = [];
    for (let i = 0; i < arrObj.length; i++) {
        cityMap.set(i, arrObj[i].city);
        result.push(cityMap.get(i));
    }
    return result;
}

function upperCasingStates(arrStr) {
    const states = new Map();
    let result = []

    arrStr.forEach((state, index) => {
        states.set(index, state)
    });

    for (let i = 0; i < states.size; i++) {
        let state = states.get(i);
        let titled = toTitle(state);
        result.push(titled)
    }
    return result
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
    const temp = new Map();
    const result = [];

    arr.forEach((tmp, index) => {
        temp.set(index, tmp)
    })

    for (let i = 0; i < temp.size; i++) {
        let fahr = temp.get(i)
        let celc = (fahr.slice(0,fahr.length-2) - 32) * 5 / 9;
        result.push(Math.floor(celc) + '°C')
    }
    return result
}

function trimTemp(arr) {
    result = arr.map(obj => {
        return {
        ...obj,
        temperature: obj.temperature.split(' ').join('')
    };
});
    return result; 
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
//   console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ]))