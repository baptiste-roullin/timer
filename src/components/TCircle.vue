<template>
 
 <div class="circle"> <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(110,110)">
      <circle r="95" class="e-c-base"/>
      <g transform="rotate(-90)">
        <circle r="95" class="e-c-progress"/>
        <g id="e-pointer">
          <circle cx="95" cy="0" r="14" class="e-c-pointer"/>
        </g>
      </g>
    </g>
    </svg> 
</div>
</template>

<script>

//import { store } from '../store.js';

export default {
  name: 'TCircle',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.e-c-base {
  fill: none;
  stroke: #f1f1f1;
  stroke-width: 30px
}

.e-c-progress {
  fill: none;
  stroke: #3B72FF;
  stroke-width: 30px;
  transition-property: stroke, stroke-dashoffset;
  transition-duration: 0.7s;
  
}

.e-c-pointer {
  fill: #FFF;
  stroke: #3B72FF;
  stroke-width: 2px;
  transition-property: stroke;
  transition-duration: 0.7s;
}

#e-pointer { transition: transform 0.7s; }

</style>
