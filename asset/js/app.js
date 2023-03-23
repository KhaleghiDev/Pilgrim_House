const app = Vue.createApp({

  data() {
    return {
      droupdone: true,
      title: sample.title,
      address: sample.address,
      body: sample.about,
      amenities: sample.amenities,
      prices: sample.prices,
      modalShow: false,
      headerImage: {
        'background-image': "url('asset/images/header.jpeg')"
      }

    }
  },
  methods: {
    escCloseModal: function (evt) {
      if (evt.keyCode === 27 && this.modalShow) {
        this.modalShow = false
      }
    }
  },
  created : function () {
    document.addEventListener('keyup', this.escCloseModal)
  },
  destroyed() {
    document.removeEventListener('keyup', this.escCloseModal)

  },
  watch: {
    modalShow: function () {
      var className = 'modal-open';
      if (this.modalShow) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    }
  }
})
app.mount('#app')
