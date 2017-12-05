

function dropNav() {
	if(document.documentElement.scrollTop > 583) {
		document.getElementsByClassName('fixed-nav')[0].classList.remove('hide-top')
	}
	else {
		document.getElementsByClassName('fixed-nav')[0].classList.add('hide-top');
	}
}

