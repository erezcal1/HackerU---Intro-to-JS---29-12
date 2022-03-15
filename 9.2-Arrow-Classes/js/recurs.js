const deepCopy = (obj) => {
  let newObj = {...obj};
  for (let [key,value] of Object.entries(obj)) {
    if(typeof value === 'object') {
      if (Array.isArray(value)) {
        newObj[key] = [...deepCopy(obj[key])];
      }else{
      // newObj[key] = {...obj[key]};
      newObj[key] = {...deepCopy(obj[key])};
      }
    }
  }
  return newObj;
}

let obj_In_Obj = {
  name: 'kenny',
  age: 7,
  address:{
    city: 'TLV',
    street: 'ben Gurion',
    home: 12
  }
};
let new_Obj_In_Obj = deepCopy(obj_In_Obj);
