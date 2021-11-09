//Create a JSON array with your json string
JSONArray array = new JSONArray(jsonString);
JSONArray newArray = new JSONArray();
//loop on your JSONArray elements
for (i=0, i<array.size(),i++) {
    //Get each separate object into a JSONObject
    JSONObject obj = array.getJSONObject(i);
    //let say you want to modify id for example
    obj.put("id", 12345);
    //push the modifyed object into your new array
    newArray.put(obj);
}
//transform the array into a string
String json = newArray.toString();
