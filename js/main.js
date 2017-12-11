// $(document).ready(function() {
//     // alert("ready");
//     // $('table').on('click', 'id[]', function(e) {
// 	// });
// 	var next = "X";
// 	var x = "X";
// 	var o = "O";
// 	$(".box").click(function() { 
// 		$(this).html(x);
// 	});  

// });

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
        
        if(clicked == 0) {
            boxes.push(selectedBox);

            var letterToUse;
            if(next){
                letterToUse = x;
                next = 0;
                $(this).addClass("xColor");
            }
            else {
                letterToUse = o;
                next = 1;
                $(this).addClass("oColor");
            }

            $(this).html(letterToUse);

        } // END if(clicked)

    });
    $("#clearGame").click( function()
           {
                   location.reload();
           }
        );

});