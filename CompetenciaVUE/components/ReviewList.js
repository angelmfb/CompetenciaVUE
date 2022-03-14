app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Tu personaje:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.nombre }} ha escogido ser {{ review.raza }}
          <br/>
          Su potencia: {{ review.potencia }} naves insertadas
        </li>
      </ul>
    </div>
  `
  })