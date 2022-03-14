app.component('review-form', {
    template:
    /*html*/
    `
    <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ titulo }}</h1>
        </div>
      </div>
      
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Crea tu avatar</h3>
      <label for="nombre">Nombre:</label>
      <input id="nombre" v-model="nombre">
  
      <label for="potencia">Potencia:</label>      
      <input id="potencia" type="number" min=0 v-model="potencia">
  
      <label for="raza">Raza:</label>
      <select id="raza" v-model.number="raza">
      <option v-for="(variant, index) in variants" 
      :key="variant.id" 
      @click="updateVariant(index)" 
      :style="{ backgroundColor: variant.color }"> {{variants[index].raza}} </option>
      </select>  
  
      <input class="button" type="submit" value="Añadir">  
  
    </form>`,
    data() {
      return {
        nombre: '',
        potencia: '',
        raza: null,
        titulo: 'Competencia VUE',
        selectedVariant: 0,
        variants: [
          { id: 1, raza:'alien', image: './assets/images/aliens.jpg' },
          { id: 2, raza:'humano', image: './assets/images/humanos.webp' },
          { id: 3, raza:'predator', image: './assets/images/predator.jpg'},
        ],
      }
    },
    methods: {
      onSubmit() {
        if (this.nombre === '' || this.potencia === '' || this.raza === null) {
          alert('Algún campo está incompleto.')
          return
        }
  
        let productReview = {
          nombre: this.nombre,
          potencia: this.potencia,
          raza: this.raza
  
        }
        this.$emit('review-submitted', productReview)
  
        this.nombre = ''
        this.potencia = ''
        this.raza = null
      },
      updateVariant(index) {
        this.selectedVariant = index
      }
    },
    computed: {
      image() {
          return this.variants[this.selectedVariant].image
      }
    }
  })