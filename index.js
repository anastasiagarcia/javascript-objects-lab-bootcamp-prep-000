var recipes={
  milk: "1 cup",
  eggs: "2",
  sugar: "2 spoons"
  
}

function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({},object,{[key]:value});

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newRecipe= Object.assign({},obj,[key]);
  delete newRecipe.key;
  return newRecipe;
}