$.getJSON('list.json', function(data) { 
    
  var randomItem = data[Math.floor(Math.random()*data.length)];
  console.log(randomItem.name);
  $("#list_name p").text(randomItem.name);
  $("#list_day p").text(randomItem.day);
  $("#list_category p").text(randomItem.category);
  $("#list_url p").text(randomItem.url);
  $("html").css("background-image",randomItem.image);
    
});
