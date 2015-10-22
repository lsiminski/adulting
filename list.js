$.getJSON('list.json', function(data) { 
    
  var randomStrategy = data.strategies[Math.floor(Math.random()*data.strategies.length)];
  console.log(randomStrategy.strategy);
  $("#oblique_strategies p").text(randomStrategy.strategy);

  $.each(data.strategies, function(data) {
    $('#fulllist').append('<li class="strategy"><p>' + this["strategy"] + '</p></li>');
  });
    
});

$('#oblique_strategies').click(function() {
  document.location.reload(true);
});
