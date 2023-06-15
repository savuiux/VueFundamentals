const app = Vue.createApp({
	data() {
		return {
			onHoverTitle: "reactive title",
			description: "This is my third app.",
			white: "white",
			text: "League of Legends",
			inputText: "",
			tutorial_review: "",
			startString: "Hello world",
			timer: 5,
			initial: 0,
			visible: true,
			fullName: "Makima San",
			selected: 3,
			recommended: [],
			rating: [
				{ title: "Best", value: 5 },
				{ title: "Good", value: 4 },
				{ title: "Okay", value: 3 },
				{ title: "Okay", value: 2 },
				{ title: "Bad", value: 1 }
			],
			games: [
				{ title: "League of Legends", id: 6329 },
				{ title: "Valorant", id: 6330 },
				{ title: "Sims", id: 6331 }
			],
			frameworks: [
				{ content: "Vue JS" },
				{ content: "React" },
				{ content: "Angular" }
			],
			items: ["Kare-kare", "Adobong Atay"],
			musics: {
				title: "Nobody Gets Me",
				author: "SZA"
			},
			babies: {
				name: "Ace",
				role: "Dad"
			}
		}
	},
	mounted() {
		setInterval(() => {
			if (this.timer > 0) {
				this.timer--
			} else {
				this.initial = 500
			}
		}, 1000)
	},
	methods: {
		checkPalindrome() {
			this.text = this.text.split("").reverse().join("")
		},
		addToStart() {
			this.startString += " " + this.text
		}
	}
}).mount("#app")