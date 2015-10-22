$.getJSON('list.json', function(data) { 
    
  var randomItem = data[Math.floor(Math.random()*data.length)];
  console.log(randomItem.name);
  $("#list_name p").text(randomItem.name);
  $("#list_date p").text(randomItem.date);
  $("#list_category p").text(randomItem.category);
    
});
