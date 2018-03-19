//step one, creating a vue model, syntax is same as writing seaf in js
const vm = new Vue({
  el : "#app",

  data : {
    welcomeMessage : "Welcome to your first Vue app",

    hasVue : false,

    vuemessage : "You can haz vue!",

    targetUrl : "http:vuejs.org",

    anchorOff : true,

    deliciousFruit : [
      { name: "apples", flavour: "tangy!"},
      { name: "peaches", flavour: "sweet"},
      { name: "grapes", flavour: "squishy" }
    ]
  },

//"this" method is different in vue, points to vue itself
  methods : {
    logFruit(e){
      console.log(e.currentTarget);
    }
  }
});
