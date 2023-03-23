const app = Vue.createApp({
    data() {
        return {
        name:"ali",
        lastname:"mohamadi",
        image:"https://randomuser.me/api/portraits/men/39.jpg",
          
        }
    },
    methods: {
       async getUser(){
            const res =await fetch('https://randomuser.me/api')
            const {results}=await res.json();
            console.log(results);
                this.name=results[0].name.first,
                this.lastname=results[0].name.last,
                this.image= results[0].picture.large
        }
      }
})
app.mount('#app')