<template>
 
    <div class="preset-times">
      <button data-setter="1min" class="time">01:00</button>
      <button data-setter="5min" class="time">05:00</button>
      <button data-setter="10min" class="time">10:00</button>
      <button data-setter="20min" class="time">20:00</button>
      <button data-setter="30min" class="time">30:00</button>
    </div>

</template>

<script>
export default {
  name: 'presets',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
