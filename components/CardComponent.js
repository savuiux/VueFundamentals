landing.component("card-component", {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: Object,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="card">
        <h2>{{ title }}</h2>
        <img :src="link.image" width="400" height="400"/>
        <br />
        <p>{{ description }}</p>
        <br /><br />
        <a :href="link.url" class="button">Visit {{ title }} website</a>
    </div>`
})