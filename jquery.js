$(document).ready(function () {

	$(function () {
		var header = $(".header");

		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
				header.addClass("fixed-header");
			} else {
				header.removeClass("fixed-header");
			}
		});
	});

	$(function () {
		var header = $(".header-2");

		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll >= 50) {
				header.addClass("fixed-header");
			} else {
				header.removeClass("fixed-header");
			}
		});
	});

	// text auto typing......
	const animateTextTyping = (node) => {
		const text = node.textContent;
		const chars = text.split("");
		node.innerHTML = "";
		node.classList.add("typing");
		i = 0;
		const addNextChar = (i) => {
			let nextChar = chars[i] === "\n" ? "<br>" : chars[i];
			node.innerHTML += "<span>" + nextChar + "</span>";
			if (i < chars.length - 1) {
				setTimeout(function () {
					addNextChar(i + 1);
				}, 50 + Math.random() * 100); // add random delay to make it more human ;)
			} else {
				setTimeout(function () {
					node.classList.remove("typing");
				}, 50 + Math.random() * 150);
			}
		};
		addNextChar(i);
	};
	let text = document.getElementById("text");
	animateTextTyping(text);

	$(".section-2 .nav li a").click(function () {
		$(".section-2 .nav li a").removeClass("active");
		$(".section-2 .nav li a").css({ "color": "black", "margin-left": "0px" });
		$(this).css({ "color": "#3e64ff", "margin-left": "45px", "visibility": "visible" });
		$(this).addClass("active");
	});

	$(".progress .progress-bar").each(function () {
		$(this).animate(
			{
				width: $(this).attr("data-progress") + "%",
			},
			2000
		);
		$(this).text($(this).attr("data-progress") + "%");
	});

	const counters = document.querySelectorAll(".radial-01-number");

	counters.forEach((counter) => {
		counter.innerText = "0";
		const updateCounter = () => {
			const target = +counter.getAttribute("data-target");
			const count = +counter.innerText;
			const increment = target / 20000;
			if (count < target) {
				counter.innerText = `${Math.ceil(count + increment)}`;
				setTimeout(updateCounter, 1);
			} else counter.innerText = target;
		};
		updateCounter();
	});

	$("header .header-2 .slide-menu").hide();
	$(".header-2 .menu-btn").click(function () {
		$("header .header-2 .slide-menu").slideToggle();
	});



});
