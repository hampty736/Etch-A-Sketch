/*


var foo = [];
var container = document.getElementById("container");
for (var i = 1; i <= 255; i++) {
   foo.push(i);
   container.innerHTML += '<div class="box"></div>';
}

$(document).ready(function(){
  $('.box').mouseenter(function(){$(this).addClass('box_hover');});
});


$("#clearBtn").click(function(){
   if($('.box').css('background-color','#380606')== 'true')
         $('.box').css('background-color', 'white');
   
});



/*$(".clearBtn").click(function(){
   if($('box').css('background-color')=='#380606')
         $('box').css('background-color', 'white');
   else {
         $('box').css('background-color', 'white');
   }
});*/

//
var start = function(option){
	$('#container').html("");

	var input = prompt('Type an integer between 1 and 128');

	if (input >= 1 && input <= 128){	// Check for non-ridiculous input
		var square_size = $('#container').width()/input - 2;	// The -2 accounts for border size

		for(var i = 1; i <= input; i++){
			for(var j = 1; j <= input; j++){
				$('#container').append('<div class="box"></div>');
			}
			$('#container').append('<div class="new_row"></div>');
		}
		$('.box').css('width',square_size);
		$('.box').css('height',square_size);

		$('.box').mouseenter(function(){
			switch(option){
				case 1:
					$(this).addClass('box_hover');
					break;
				case 2:
					var currentOpacity = $(this).css('opacity');
					if(currentOpacity > 0){
						$(this).css('opacity', currentOpacity - 0.1);
					}
					break;
				case 3:
					/*
						Animate to 0% opacity over 200ms, then back to 100%
						opacity over 800ms when cursor leaves square.
						This "case 3" was added for fun. The Odin Project
						does not ask you to do this option.
					*/
					$(this).fadeTo(100,0);
					$(this).mouseleave(function(){
						$(this).fadeTo(400,1);
					});
					break;
			}
		});
	}
	else{
		alert('No. You are crazy.');
	}
}