
$(document).ready(function(){
  $(".showQuiz").click(function(){
    $(".marketing").show(); //shows the row section when you click.Toggle not needed in this case because the hide term button takes care of the next click
    $(".hideQuiz").show(); //shows the hidden "Click to hide" button
    $(".showQuiz").hide(); //hides the "Click to learn" after you click on it
  });
  $("p.hideQuiz").click(function(){
    $(".marketing").hide(); //shows & hides the row section when you click
    $(".hideQuiz").hide(); //hides the "Click to Hide" after you click on it
    $(".showQuiz").show(); //displays the "Click to Show" again
  });
  $(".lightBackground").click(function(){
    $("body").removeClass();
    $("body").addClass("lightPage");
  });
  $(".darkBackground").click(function(){
    $("body").removeClass();
    $("body").addClass("darkPage");
  });
  $(".active").click(function(){
    $("body").removeClass();
    $("body").addClass("defaultPage");
  });

  $("form#quiz").submit(function(event){
    event.preventDefault();
    var yourName = $("input#name").val();
    var yourDrink = parseInt($("input:radio[name=drink]:checked").val());
    var yourHobby = $("#hobby").val();
    var yourKids = parseInt($("input:radio[name=kids]:checked").val());

    if (yourDrink === 0){
      var drinkName = "Coffee";
      var result = "Italy";
    };
    if (yourDrink === 1){
      var drinkName = "Whiskey";
      var result = "Scotland";
    };
    if (yourDrink === 2){
      var drinkName = "Wine";
      var result = "Bordeaux";
    };

    if (yourName){
        $(".out").show();

        $(".addResult").text(result);
        $(".addName").text(yourName);
        $(".addHobby").text(yourHobby);
        $(".addDrink").text(drinkName);
        }
    else {
      alert("Please enter your name.");
    };

});
});
