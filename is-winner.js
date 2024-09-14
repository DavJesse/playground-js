async function isWinner(country) {
    try {
        country = await db.getWinner(country);
        if (country === Error('Country not Found')) {
            return `${country.name} never was a winner`;
        }
        if (country.continet !== 'Europe') {
            return `${country} is not what we are looking for because of continent`;
        }
        let result = await db.getResults(country.id);
        if (result === Error('Results found')) {
        return `${country.name} never was a winner`;
        }
        if (result.length < 3) {
            return `${country.name} is not what we are looking for because of number of times it was champion`;
        }
        return (
            `${country.name} won the FIFA World Cup in ` + result.map((result) => result.year).join(', ') +
        ' winning by ' + result.map((result) => result.score).join(', ')
        )

    } catch (e) {
        if (e.message == 'Country not Found') {
            return `${country} never was a winner`
        }
    }
}