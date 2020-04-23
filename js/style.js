var divNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
	number = [...divNumber];

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Fill in the boxes random number
function fill() {
	number = shuffle(number);
	number.map((num, i) => {
		const a = document.getElementsByClassName(divNumber[i]);
		for (var r = 0; r < a.length; r++) {
			a[r].innerHTML = num;
		}
	});
}
fill();

// Hide some numbers randomly
function hide_easy() {
	var origine = '',
		p = document.getElementsByTagName('p');

	for (var j = 0; j < p.length; j++) {
		const num = (Math.random() );
		if (num <0.4) {
			p[j].style.display = 'none';
			origine = p[j].innerHTML;
			var x1 = document.createElement('INPUT');
			x1.setAttribute('type', 'text');
			x1.setAttribute('maxlength', 1);
			x1.setAttribute('onkeypress', 'validate(event)');

			onkeypress = 'validate(event)';
			x1.classList.add(origine);
			p[j].parentNode.insertBefore(x1, p[j]);
		}
	}
}
function hide_medium() {
	var origine = '',
		p = document.getElementsByTagName('p');

	for (var j = 0; j < p.length; j++) {
		const num = (Math.random() );
		if (num <0.6) {
			p[j].style.display = 'none';
			origine = p[j].innerHTML;
			var x1 = document.createElement('INPUT');
			x1.setAttribute('type', 'text');
			x1.setAttribute('maxlength', 1);
			x1.setAttribute('onkeypress', 'validate(event)');

			onkeypress = 'validate(event)';
			x1.classList.add(origine);
			p[j].parentNode.insertBefore(x1, p[j]);
		}
	}
}
function hide_difficult() {
	var origine = '',
		p = document.getElementsByTagName('p');

	for (var j = 0; j < p.length; j++) {
		const num = (Math.random() );
		if (num <0.7) {
			p[j].style.display = 'none';
			origine = p[j].innerHTML;
			var x1 = document.createElement('INPUT');
			x1.setAttribute('type', 'text');
			x1.setAttribute('maxlength', 1);
			x1.setAttribute('onkeypress', 'validate(event)');

			onkeypress = 'validate(event)';
			x1.classList.add(origine);
			p[j].parentNode.insertBefore(x1, p[j]);
		}
	}
}


// Input validation
function validate(evt) {
	var theEvent = evt || window.event;

	// Handle paste
	if (theEvent.type === 'paste') {
		key = event.clipboardData.getData('text/plain');
	} else {
		// Handle key press
		var key = theEvent.keyCode || theEvent.which;
		key = String.fromCharCode(key);
	}
	var regex = /[1-9]|\./;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) theEvent.preventDefault();
	}
}

// Check the input value

function load(){
	function check() {
		var inputArray = Array.prototype.slice.call(allInput);
		const checkAll = inputArray.filter(item => {
			return item.style.color === 'forestgreen';
		});
		if (checkAll.length === inputArray.length) {
			return true;
		} else {
			return false;
		}
	}

	const allInput = document.querySelectorAll('INPUT');
	allInput.forEach((e, i) => {
		e.oninput = event => {
			if (event.target.value === e.className) {
				e.style.color = 'forestgreen';
			} else {
				e.style.color = 'firebrick';
			}
			const result = check();

			if (result) {
				document.getElementById('title').innerHTML = 'Chúc mừng, bạn đã chiến thắng !!';
				stop();
			}
		};
	});
	
};

// Btn easy
document.getElementById('easy').addEventListener('click', () => {
	document.getElementById('contain').style.display = 'block';
	hide_easy();
	load();
	document.getElementById('tittle-level').style.display = 'none';
	document.getElementById('pause').style.display = 'block';
	document.getElementById('difficulty').style.display = 'none';
	document.getElementById('control').style.display = 'block';
	document.getElementById('banner').style.display = 'none';
	start();
	return;
});

