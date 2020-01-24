<template>
 
	<div class="temps">
		<input class="input-time" value="00:03">
		<div class="controls">  
			<button id="une-minute-plus"></button>
			<button class="play" id="pause"></button>
			<button class="restart" onClick="document.location.reload(false)"></button>
		</div>
	</div>

</template>

<script>
export default {
	name: 'TTime',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
