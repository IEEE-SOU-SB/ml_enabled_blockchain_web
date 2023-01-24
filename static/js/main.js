(function($) {

	"use strict";


  // Form
	var contactForm = function() {
		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					name: "required",
					subject: "required",
					email: {
						required: true,
						email: true
					},
					message: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					name: "Please enter your name",
					subject: "Please enter your subject",
					email: "Please enter a valid email address",
					message: "Please enter a message"
				},
				
			});
		}
	};
	contactForm();

})(jQuery);

/* Send Contact Us data to google Sheet */

function SubForm (){
	$.ajax({
		
		url:"https://api.apispreadsheets.com/data/HElm2IP61z5wMYCb/",
		type:"post",
		data:$("#contactForm").serializeArray(),
		success: function(){
				alert("Your Inquiry Submitted 😊 We will be contacting you very soon 🕛")
			 document.contactForm.reset();

			
		},
		error: function(){
			alert("There was an error :(")
		}
	});
}

