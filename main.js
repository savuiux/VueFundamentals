const app = Vue.createApp({
	data() {
		return {
			onHoverTitle: "reactive title",
			description: "This is my third app.",
			white: "white",
			text: "League of Legends",
			inputText: "",
			timer: 100,
			visible: true,
			games: [
				{ title: "League of Legends", id: 6329 },
				{ title: "Valorant", id: 6330 },
				{ title: "Sims", id: 6331 }
			]
		}
	},
	mounted() {
		setInterval(() => {
			if (this.timer > 0) {
				this.timer--
			}
		}, 1000)
	},
	methods: {
		checkPalindrome() {
			this.text = this.text.split("").reverse().join("")
		}
	}
}).mount("#app")