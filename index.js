
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


function reduceToAnyTrue(array){
return array.reduce(((sum, val) => !!sum != !!val))
}

function reduceToAllTrue(array){
  return array.reduce(((sum, val) => !!sum == !!val))
}