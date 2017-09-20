$(function(){

	var navigation = {};

	navigation.toggleHide = function(){
		$('.HTML').addClass('hide');
		$('.JS').addClass('hide');
		$('.RB').addClass('hide');
		$('.XL').addClass('hide');
	}

	navigation.toggleDisplay = function(section){
		$('.' + section).toggleClass('hide');
	}

	navigation.removeDisplay = function(section){
		$('.' + section).addClass('hide')
	}

	navigation.displaySkills = function(){
		$('#skills').on('click', function(){
			navigation.toggleDisplay('HTML');
			navigation.toggleDisplay('JS');
			navigation.toggleDisplay('RB');
			navigation.toggleDisplay('XL');
			navigation.removeDisplay('about');
			navigation.removeDisplay('contact');
		});
	}

	navigation.displayAbout = function(){
		$('#about').on('click', function(){
			navigation.toggleDisplay('about');
			navigation.removeDisplay('HTML');
			navigation.removeDisplay('JS');
			navigation.removeDisplay('RB');
			navigation.removeDisplay('XL');
			navigation.removeDisplay('contact');
		});
	}

	navigation.displayContact = function(){
		$('#connect').on('click', function(){
			navigation.toggleDisplay('contact')
			navigation.removeDisplay('HTML');
			navigation.removeDisplay('JS');
			navigation.removeDisplay('RB');
			navigation.removeDisplay('XL');
			navigation.removeDisplay('about')
		});
	}


	navigation.init = function(){
		navigation.displaySkills();
		navigation.displayAbout();
		navigation.displayContact();
	}

	navigation.init()

})