toDo.component("todo-item", {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `<li>
        <h4>{{ title }}</h4>
        <button @click="$emit('remove')">Remove Task</button>
    </li>`
})