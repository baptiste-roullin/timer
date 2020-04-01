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
  justify-content: center;
  margin-top: 20px;
}

.preset-times button {
  background: white;  
  border: 1px solid var(--third);
  border-radius: 65px;
  color: var(--main);
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  text-align: center; 
  cursor:pointer;
  opacity:0.3;
  margin: 0 5px;
  padding-top: 2px;
  height: 1.8em;
  font-size: 1rem;
  font-family: Raleway,Arial,sans-serif;
  transition-property: background, opacity;
  transition-duration: 0.1s;

  
  
}

.preset-times:hover button {
  opacity:1;
}


.preset-times:hover button {
  background: var(--third);  
  opacity:1;
  color: black
}

</style>
