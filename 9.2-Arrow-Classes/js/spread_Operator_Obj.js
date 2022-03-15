let user_Obj = {
  name: 'kenny',
  age: 7
};

let user_Obj2 = {
  name: 'bob',
  age: 30
};
let address_Obj = {
  city: 'TLV',
  street: 'ben Gurion',
  home: 12
};
//copy object
let user_Obj_Copy = {...user_Obj};

//copy multiple objects
let user_Address_Obj = {...user_Obj, ...address_Obj};

//copy multiple objects and add new property
let user_Address_Phone_Obj =  {...user_Obj, ...address_Obj, phone: "054-1234567"};

let new_User_Obj = {...user_Obj, ...user_Obj2};
console.log(new_User_Obj);

let obj_In_Obj = {
  name: 'kenny',
  age: 7,
  address:{
    city: 'TLV',
    street: 'ben Gurion',
    home: 12
  }
};
//deep copy

let new_Obj_In_Obj = {...obj_In_Obj};
new_Obj_In_Obj.address = {...obj_In_Obj.address};
