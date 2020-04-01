
export const store = {
  state: {
    time: 60.00,
    initialTime:60.00,
    timerIsOn:false
  },
  presets:[60, 300, 600, 1200, 1800],

  toggle() {
    if ( (this.state.timerIsOn === false) && (this.state.time > 0) ) {
      this.state.timerIsOn = true;
      this.timerLoop(this.state.time) ;

      }
    else {
      this.state.timerIsOn = false;
      clearInterval(this.intervalTimer);
    }
  },
  pause()   {
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
    this.state.initialTime = this.state.time;

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
    if(timeLeft === 0){

      clearInterval(store.intervalTimer);
      store.state.timerIsOn = false;

      return ;
    }
     }, 1000);
}
  
}
