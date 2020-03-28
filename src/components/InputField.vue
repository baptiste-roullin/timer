<template>
 
	<div class="temps InputField">
		<input 
			type="text"
			:name="name" 
			class="input-time" 
			:value="value" 
			@blur="onInput($event.target.value)"
> 
	</div>

</template>

<script>
import { store } from '../store.js';

export default {
	name: 'InputField',
		props:['name', 'value'],
		data () {
			return {
			}
		}
	,
	methods:{
		onInput(newValue) {
			newValue = newValue || 0; // pour gérer le cas du champ vide
			newValue = parseInt(newValue, 10) // <input> est de type 'text' pour l'instant
			this.$emit('input', newValue);
			store.change(newValue);
			store.state.initialTime = newValue;
		},

	
	}
	
}
</script>

<style scoped>

.InputField {
	width:100%;

}
.input-time{
  border:none;
  font-size : 58px;
  color : var(--main);;
  text-align : center;
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
