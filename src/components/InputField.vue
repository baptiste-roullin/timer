<template>
 
	<div class="temps InputField">
	<div class="minutes-container">		
		<input 
			type="text"
			:name="name" 
			class="input-time" 
			:value="Math.floor(value/60)" 
			@blur="onInput($event.target.value*60)"
		> 
		<span class="minutes unit">min</span>

	</div>

		<div class="secondes-container">		
			<span class="secondes">{{value%60 || '0'}}</span>
			<span class="unit">sec</span>
		</div>

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
			newValue = newValue || '00'; // pour gérer le cas du champ vide
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
	width:auto;
	text-align: center;
	color : var(--main);
	margin: 0 0 4rem;
}

.input-time{
  border:none;
  font-size : 8rem;
  color : var(--main);
  text-align : center;
  width: 13rem;
  background-color: #f8f8f8;
  border-bottom: white 1px solid;
  height: 1em;
  border-radius: 3px;
  box-shadow: inset 0px 1px 2px #698AAB, 0px 0px 0px white;
  font-family: inherit;
  transition: all .2s cubic-bezier(.22,.61,.36,1);
}

.input-time:focus {
    box-shadow: 0px 0px 0px white inset, 0px 3px 3px #698AAB;
}


.input-time:focus {
  outline:none;
}

.unit {
	font-size: 1.7em;
	position: absolute;
	right: 8%;
	bottom: 0%;
}



.minutes-container  {
	position: relative;
}

.secondes-container {
	color: #698AAB;
	margin: 1.5rem auto 0;
	position: relative;
	cursor: default;

}

.secondes {
	text-align: center;
	width: 13rem;
	display: block;
	border-bottom: 2px solid #698AAB;
	margin: auto;
	height: 1.05em;
	font-size:3.5rem;
}




</style>
