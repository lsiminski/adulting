$.getJSON('list.json', function(data) { 
    
  var randomItem = data[Math.floor(Math.random()*data.length)];
  console.log(randomItem.name);
  $("#list_name p").html("<a href='" + randomItem.url + "'>" + randomItem.name + "</a>");
  $("#list_day p").text(randomItem.day);
  $("#list_category p").text(randomItem.category);
  $("body.random").css("background-image","url(" + randomItem.image + ")");
    
});


