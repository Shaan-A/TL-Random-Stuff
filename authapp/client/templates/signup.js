Template.register.events({
	"submit .form-signup": function(event){
		var first_name = event.target.first_name.value;
		var last_name = event.target.last_name.value;
		var email = event.target.email.value;
		var password = event.target.password.value;
		var password2 = event.target.password2.value;

		// create object with all the fields from form-signup
		Accounts.createUser({
			email: email,
			password: password,
			profile: {
				first_name: first_name,
				last_name: last_name
			}
		}, function(err){
			if(err) {
				FlashMessages.sendError('There was an error with registration');	
			} else {
				FlashMessages.sendSuccess('Account Created! You are now logged in');
			}
		});

		// Prevent Submit
		return false;

	}
});