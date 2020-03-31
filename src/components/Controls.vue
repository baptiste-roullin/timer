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
	data: function() {
		return {
		}
	},

  methods:{
    toggle() {
      store.toggle();
    },
    addMinute() {
      store.addMinute()
      store.toggle()
      store.initTime(store.state.time);

    },
    reset() {
      store.reset()
    }
  }
}
</script>

<style scoped>

.input-time{
  border:none;
  font-size : 58px;
  color : var(--main);
  text-align : center;
  width:100%;
  background-color: transparent;
  text-align: center;
}


.input-time:focus {
  outline:none;
}

.controls {
   display:flex;
  justify-content:center;
  margin: 10px auto 20px;
}

.controls > * {
  margin: 0 .5em;
}

.controls button {

  border: none;
  cursor: pointer;
}

.controls button { 
  opacity: 0.7; }





</style>
