

function dropNav() {
	if(document.documentElement.scrollTop > 583) {
		document.getElementsByClassName('fixed-nav')[0].classList.remove('hide-top')
	}
	else {
		document.getElementsByClassName('fixed-nav')[0].classList.add('hide-top');
	}
}

function revealProjects() {
	var loadMoreText = document.getElementsByClassName('load-more-text');
	var halfList = document.getElementsByClassName('responsive-list');
	if (halfList[1].classList.contains('hidden-projects')) {
		halfList[1].classList.remove('hidden-projects');
		loadMoreText[0].innerHTML = 'HIDE PROJECTS';
	}
	else {
		loadMoreText[0].innerHTML = 'LOAD MORE PROJECTS';
		halfList[0].scrollIntoView();
		halfList[1].classList.add('hidden-projects');
	}
}

function activeNavHighlight() {
	var items = document.getElementsByClassName('fixed-nav-bar')[0].getElementsByTagName('li');
	var sections = [
		document.getElementsByClassName('about')[0],
		document.getElementsByClassName('project-list')[0],
		document.getElementsByClassName('work')[0],
		document.getElementsByClassName('service-list')[0],
		document.getElementsByClassName('testimonial-background')[0],
		document.getElementsByClassName('contact')[0]
	];
	var currentY = self.pageYOffset;
	sections.forEach(function(elem, index, arr) {
		if (index == arr.length - 1 && currentY > elem.offsetTop) {
			items[index + 1].style.color = '#EDE7F6';
			return;
		}
		if (currentY > elem.offsetTop && currentY < arr[index + 1].offsetTop ){
			items[index + 1].style.color = '#EDE7F6';
			return;
		}
		else {
			items[index + 1].style.color = '#424242';
			return;
		}
	});
}
