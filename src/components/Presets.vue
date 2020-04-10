<template>
    <div class="preset-times">
      <button class="" v-for="preset in presetList" @click="onClick(preset)">{{preset/60}} min<span v-if="preset/60 > 1">s</span></button>
    </div>
</template>

<script>
 import { store } from '../store.js';

export default {
  name: 'presets',
  props: ['presetList'],
  methods:{
    onClick(newValue) {
      store.initTime(newValue);
      store.pause()


    }
  }
}
</script>

<style scoped>

.preset-times {
  display: flex;
  justify-content: space-between;
  width: calc(var(--width) - 3rem);
  margin: calc(var(--margin) / 2) auto 0;

}

.preset-times button {
  background: white;  
  border: 1px solid var(--third);
  border-radius: 65px;
  color: var(--main);
  line-height: 12px;
  align-items: center;
  text-align: center; 
  cursor:pointer;
  opacity:0.3;
  margin: 0;
  padding-top: 2px;
  height: 1.8em;
  font-size: calc( 6px + 1vmin);
  font-family: Raleway,Arial,sans-serif;
  transition-property: background, opacity;
  transition-duration: 0.1s;

  
  
}

.preset-times:hover button {
  opacity:1;
}


.preset-times:hover button {
  background: #fcd7c1;  
  opacity:1;
  color: var(--main)
}

</style>
