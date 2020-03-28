<template>
 
	<div class="temps DigitalClock">
		<input type="text" :name="name" class="input-time" :value="value" @blur="onInput($event.target.value)">
	
	</div>

</template>

<script>
import { store } from '../store.js';

export default {
	name: 'DigitalClock',
		props:['name', 'value'],
		data () {
			return {
				// time:timeProp
			}
		}
	,
	methods:{
		onInput(newValue) {
			this.$emit('input', newValue);
			store.change(newValue);
		},

	
	}
	
}
</script>

<style scoped>
.input-time{
  border:none;
  font-size : 58px;
  color : #3B72FF;
  text-align : center;
  width:100%;
  background-color: transparent;
}


.input-time:focus {
  outline:none;
}



.minutes-set {
  float: left;
  margin-right: 28px;
}

.seconds-set { float: right; }


.tempsControls{
  width:180px;
  position:absolute;
  top:115px;
  left:60px;
}


.display-remain-time {
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 65px;
  color: #3B72FF;
}

</style>
