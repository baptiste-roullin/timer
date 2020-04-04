<template>
 
	<div class="temps InputField">
	<div class="minutes-container">		
		<input 
			type="text"
			:name="name" 
			class="input-time" 
			:value="Math.floor(value/60)" 
			@keyup="onInput($event)"
			@focus="pause()"
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
		play() {
			store.play()
		},
		pause() {
			store.pause()
		},
		isNumber(event) {
			const regex = RegExp('[0-9]');
			if (regex.test(event.key)) {
				return true;
			}
			else {
				return false
			}
		},
		onInput(event) {
			if (this.isNumber(event)) {
				let newValue = event.target.value*60


				newValue = parseInt(newValue, 10) 

				store.initTime(newValue) 
			}
			else {
				event.preventDefault();

				return;

			}
		}

	
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
  width: 19.6rem;
  border-radius: 0.05em;
}

.input-time:focus {
    box-shadow: 0px 0px 0px white inset, 0px 3px 3px #698AAB;
}


.unit {
	font-size: 1.7em;
	position: absolute;
	right: 17%;
	bottom: 10%;
	color: #698AAB;
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
	display: block;
	margin: auto;
	font-size:3.5rem;
	background-color: #f8f8f8;
	width: 19.6rem;
	border-radius: 0.1em;

}




</style>
