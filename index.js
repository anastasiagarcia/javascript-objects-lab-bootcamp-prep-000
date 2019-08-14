var recipes={
  milk: "1 cup",
  eggs: "2",
  sugar: "2 spoons"
  
}

function updateObjectWithKeyAndValue(object, key, value){
 object.assign({},object,{key:[value]});
 return object;
}

