const hydrate = (request) => {
    let glassOfWater = 0;
    let requestNumbers = request.match(/\d+/g).map(Number);
    for (let number of requestNumbers) {
      glassOfWater += number;
    }
    if (glassOfWater === 1) {
      return `${glassOfWater} copo de água`;
    }
    return `${glassOfWater} copos de água`;
}

module.exports = hydrate;