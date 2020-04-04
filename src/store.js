
export const store = {
  state: {
    time: 60.00,
    initialTime:60.00,
    timerIsOn:false
  },
  presets:[60, 300, 600, 1200, 1800],

  toggle() {
    if ( (this.state.timerIsOn === false) && (this.state.time > 0) ) {
      this.play()

      }
    else if  ((this.state.timerIsOn === false) && (this.state.time === 0))  {
      this.reset();
      this.play();
    }
    else {
      this.pause()
    }
  },
  
  pause()   {
     if (Notification.permission !== "denied") {
       Notification.requestPermission()
    }
    this.state.timerIsOn = false;
    clearInterval(this.intervalTimer);

  },
  play()   {
      this.state.timerIsOn = true;
      this.timerLoop(this.state.time) ;

  },

  reset() {
    this.change(this.state.initialTime)
    this.pause();

  }, 
  addTime(addendum) {
    this.state.time = this.state.time + addendum;
    this.state.initialTime = this.state.initialTime + addendum;

  },


  initTime(time) {
    this.state.initialTime = time;
    this.change(time)

  },

  change(time) {
    this.state.time = time;
  },

  timerLoop(seconds){ //counts time, takes seconds

  // maintenant + durée du compte à rebours
  let endOfCountdown = Date.now() + (seconds * 1000);

  this.intervalTimer = setInterval(function(){
    let timeLeft = Math.round((endOfCountdown - Date.now()) / 1000);
    store.change(timeLeft);
    store.notif()
    if(timeLeft === 0){

      clearInterval(store.intervalTimer);
      store.state.timerIsOn = false;

      return ;
    }
     }, 1000);
},

notif() {
   if (store.state.time === 59) {
         var notification = new Notification("Hi there!");
         alert("test")
      }

}
  
}
