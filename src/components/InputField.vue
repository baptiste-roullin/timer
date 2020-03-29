<template>
 
	<div class="temps InputField">
		<input 
			type="text"
			:name="name" 
			class="input-time" 
			:value="Math.floor(value/60)" 
			@blur="onInput($event.target.value*60)"
> 
		<span class="minutes unit">min</span>

		<div class="secondes-container">		
			<span class="secondes">{{value%60 || '00'}}</span>
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
	margin: 0 0 3rem ;
	position: relative;

}
.input-time{
  border:none;
  font-size : 5em;
  color : var(--main);
  text-align : center;
  width: 3ch;
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

.InputField .minutes {
    position: absolute;
    bottom: 0;
	right: 23rem;
    
}

.input-time:focus {
  outline:none;
}
.secondes-container {
	display: inline-block;
	color: #698AAB;
	position: absolute;
	right: 12rem;
	bottom: -8px;


}

.secondes {
	font-size:3em;
}

.unit {
font-size: 1.7em;
}

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
