document.getElementById('reload').onclick = ()=>{
	location.reload();
   }
   let button = document.querySelector('.button');
   let new_elem = document.querySelector('h1');
   let video = document.querySelector('video');
   let time_interval = false;


   function button_on(self){
       if(time_interval)clearInterval(time_interval) //Обнуление таймера
	   video.play();
	   video.playbackRate = 0.9; 
	   document.querySelector('audio').play();
	   console.log(self.min);
	   timeMinut = parseInt(self.min) * 60
	   document.querySelector('.timer_block').append(new_elem);
	   time_interval = setInterval(function a(){
		seconds = timeMinut%60 
        minutes = timeMinut/60%60 
        hour = timeMinut/60/60%60 
        if (timeMinut < 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else { 
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        new_elem.innerHTML = strTimer;
    }
    --timeMinut;

	   },1000)

                  };
