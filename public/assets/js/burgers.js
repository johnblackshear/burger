$(function(){
  $("create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca")
      .val()
      .trim(),
      devoured: $("[name=devoured]:checked").val().trim()

    };

    $.ajax("/burgers",{
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
    $.ajax("/burgers/" + id,{
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

    $.ajax("/burgers/" + id,{
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
