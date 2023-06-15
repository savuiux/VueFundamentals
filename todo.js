const toDo = Vue.createApp({
    data() {
        return {
            task: "",
            tasks: [],
            taskId: 1
        }
    },
    methods: {
        addNewTask() {
            this.tasks.push({
                id: this.taskId++,
                title: this.task
            })
            this.task = ""
        }
    }
})