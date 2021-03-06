$(function () {
    $("#submit").on("click", function () {
        event.preventDefault();
        var burgerName = $("#name").val().trim();
        console.log(burgerName);

        if (burgerName == "") {
            alert("What would you like to order?");
        } else {
            $.ajax("/api/burgers", {
                type: "POST",
                data: {
                    burgerName: burgerName
                }
            }).then(function (response) {
                location.reload();
            });
        }
    });

    // Eat a burger
    $(".eaticon").on("click", function () {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: true
            }
        }).then(function () {
            location.reload();
        });
    });

    // Order another burger
    $(".waitericon").on("click", function () {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: false
            }
        }).then(function () {

            location.reload();
        });
    });
});