$(document).ready(function(){
  $("#random").removeClass('hidden');
  wheel = new wheelnav('wheelDiv');
  wheel.initWheel(["Random", "Color", "Name", "ID"]);
  wheel.slicePathFunction = slicePath().DonutSlice;
  wheel.createWheel();

  randomPoke = function() {
   $.get("http://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random() * 711 + 1), function(data){
     console.log(data.name);
     $("#result").append("<p>"+data.name.charAt(0).toUpperCase() + data.name.slice(1)+"</p>");
     $("#result").append("<p>Height: "+data.height+"</p>");
     $("#result").append("<p>Weight: "+data.weight+"</p>");
     $("#result").append('<img src="'+data.sprites.front_default+'"">');
   });
  };

wheel.navItems[1].navigateFunction = function () {
  $(".btn").remove();
//  $("#buttons").append('<div class="btn btn-success hidden" id="random" onclick="randomPoke();">Give me a pokemons color Pokémon!</div>');
  $("#buttons").append('<div class="btn btn-success" id="color" onclick="colorPoke();">Give me a pokemons color!</div>');
};
colorPoke = function() {
    let link = "http://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random() * 711 + 1)
    $.ajax({
        type: "get",
        url: link,
        success: function(result) {
            $("#result").append('<img src="'+result.sprites.front_default+'"">');
        }
    })
}
 // $.get("http://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random() * 711 + 1), function(data){
 //   console.log(data.name);
 //   $("#result").append('<img src="'+data.sprites.front_default+'"">');
 // });
// };


});
