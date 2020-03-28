
export const store = {
  state: {
    time: 5.00,

    timerIsOn:false
  },
  presets:["1", "5", "10", "20", "30"],

  toggle() {
    if (this.state.timerIsOn === false) {
      this.state.timerIsOn = true;
      this.timerLoop(this.state.time) ;

      }
    else {
      this.state.timerIsOn = false;
      window.console.log(this)
      clearInterval(this.intervalTimer);
    }
  },

  reset() {
   
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
          window.console.log(timeLeft)

      clearInterval(store.intervalTimer);
      store.state.timerIsOn = false;

      return ;
    }
     }, 1000);
}
  
}
