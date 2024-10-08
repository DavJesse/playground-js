function hasCity(country, cities) {
    return function(city) {
        return cities.includes(city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`;
    }
}

// const chineseCities = ['Beijing', 'Shanghai', 'Wuhan', 'Shenzhen', 'Tianjin', 'Chengdu'];
// const isChinese = hasCity('China', chineseCities);
// console.log(isChinese('Nairobi'))