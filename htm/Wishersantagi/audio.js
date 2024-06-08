window.addEventListener("mouseover",play);
		window.addEventListener("click",play);
		function play() { 
			var msc=document.getElementById("audio");
			msc.style.display="none";
			msc.src="back.mp3";
			msc.play();
		}