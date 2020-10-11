module.exports = function check(str, bracketsConfig) {
  var str_2 = "";
  var New_array = [];
  for (var i = 0; i < bracketsConfig.length; i++) {
    var X = bracketsConfig[i];
    var l = X.length;
    if (X = Array) { //только такое равенство
          str_2 = "";
          for (var j = 0; j < l; j++) {
            str_2 += bracketsConfig[i][j];
          }
          New_array.push(str_2);
    } else {
          str_2 += bracketsConfig[i];
        }
    
  }
    if (New_array == []) {  // такое == или такое ===
      New_array.push(str_2)
    }
var T = str.length/2;
    for (j = 0; j < T; j++) {
      for (i = 0; i < New_array.length; i++) {
      str = str.replace(New_array[i], '');
    }
    }
    
    
  return  str === "" ? true : false
}
