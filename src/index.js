module.exports = function check(str, bracketsConfig) {
 
    let i = 0;
    while(i < str.length){
      //цикл по конфигуfo
      for(massive of bracketsConfig){
      if(str[i] === massive[0] && str[i+1] === massive[1]){
        str = str.replace(massive[0] + massive[1], ''); 
         i = -1;
    continue
      }
      }
      i++;
      
    }
    
    if (str.length === 0){
        return true;}
      else {
        return false;}
  };


