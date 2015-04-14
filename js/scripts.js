$(document).ready(function() {
    $("form#add").submit(function(event) {
        event.preventDefault();

        // var from_location = $("select#location");
        // var from_zip = $("input#zip");
        // var to_location = $("select#to_location");
        // var to_zip = $("input#to_zip");

        var cost = {
                from_location : $("select#location").val(),
                to_location : $("select#to_location").val(),
                shipping: function() {
                    if (this.to_location === 'washington') {
                        return "$1,000,000.12";
                        console.log(this.to_location);
                    } else if (this.to_location === 'idaho') {
                        return "$2.25";
                    } else if (this.to_location === 'california') {
                        return "Free";
                    } else if (this.to_location === 'courcelles') {
                        return "We can't ship here.  It's not 'merica."
                    }
                }
            }

        $('#result').show();
        $("#shipping-cost").text(cost.shipping());
        console.log(cost.to_location);

    });
});
