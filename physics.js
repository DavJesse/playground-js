function getAcceleration(obj) {
    if (obj.hasOwnProperty('f') && obj.hasOwnProperty('m') && obj.f !== null && obj.m !== null) {
        return obj.f / obj.m;
    } else if (obj.hasOwnProperty('Δv') && obj.hasOwnProperty('Δt') && obj['Δv'] !== null && obj['Δt'] !== null) {
        return obj['Δv'] / obj['Δt'];
    } else if (obj.hasOwnProperty('d') && obj.hasOwnProperty('t') && obj.d !== null && obj.t !== null) {
        return (2 * obj.d) / Math.pow(obj.t, 2);
    } else {
        return "impossible";
    }
}


const obj = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d: 10
  }
  
console.log(getAcceleration(obj))