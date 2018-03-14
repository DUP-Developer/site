let app = new Vue({
    el: '#app',
    data: {
        project: {}
    },
    methods: {
       
    },
    mounted: function () {
        this.$nextTick(function () {
            var h = window.location.hash.split('')
            h.shift()

            let word = h.join('');

            if (projects[word] == undefined)
                window.location.href = '/index.html'
            else
                this.project = projects[word]
            // code that assumes this.$el is in-document
        })
    }
})