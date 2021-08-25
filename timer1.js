let arr = process.argv.slice(2);

const setAlarm = function(arr){
  arr = sort(arr);
  for (let alarm of arr) {
    if (alarm > 0 && alarm % 1 == 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
        console.log(`alarm for ${alarm} seconds is complete`)
      }, alarm * 1500)
    }
  }
}

const sort = function(arr) {
  let sortele; 
  arr = covertToNum(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      sortele = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = sortele;
      sort(arr);
    }
  }
  return arr;
};

const covertToNum =function(arr){
  arrNew = [];
  for(let ele of arr){
    if(!isNaN(ele)){
      arrNew.push(Number(ele));
    }
  
  }
  return arrNew;
}


setAlarm(arr);