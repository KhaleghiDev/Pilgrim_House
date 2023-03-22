const app = Vue.createApp({
    
    data() {
      return {
        title: sample.title,
        address:sample.address,
        body:sample.about,
        amenities:sample.amenities,
        prices:sample.prices,
        headerImage:{
          'background-image':"url('asset/images/header.jpeg')"
        }
        
      }
    }
  })
  app.mount('#app')
