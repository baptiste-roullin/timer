
export const store = {
  state: {
    time: 40.00,
    initialTime:40.00,
    timerIsOn:false
  },
  presets:[1, 5, 10, 20, 30],

  toggle() {
    if (this.state.timerIsOn === false) {
      this.state.timerIsOn = true;
      this.timerLoop(this.state.time) ;

      }
    else {
      this.state.timerIsOn = false;
      clearInterval(this.intervalTimer);
    }
  },

  reset() {
    this.change(this.state.initialTime)
    this.toggle();

  }, 
  addMinute() {
    this.state.time = this.state.time + 60;


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
    if(timeLeft <= 0){

      clearInterval(store.intervalTimer);
      store.state.timerIsOn = false;

      return ;
    }
     }, 1000);
}
  
}
