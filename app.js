new Vue({
  el: '#app',

  data(){
    return {
      name:'Bitcoin',
      symbol:'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent:6,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      price: 8400,
      color:'f4f4f4',

      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      showPrices:false,

    }
    
    
  },
  computed: {
    //funciones que siempre devulven un valor
    title(){
      return `${this.name} - ${this.symbol}`;
    }
  },
  watch:{
    //funciones el nombre de la funcion debe corresponder con una propiedad de la data()
    showPrices(newVal, oldVal){
      console.log(newVal, oldVal)
    }
  },
  methods:{
    toggleShowPrices(){
      this.showPrices = !this.showPrices; 

      this.color = this.color.split('').reverse().join('')
    }
}
 
})