app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      }
    },
    template: 
    /*html*/
    `<div class="product-display">
      <review-form @review-submitted="addRevision"></review-form>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    </div>`,
    data() {
      return {
          reviews: []
      }
    },
    methods: {
        addRevision(review) {
          this.reviews.push(review)
        }
    }
  })