<template>
 
	<div class="InputField">
	<div class="minutes-container">		

		<!-- value : prop
		le temps est stocké en secondes.
		-->
		<input 
			type="text"
			:name="name" 
			class="input-time" 
			:value="Math.floor(value/60)" 
			@keypress="onInput($event)"
			@keyup.enter="play()"
			@focus="pause()"
		> 

		<!-- <span class="minutes unit">min</span> -->

	</div>

		<div class="secondes-container">		
			<span class="secondes">{{value%60}}</span>
		</div>

	</div>

</template>

<script>
import { store } from '../store.js';

export default {
	name: 'InputField',
		props:['name', 'value'],

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
	margin: 0 0 var(--margin);


}

.input-time{
  border:none;
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
  width: var(--width);
  border-radius: 0.05em;
  font-size: calc( 60px + 4vmin);
  font-weight: bold;

}

.input-time:focus {
	box-shadow: 0px 0px 0px white inset, 0px 3px 3px #698AAB;
}



.secondes-container {
	color: #698AAB;
	margin: 1.5rem auto 0;
	cursor: default;
	margin: calc(var(--margin) / 2) auto 0;


}

.secondes {
	text-align: center;
	display: block;
	margin: auto;
	font-size: calc( 25px + 4vmin);
	background-color: #f8f8f8;
	width: var(--width);
	border-radius: 0.1em;

}



/*UNITÉS*/

.minutes-container, .secondes-container {
	position: relative;

}


.minutes-container:after {
	content:"min";
}

.secondes-container:after {
	content:"sec";

}

.minutes-container:after, .secondes-container:after  {

	font-size: 1.5em;
	position: absolute;
	right: 4%;
	bottom: 10%;
	color: #698AAB;
}

@media screen and (max-width:600px) {
 

	.input-time, .secondes{
		text-align: left;
	}
}

</style>
