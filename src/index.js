module.exports = function check(str, bracketsConfig) {
  var str_2 = "";
  var New_array = [];
  for (var i = 0; i < bracketsConfig.length; i++) {
    var X = bracketsConfig[i]; //если переменные не задавать то программа не работает
    var l = X.length;           
    if (X = Array) {  //если bracketsConfig является матрицей
          str_2 = "";
          for (var j = 0; j < l; j++) {
            str_2 += bracketsConfig[i][j]; 
          }
          New_array.push(str_2);   //составляем массив из скобок, например: ['{}','()']
    } else {                            //если bracketsConfig не является матрицей
          str_2 += bracketsConfig[i];
        }
    
  }
    if (New_array == []) {  // если bracketsConfig не матрица то массив ещё пуст 
      New_array.push(str_2)  //составляем массив из скобок, например: ['{}']
    }
var T = str.length/2;         // количество пар скобок
    for (j = 0; j < T; j++) {    //сколько раз перебрать массив
      for (i = 0; i < New_array.length; i++) {  // перебираем массив
      str = str.replace(New_array[i], '');     //вычёркиваем из строки элементы массива
    }
    }
  return  str === "" ? true : false   //строка стала пустой или нет?
}
