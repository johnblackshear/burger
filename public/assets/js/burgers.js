$(function(){
  $("create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
      burger_name: $("#is_eaten")
      .val()
      .trim(),
      devoured: 0

    };

    $.ajax("/api/burgers",{
        type: "POST",
        data: newBurger
    }).then(function(){
      console.log("added new burger");
      location.reload();
    });

    
  });
  
  $("eat_burger").on("click", function(event){
    event.preventDefault();

    var id = $(this).data("id");
    var devouredState ={
      devoured: 1
    };
    $.ajax("/api/burgers" + id,{
      type: "PUT",
      data: devouredState
    }).then(function(){
      console.log("burger devoured");
      location.reload();
    });
  });

  $("delete_burger").on("click", function(event){
    event.preventDefault();

    var id = $(this).data("id");

    $.ajax({
      type: "DELETE",
      url: "/api/burgers" + id
    }).then(location.reload());
  });
});
