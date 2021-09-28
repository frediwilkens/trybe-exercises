const techList = (array, nome) => {
  if (array.length > 0) {
    const OrderedArray = array.sort();
    let list = [];
    for(let index = 0; index < OrderedArray.length; index += 1) {
      list.push({
        tech: `${OrderedArray[index]}`,
        name: `${nome}`
      })
    }
    return list;
  }
  return 'Vazio!'
}

module.exports = techList;