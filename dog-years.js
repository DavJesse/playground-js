function dogYears(planet, age) {
    // Lowecase 'planet' for universality
    planet = planet.toLowerCase()

    // Define planets object with all planets
    const planets = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    }

    if (!(planet in planets)) {
        return `Error: Planet "${planet} not included in scope"`
    }

    // Convert to dog years
    let planetTime = (planets[planet] * 31557600);
    let dogAge = age/planetTime;
    dogAge = (dogAge * 7).toFixed(2);

    return dogAge * 1
}

console.log(typeof dogYears('eaRth', 1000000000))
console.log(dogYears('jupiter', 1000000000))