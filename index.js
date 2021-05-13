function mapToNegativize(array){
    return array.map(number => number * -1)
}

function mapToNoChange(array){
    return array.map(number => number)
}

function mapToDouble(array){
    return array.map(number => number * 2)
}

function mapToSquare(array){
    return array.map(number => number * number )
}

function reduceToTotal(array, start = 0){
   let total =  array.reduce((acc,value) => acc + value,start)
    return total
}

function reduceToAllTrue(array){
   let total = function(acc,value){
      if(!!acc === true && !!value === true){
        return true
      }
      else{
        return false
      }
    }   
  return array.reduce(total,true)
}

function reduceToAnyTrue(array){
    let total = function(acc,value){
        if(acc === true){
            return true
        }
        else{
            return !!value
        }
    }
    return array.reduce(total,false)
}
