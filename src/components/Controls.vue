<template>
	<div class="controls">
		<button class="addMinute" @click="addMinute()">
			<inline-svg :src="require('../assets/addMinute.svg')"></inline-svg>
		</button>
		
		<div class="toggle-wrapper" >
			<button   id="pause" @click="toggle()" >
				<inline-svg v-show="propState.timerIsOn" class="pause" :src="require('../assets/pause.svg')"></inline-svg>
				<inline-svg v-show="!propState.timerIsOn" class="pause" :src="require('../assets/play.svg')"></inline-svg>
			</button>

		</div>
		<button class="restart" @click="reset()">
			<inline-svg :src="require('../assets/reset.svg')"></inline-svg>
		</button>
	</div>
</template>

<script>
import { store } from '../store.js';
import InlineSvg from 'vue-inline-svg';

export default {
	name: 'controls',

	components: {InlineSvg},

	props: ['propState'],

	methods:{
		toggle() {
			store.toggle();
		},

		addMinute() {
			// Ajouter une minute doit pouvoir se faire même alors que le minuteur tourne.
			// mais faire ça fout le bordel dans l'horloge interne. 
			// Du coup on force la pause, puis SI le minuteur tournait on redémarre.
			if (this.propState.timerIsOn) {
				var wasPlaying = true;
			}

			store.pause() 
			store.addTime(60)

			if (wasPlaying) { 
				store.play() 
			}
		},

		reset() {
			store.reset()
		}
	}
}
</script>

<style scoped>




.controls {
	display:flex;
	margin: 0 auto calc(var(--margin) / 2 );
	justify-content: space-between;
	width: calc(var(--width) - 3vmin);
}

.controls svg {
	width: 4vmin;
	height: auto;
}



.controls button {
	border: none;
	cursor: pointer;
	background: none;
	opacity: 0.7;
}

.controls button:hover { 
	opacity: 1;
	}





</style>
