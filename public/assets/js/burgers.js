$(function() {
  $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");
    const newDevoured = $(this).data("newdevoured");

    const newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevouredState
    }).then(() => location.reload());
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => location.reload());
  });
});
