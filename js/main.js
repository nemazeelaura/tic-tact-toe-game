
$(document).ready(function() {
    // alert("ready");
    // $('table').on('click', 'id[]', function(e) {
    // });
    var next = 1;
    var x = "X";
    var o = "O";
    var boxes = [];

// EXAMPLE accessing values in multidimentional array boxes.row1.key1 == 'input1';


    $(".box").click(function() {
        var selectedBox = this.id;
        //
        var clicked = 0;
        for(var i = 0; i < boxes.length; i++){
            if(boxes[i] == selectedBox) clicked = 1;
        }
        
        if (clicked == 0) {
            boxes.push(selectedBox);

            var letterToUse;
            if (next) {
                letterToUse = x;
                next = 0;
                $(this).addClass("xColor");
            } else {
                letterToUse = o;
                next = 1;
                $(this).addClass("oColor");
            }

            $(this).html(letterToUse);
            console.log($("#c1").html());
            
           checkForWin();

        } // END if(clicked)       
    });


    $("#clearGame").click( function() {
        location.reload();
    });

});


// seperating code into functions can be helpful :) help from JC
function checkForWin() {
    if( ($("#c1").html()== "X" && $("#c2").html()== "X" && $("#c3").html()== "X") ||

        ($("#c4").html()== "X" && $("#c5").html()== "X" && $("#c6").html()== "X") ||

        ($("#c7").html()== "X" && $("#c8").html()== "X" && $("#c9").html()== "X") ||

        ($("#c1").html()== "X" && $("#c4").html()== "X" && $("#c7").html()== "X") ||

        ($("#c2").html()== "X" && $("#c5").html()== "X" && $("#c8").html()== "X") ||

        ($("#c3").html()== "X" && $("#c6").html()== "X" && $("#c9").html()== "X") ||

        ($("#c1").html()== "X" && $("#c5").html()== "X" && $("#c9").html()== "X") ||

        ($("#c3").html()== "X" && $("#c5").html()== "X" && $("#c7").html()== "X") ){

        alert("X Wins!");
  
    } else {

        
    if( ($("#c1").html()== "X" && $("#c2").html()== "X" && $("#c3").html()== "X") ||

        ($("#c4").html()== "O" && $("#c5").html()== "O" && $("#c6").html()== "O") ||

        ($("#c7").html()== "O" && $("#c8").html()== "O" && $("#c9").html()== "O") ||

        ($("#c1").html()== "O" && $("#c4").html()== "O" && $("#c7").html()== "O") ||

        ($("#c2").html()== "O" && $("#c5").html()== "O" && $("#c8").html()== "O") ||

        ($("#c3").html()== "O" && $("#c6").html()== "O" && $("#c9").html()== "O") ||

        ($("#c1").html()== "O" && $("#c5").html()== "O" && $("#c9").html()== "O") ||

        ($("#c3").html()== "O" && $("#c5").html()== "O" && $("#c7").html()== "O") ){

        alert("O Wins!");
    }
}
}