// Btn medium
document.getElementById('medium').addEventListener('click', () => {
	document.getElementById('contain').style.display = 'block';
	hide_medium();
	load();
	document.getElementById('tittle-level').style.display = 'none';
	document.getElementById('pause').style.display = 'block';
	document.getElementById('difficulty').style.display = 'none';
	document.getElementById('control').style.display = 'block';
	document.getElementById('banner').style.display = 'none';
	start();
	return;
});

// Btn difficult
document.getElementById('difficult').addEventListener('click', () => {
	document.getElementById('contain').style.display = 'block';
	hide_difficult();
	load();
	document.getElementById('tittle-level').style.display = 'none';
	document.getElementById('pause').style.display = 'block';
	document.getElementById('difficulty').style.display = 'none';
	document.getElementById('control').style.display = 'block';
	document.getElementById('banner').style.display = 'none';
	start();
	return;
});

// Btn pause + cous
document.getElementById('pauses').addEventListener('click', () => {
	if(document.getElementById('icon-play').className === "icon-play"){
		stop();
		// document.getElementById('icon-play').style.display === 'block';
		// document.getElementById('icon-pause').style.display === 'none';
		
		// document.getElementById('hide-board').style.display='block';
		return;
	}
	// else{
	// 	start();
	// 	document.getElementById('icon-play').style.display === 'none';
	// 	document.getElementById('icon-pause').style.display === 'block';
	// 	document.getElementById('hide-board').style.display='none';
	// 	return;
	// }
});

//Btn icon-cous
document.getElementById('i-cous').addEventListener('click', ()=>{
	document.getElementById('pause').innerHTML = 'Tạm dừng';
		document.getElementById('hide-board').style.display='none';
		start();
		return;
})

//Btn Tam dung
document.getElementById('pauses').addEventListener('click', ()=>{
	if(document.getElementById('pauses').style.display==='block'){
		document.getElementById('pauses').innerHTML="Tiếp tục";
		stop();
		
		//document.getElementById('hide-board').style.display='block';
		
		return;
	}
	else{
		document.getElementById('hide-board').style.display='none';
		document.getElementById('pauses').innerHTML==="Tạm dừng"
		start();
		return;
	}
})

// Btn timer
var msec=0;
var sec=0;
var min=0;
var hour=0;
function start()
{
	//document.forms[0].displayTimer.innerHTML=hour+":"+min+":"+sec;
	document.getElementById("ti").innerHTML=hour+":"+min+":"+sec;
    go=setTimeout("start()",1);
    msec++;
    if(msec==200)
    {
        msec=0;
        sec++;
    }
    if(sec==60)
    {
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hour++;
	}
	if(sec<10){
		if(min<10){
			if(hour<10){
				document.getElementById("ti").innerHTML="0"+hour+":0"+min+":0"+sec;
			}
			else{
				document.getElementById("ti").innerHTML=hour+":0"+min+":0"+sec;
			}
		}
		// else{
		// 	if(hour<10){
		// 		document.getElementById("ti").innerHTML="0"+hour+":"+min+":0"+sec;
		// 	}
		// 	else{
		// 		document.getElementById("ti").innerHTML=hour+":"+min+":0"+sec;
		// 	}
		// }
	}
	else{
		if(min<10){
			if(hour<10){
				document.getElementById("ti").innerHTML="0"+hour+":0"+min+":"+sec;
			}
			else{
				document.getElementById("ti").innerHTML=hour+":0"+min+":"+sec;
			}
		}
		// else{
		// 	if(hour<10){
		// 		document.getElementById("ti").innerHTML="0"+hour+":"+min+":"+sec;
		// 	}
		// 	else{
		// 		document.getElementById("ti").innerHTML=hour+":"+min+":"+sec;
		// 	}
		// }
	}
}
function stop()
{
    clearTimeout(go)
}
function reset()
{
    window.location.reload()
}



// Restart
document.getElementById('restart').addEventListener('click', () => {
	// location.reload();
	history.go(0);
});
