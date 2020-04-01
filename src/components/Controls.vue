<template>
	<div class="controls">
		<button class="addMinute" @click="addMinute()">
      <inline-svg :src="require('../assets/addMinute.svg')"></inline-svg>
    </button>
    
    <div class="toggle-wrapper" >
      <button   id="pause" @click="toggle()" >
        <inline-svg v-show="propState.timerIsOn" class="pause" :src="require('../assets/pause.svg')"></inline-svg>
        <inline-svg v-show="!propState.timerIsOn" class="pause" :src="require('../assets/play.svg')"></inline-svg>
      </button>

    </div>
    <button class="restart" @click="reset()">
      <inline-svg :src="require('../assets/reset.svg')"></inline-svg>
    </button>
	</div>
</template>

<script>
import { store } from '../store.js';
import InlineSvg from 'vue-inline-svg';

export default {
	name: 'controls',

  components: {InlineSvg},

  props: ['propState'],

  methods:{
    toggle() {
      store.toggle();
    },
    addMinute() {

      if (this.propState.timerIsOn) {
        var wasPaused = true;
      }

      store.pause() 
      store.addTime(60)

      if (wasPaused) { 
        store.play() 
      }

    },

    reset() {
      store.reset()
    }
  }
}
</script>

<style scoped>




.controls {
   display:flex;
  justify-content:center;
  margin: 3rem;
}

.controls svg {
width: 45px;
height: auto;
}

.controls > * {
  margin: 0 1.2em;
  padding: 0;
}

.controls button {
  border: none;
  cursor: pointer;
  background: none;
  opacity: 0.7;
}

.controls button:hover { 
  opacity: 1;
   }





</style>
