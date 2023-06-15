final.component("game-detail", {
    template:
    /*html*/
    `<table>
        <thead>
            <tr>
                <th class="table-columns"
                    v-for="key in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey === key }">
                    {{ key }}
                    <span class="arrow" :class="sortColumns[key] > 0 ? 'asc' : 'desc'"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="game in filteredTitles">
                <td v-for="key in columns" class="game-data" :class="game[key] == 'Y'? 'yes' : game[key] == 'N' ? 'no' : ''"><span>{{ game[key] }}</span></td>
            </tr>
        </tbody>
    </table>`,
    props: {
        entries: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        },
        filterKey: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            sortKey: ""
        }
    },
    computed: {
        filteredTitles: function() {
            const sortKey = this.sortKey
            const filterKey = this.filterKey && this.filterKey.toLowerCase()
            const order = this.sortColumns[sortKey] || 1

            let entries = this.entries
            if (filterKey) {
                entries = entries.filter(function(row) {
                    return Object.keys(row).some(function(key) {
                        return (
                            String(row[key])
                                .toLowerCase()
                                .indexOf(filterKey) > -1
                        )
                    })
                })
            }

            if (sortKey) {
                entries = entries.slice().sort(function(x,y) {
                    x = x[sortKey]
                    y = y[sortKey]

                    return (x === y ? 0 : x > y ? 1 : -1) * order
                })
            }

            return entries

        },

        sortColumns() {
            const sortedColumns = {}

            this.columns.forEach(function(key) {
                sortedColumns[key] = 1
            })

            return sortedColumns
        }
    },
    methods: {
        capitalize(data) {
            return data.charAt(0).toUpperCase() + data.slice(1)
        },

        sortBy(key) {
            this.sortKey = key
            this.sortColumns[key] = this.sortColumns[key] * -1
        }
    }
})