//Create a JSON array with your json string
JSONArray array = new JSONArray(jsonString);
JSONArray newArray = new JSONArray();
//loop on your JSONArray elements
for (i=0, i<array.size(),i++) {
    //Get each separate object into a JSONObject
    JSONObject obj = array.getJSONObject(i);
    //let say you want to modify id for example
    obj.put("FirstName", 12345);
    obj.put("LastName", 12345);
    obj.put("PhoneNumber", 12345);
    obj.put("PostalAddress.AddressFirstLine", 12345);
    obj.put("PostalAddress.AddressSecondLine", 12345);
    obj.put("PostalAddress.City", 12345);
    obj.put("PostalAddress.State", 12345);
    obj.put("PostalAddress.PostalCode", 12345);
    obj.put("Email", 12345);
    obj.put("Source",);
    obj.put("Description", 12345);
    obj.put("Category", 12345);
    obj.put("Urgency", 12345);
    //push the modifyed object into your new array
    newArray.put(obj);
}
//transform the array into a string
String json = newArray.toString();
