
function mapToNegativize(array){
  return array.map(num => -num )
}

function mapToNoChange(array){
  return array
}

function mapToDouble(array){
  return array.map(num => num * 2)
}

function mapToSquare(array){
  return array.map(num => num * num)
}

function reduceToTotal(array, start=0){
   return array.reduce(((sum, val) => sum + val), start)
}

function reduceToAllTrue(array){
  for (let i = 0; i < array.length; i++) {
    if (!!!array[i]) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(array){
  for (let i = 0; i < array.length; i++){
    if (!!array[i]) {
      return true
    }
  }
  return false
}