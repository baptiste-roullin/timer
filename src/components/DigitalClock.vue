<template>
 
	<div class="temps">
		<input type="text" class="input-time" v-model="time" @blur="submitTime(time)">
	
	</div>

</template>

<script>
import { store } from '../store.js';

export default {
	name: 'DigitalClock',
		props:['timeProp'],
		data () {
			return {
				time:timeProp
			}
		}
	,
	methods:{
		submitTime(time) {
			store.change(time);
		}
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
