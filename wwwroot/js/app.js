new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data () {
      return {
        IsLoading:false,
        drawer: true,
        menuitems: [
          { title: 'Predict Diabetes', icon: 'mdi-hospital-building',method: () => this.loadPage('/Home/Index/') },
          { title: 'Predict Housing Price', icon: 'mdi-hospital', method: () => this.loadPage('/Home/Index/') },
          { title: 'Predict Horse', icon: 'mdi-book-open',method: () => this.loadPage('/Home/Index/')},
        ],
          items:[],
          

        
      }
    },
    methods: {
      loadPage: function (pageurl){
        window.location.href=pageurl
      },
      
      FormatPrice: function(text)
      {
        console.log('Formatting Price')
        return (parseFloat(text).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")

      },

      
      GetCategoryRate: function (event) { 
        
        axios.post('http',
        //axios.post('http://127.0.0.1:8080/api/predictcategoryrate/',
        {
           
         }).then( function (response) 
         {
           
      
          }.bind(this));
        }
     },
     
    
    created: function()
    {
      console.log('Hello created')
      //this.GetCategories();
    },
    async mounted()
    {
      console.log('Hello Mounted')
      
    },
  })