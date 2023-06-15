const menus = [
	{
		title: "Home",
		component: {
			template: /*html*/`<div>A Home Page</div>`
		}
	},
	{
		title: "About",
		component: {
			template: /*html*/`<div>An About Page</div>`
		}
	},
	{
		title: "Contact",
		component: {
			template: /*html*/`<div>A Contact Page</div>`
		}
	}
]
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
			currentTab: "Home",
			tabs: ["Home", "About", "Contact"],
			menus,
			currentMenu: menus[0],
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
			headers: [
				{ id: 5425, title: "The first header", headerFontSize: 14 },
				{ id: 5426, title: "The second header", headerFontSize: 14 },
				{ id: 5427, title: "The third header", headerFontSize: 14 }
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
	computed: {
		currentTabComponent() {
			return "tab-" + this.currentTab.toLowerCase()
		},
		currentMenuComponent() {
			return "menu-" + this.currentMenu.title.toLowerCase()
		}
	},
	methods: {
		checkPalindrome() {
			this.text = this.text.split("").reverse().join("")
		},
		addToStart() {
			this.startString += " " + this.text
		},
		increaseTextSize(index) {
			this.headers[index].headerFontSize += 10;
		}
	}
})

app.component("first-component", {
	data() {
		return {
			incrementMe: 0
		}
	},
	template:
	/*html*/
	`<button class="button white" @click="incrementMe++">Clicked {{ incrementMe }} times</button>`
})

app.component("body-component", {
	props: ['title'],
	template:
	/*html*/
	`<h2>{{ title }}</h2>`
})

app.component("header-component", {
	props: ['title'],
	template:
	/*html*/
	`<div class="header-component">
		<h2>{{ title }}</h2>
		<button class="button" @click="$.emit('increase-text-size')">Increase text size</button>
	</div>`
})

app.component("slot-component", {
	template:
	/*html*/
	`<div>
		<p>This is my component.</p>
		<slot></slot>
	</div>`
})

app.component("tab-home", {
	template:
	/*html*/
	`<div class="navigation">Home Information</div>`
})

app.component("tab-about", {
	template:
	/*html*/
	`<div class="navigation">About Information</div>`
})

app.component("tab-contact", {
	template:
	/*html*/
	`<div class="navigation">Contact Information</div>`
})

app.component("menu-home", {
	template:
	/*html*/
	`<div class="navigation">Home Page</div>`
})

app.component("menu-about", {
	template:
	/*html*/
	`<div class="navigation">About Page</div>`
})

app.component("menu-contact", {
	template:
	/*html*/
	`<div class="navigation">Contact Page</div>`
}).mount("#app")