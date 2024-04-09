var video;

//page load
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false
});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
})

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
})

// slow down
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate)
})

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log(video.playbackRate)
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	console.log(video.currentTime);
	video.addEventListener("ended", function(){
		video.currentTime = 0;
		video.play();
	})
})

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		console.log("Mute Audio");
		video.muted = true;
		document.querySelector("#volume").innerHTML = "0%";
		document.querySelector("#slider").value = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
	} 
	else{
		console.log("Unmute Audio");
		video.muted = false;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
		document.querySelector("#slider").value = video.volume * 100;
		document.querySelector("#mute").innerHTML = "Mute"
	}
})


// volume slider
document.querySelector("#slider").oninput = function() {
	document.querySelector("#volume").innerHTML = this.value + "%";
}

// styled
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool")
})

// original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool")
})