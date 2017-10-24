var comparación = function (array1, array2){
  document.write("funcióndeclarada es una prueba")
  if (array1.length !== array2.length) {
    retur false;
  }else{
    for (var i = 0; i< array1.length; i++) {
      console.log(array1[i], array2[i])
      if array1[i] !== array2[i]{
        //document.write ("los arreglos son diferentes")
        return false;
      }
    }
    document.write("los arreglos son iguales")
    return true;
  }
}

var arreglo1 = [1,2,3,4,5,6,7,8,9,0]
var arreglo2 = [1,2,3,4,5,6,7,8,9,0]
