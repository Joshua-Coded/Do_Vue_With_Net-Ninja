const app = Vue.createApp({
    data(){
        return {
            showBook: true,
            title: "the finale",
            author: "Brandon sanderson",
            age: 80,
            x: 0,
            y: 0,
        }
    },

    methods: {
            toggleShowBooK(){
                this.showBook = !this.showBook
            },

            handleEvent(e, data){
                    console.log(e)
                    if(data){
                        console.log(data)
                    }
            },
            handleMouseMove(e){
                this.x = e.offsetX
                this.y = e.offsetY
            }
    }
});


app.mount("#app")