<template>
 
 <div class="ProgressBar" v-bind:class=" propState.time === 0 ?'finished' : '' " > <svg width="100vmin" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
    <g transform="translate(60,60)">
      <circle v-bind:r="radius" class="e-c-base"/>
      <g transform="rotate(-90)">
        <circle v-bind:r="radius" class="e-c-progress" v-bind:style="vanishingCircle"/>
        <g id="e-pointer" >
          <circle v-bind:cx="radius" cy="0" r="3" v-bind:style="watchClockRotation" class="e-c-pointer" v-bind:class="propState.timerIsOn ? '' : 'inactive' "/>
        </g>
      </g>
    </g>
    </svg> 
</div>
</template>

<script>


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
      let degree = 360 * -this.propState.time / (this.propState.initialTime);
      return `transform: rotate(${degree}deg)`
    },
    vanishingCircle: function() {
      let length = Math.PI * 2 * this.radius;
      var offset = length * this.propState.time / (this.propState.initialTime) + length;
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
  stroke: #dfe7ef;
  stroke-width: var(--progress-bar-width)
}

.e-c-progress {
  fill: none;
  stroke: var(--main);
  stroke-width: var(--progress-bar-width);
  transition-property: all;
  transition-duration: 0.5s;
}

.e-c-pointer.inactive {
  fill: #96b0ca;
  stroke:none;

}

.e-c-pointer {
  fill:var(--background);
  stroke:var(--third);
  stroke-width: 1px;
  transition-property: all;
  transition-duration: 0.5s;

}

#e-pointer { transition: transform 0.7s; }

.finished .e-c-base {
stroke:var(--third);
}

.finished .e-c-pointer {
stroke: none;
}

</style>
