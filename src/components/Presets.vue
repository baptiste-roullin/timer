<template>
 <div>
    <div class="preset-times" v-for="preset in presetList">

      <button class="time" @click="onClick(preset)">{{preset}} secondes</button>

    </div>
</div>
</template>

<script>
 import { store } from '../store.js';

export default {
  name: 'presets',
  props: ['presetList'],
  methods:{
    onClick(newValue) {
      store.change(newValue);
      store.toggle();


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

.preset-times button[data-setter] {
  background: white;  
  width:50px; 
  height:22px;  
  border: 1px solid #FFC64C;
  border-radius: 65px;
  color: #3B72FF;
  font-family: Raleway,Arial,sans-serif;
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  text-align: center; 
  cursor:pointer;
  opacity:0.3;
  margin: 0 3px;
  padding-top: 2px;
  
  transition-property: background, opacity;
  transition-duration: 0.1s;
  font-feature-settings: "lnum";
  
  
}

.preset-times:hover button[data-setter] {
  opacity:1;
}


.preset-times:hover button[data-setter]:hover {
  background: #FFC64C;  
  opacity:1;
}

</style>
