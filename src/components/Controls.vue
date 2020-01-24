<template>
 

<div class="tempsControls">
	<div class="temps">
		<div class="input-time">{{count}}</div>
	</div>	
	<div class="controls">
		
		<button class="addMinute" v-on:click="addMinute"></button>
		<button class="play" id="pause" v-on:click="startCountdown"></button>
		<button class="restart" onClick="document.location.reload(false)"></button>
	</div>
</div>
</template>

<script>

export default {
	name: 'controls'
	,

	data: function() {
		return {
		count:0
		}
	},

	methods: {
		startCountdown: function() {

			},
		addMinute: function(count) {
			++count;

		}
	}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.addMinute{
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgB7VRbTsJAFD0zhcRPltAd2B8Tg5rgCmAJuIMCC9ANAHUFsAN0BTYRjJ+6A5ZQP0yIYq9n1EpDC1MxxJhwkia3c8/cx9wHsIMFykY48MVzgOg+UNPk7NCXmtYY8LI76am1NjQsKGuMaKyZ/FfbMnI0bmi1ggJY6eCkI42jtpgoK4yxbmRzTvlJgDN+l/iNg1WYdFXzrqeGRfkrHdx21RXf10QaieDayNgAJRvBidF6A6bYENYuWkaVXcW8PYp1Xm6YesQxpuyyMI9vzSADjQYNn2MR4cBRCCmG+DfgoLlFuT9uU4NSavCs3OUDE90eW/OZayBZETVfKjPASwo5jzFMc2efU+3mFTqTQclB/1Uh4IrwWLwBV0NzruFzXdSqLQkMh9N88XGZmbxQNhml9WszYNu5ZcFp2FcRjZsu2R/3VMvojjsyWuaT8DD+muw8fbYGMaIwUFHK4eO3LIgyBuLFEObqsWVs3cEOf4931Il3uc6xJR4AAAAASUVORK5CYII=') ;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.addMinute:hover, .restart:hover, #pause:hover { opacity: 0.7; }

.restart{
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHQSURBVHgB7VXdUcJAEP7ugj7TgViBPDqAM6EDOgA6iFgAoQCZWEG0A0rIjMj4CBWYEnjWSdbd5IIxiUkefOSbyeXndve72/t2A5zRANXGyHao+6kx4ceevJPCniLs3z0VNvmeCAYLWloKh9dHtcm+3TpkWxaWINiV3oQgIszriJQJ1LM0PvgxfFur64yQJ11jdyQg4PvBvN/wnM33bsoDd7dWqyqCTtXHfHBFeOoQ3MBTx7yNLKqjMePgiS37oIqktAO+JEVOsrIY852nnlGDgUMzpeEnwWKMt54K8vO6YN8zwY9i3BRcIDayy2RBis+rAF3ppRCSxnS4IP/ugSZogKRQFsV+tiiumYDQ53EmV4zyqoqQ8zEigJHzD7kMIrORQ+NYpzrP4zLCBu0gCjvVyi8CQfFw/gulFLHcZm3yXoEbGaTKawlYt35M8IuHVQeRuSk8SAupJWCGgMful24+3FMQVpz4SOsoto3yDiJk1egM72mKBohNVvXSl0rxqpxGC3LJyFP6TBzjpbgySaHZpWMCrbZr5bYiKJJAmp2kjtJmx05XSCXZrQteSyBIepTFfeavds2kktI6ibf64QjRBdCPdFLhgpDTFrT54ZzRiG8GMroDykWlRAAAAABJRU5ErkJggg==');
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
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

.controls {
   display:flex;
  justify-content:center;
  margin-top: 10px;
}

.display-remain-time {
  font-family: 'Roboto';
  font-weight: 100;
  font-size: 65px;
  color: #3B72FF;
}

#pause {
  outline: none;
  background: transparent;
  border: none;
  position: relative;
}

.play::before {
  display: block;
  content: "";

  background-image:  url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF5SURBVHgB3VXBUcJQFNyXqGdKCB3oTfCCHVgCVGCgAaEASawg2oEdyME43rCDpATOMuG7D5IZh0ngJ+SiO5Phk2Tevt23/wf465Cym/2JSfRBtsHtZygpToCDclaPP57rILmZmGDgmw7aJNiDv3awpKohGuAgAS3qGiDl0qOqiGqia994aItA/f+YS5fLMa8VryFte6ujxsYixHMJqeYKBi+oqcaKQKFq4kCGtGyU26Zqlr2J8VshKEDLnjeMb66mwwIB1SRVamoTKErUbCPN2Ty0QlBA1VxwNmLwpP85m6mqaY2ggBEaVoGTCOj74JuD5nI7aCqYnWvafuEMDaBHBwtHLHiHXeWFyTCOQ/naf7c2QW9s7teCKYvr+aSbbxY/Slj1vjWBxtB1EdHtAfKuswyjY6etFYF27bBrFrfq2pqg75tLcREUXTMqr4zlaBHKCpY4SCCakF0AU2FhDnGBmjgaU91EGr33BsUVpQp0++snU7tuWvj/4AeJPZSvHh0HlQAAAABJRU5ErkJggg==');
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.pause::after {
  display: block;
  content: "";

  background-image:  url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB7Y+7DYAwDAVjxCBmDdgqg7AVc+BNjFMgIWRh8yko3klp3im6pBQQQN44Vl1N8GmWZaYh4490xa+yM3PWh4EdexG189SHgS9AAAEEEPhDoL+SU1V94xvuD+yWOLNkPbjFBvV6GtBZ7IWXAAAAAElFTkSuQmCC');
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;


}


</style>
