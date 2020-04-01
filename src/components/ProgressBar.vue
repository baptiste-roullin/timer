<template>
 
 <div class="ProgressBar"> <svg width="100vh" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
    <g transform="translate(60,60)">
      <circle v-bind:r="radius" class="e-c-base"/>
      <g transform="rotate(-90)">
        <circle v-bind:r="radius" class="e-c-progress" v-bind:style="vanishingCircle"/>
        <g id="e-pointer" >
          <circle v-bind:cx="radius" cy="0" r="5" v-bind:style="watchClockRotation" class="e-c-pointer" v-bind:class="propState.timerIsOn ? '' : 'inactive' "/>
        </g>
      </g>
    </g>
    </svg> 
</div>
</template>

<script>
import { store } from '../store.js';


export default {
  name: 'ProgressBar',
  props: ['propState'],
   data () {
    return {
      radius:50
    }
  },
  computed: {
    watchClockRotation: function() {
      let degree = 360 * -store.state.time / (store.state.initialTime);
      return `transform: rotate(${degree}deg)`
    },
    vanishingCircle: function() {
      let length = Math.PI * 2 * this.radius;
      var offset = length * store.state.time / (store.state.initialTime) + length;
      return `strokeDashoffset: ${offset}; strokeDasharray: ${length};`
  }    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.ProgressBar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  
}

.e-c-base {
  fill: none;
  stroke: lightgrey;
  stroke-width: var(--progress-bar-width)
}

.e-c-progress {
  fill: none;
  stroke: var(--main);
  stroke-width: var(--progress-bar-width);
  transition-property: stroke, stroke-dashoffset;
  transition-duration: 0.5s;
}

.e-c-pointer.inactive {
  fill: #96b0ca

}

.e-c-pointer {
  fill: #fff;
  stroke: #213967;
  stroke-width: 1px;

  transition-property: all;
  transition-duration: 0.5s;

}

#e-pointer { transition: transform 0.7s; }

</style>
