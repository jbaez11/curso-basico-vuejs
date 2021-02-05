Vue.component('modal', {
    props: ['title', 'showModal'],
    
    methods: {
      closeModal () {
        this.$emit('close')
      }
    },
    
    template: `
      <div v-show="this.showModal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{ this.title }}</h3>
            <div>
              <slot></slot>
            </div>
            <footer>
              <button v-on:click="closeModal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    
    data(){
      return {
        modalTitle: 'Modal TITLE!',
        showModal: false,
      }
    },
    
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      }
    }
  })