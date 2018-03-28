particlesJS("particles-js", {
  	"particles":{
		"number": {
			"value": 400
		}, 
		"color": {
			"value": "#fff"
		}, 
		"shape": {
			"type": "circle"
		}, 
		"opacity": {
			"value": 0.5, 
			"random": true, 
			"anim": {
				"enable": true, 
				"speed": 3
			}
		}, 
			"size": {
				"value": 5
		}, 
			"move": {
			"enable": true,
			"speed": 2, 
			"direction": "right" 
		} 
	}, 

	"interactivity": {
		"events": {
			"onhover": {
				"enable": true, 
				"mode": "repulse"
			},
			"onclick": {
				"enable": true, 
				"mode": "push"
			}
		},
		"modes": {
			"repulse": {
				"distance": 90, 
				"duration": 0.4
			}
		}
	}
});
