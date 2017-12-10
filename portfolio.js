

function dropNav() {
	if(document.documentElement.scrollTop > 583) {
		document.getElementsByClassName('fixed-nav')[0].classList.remove('hide-top');
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
		if (index == arr.length - 1 && currentY >= elem.offsetTop) {
			items[index + 1].style.color = '#EDE7F6';
			return;
		}
		if (currentY >= elem.offsetTop && currentY < arr[index + 1].offsetTop ){
			items[index + 1].style.color = '#EDE7F6';
			return;
		}
		else {
			items[index + 1].style.color = '#424242';
			return;
		}
	});
}

function testimonialScroll() {
	var testimonials = document.getElementsByClassName('testimonial-text');
	var dots = document.getElementsByClassName('dot');
	for (var i = 0; i < 3; i++) {
		var nextIndex = (i + 1) % 3;
		if (testimonials[i].classList.contains('active')) {
			testimonials[i].classList.remove('active');
			testimonials[nextIndex].classList.add('active');
			dots[i].classList.remove('active-dot');
			dots[nextIndex].classList.add('active-dot');
			break;
		}
	}
}

/* smooth scroll function adapted from http://web.archive.org/web/20140213105950/http://itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript */

function smoothScroll(eClass) {

	var startY = self.pageYOffset;
	var stopY = document.getElementsByClassName(eClass)[0].offsetTop;
	var distance = stopY > startY ? stopY - startY : startY - stopY;
	if (distance < 100) {
		scrollTo(0, stopY); return;
	}
	var speed = Math.round(distance / 100);
	if (speed >= 20) speed = 20;
	var step = Math.round(distance / 25);
	var leapY = stopY > startY ? startY + step : startY - step;
	var timer = 0;
	if (stopY > startY) {
		for ( var i=startY; i<stopY; i+=step ) {
			setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
			leapY += step; if (leapY > stopY) leapY = stopY; timer++;
		} return;
	}
	for ( var i=startY; i>stopY; i-=step ) {
		setTimeout('window.scrollTo(0, '+leapY+')', timer * speed);
		leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	}
}