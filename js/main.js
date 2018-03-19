//step one, creating a vue model, syntax is same as writing seaf in js
const vm = new Vue({
  el : "#app",

  data : {
    welcomeMessage : "Welcome to your first Vue app",

    hasVue : false,

    vuemessage : "You can haz vue!",

    targetUrl : "http:vuejs.org",

    anchorOff : true,

    moviedata : [
      { name: "Star Wars the Force Awakens", thumb : "forceawakens.jpg", vidsource : "forceawakens.mp4", description: "Yet another star wars movie"},
      { name: "The Avengers", thumb : "avengers.jpg", vidsource : "avengers.mp4", description: "Something about superheroes... wah wah..."},
      { name: "Stranger Things", thumb : "strangerthings.jpg", vidsource : "strangerthings.jpg", description : "The best show. " }
    ],

    moviename : "movie name goes here",
    moviedescription : "movie description goes here",
    moviesource : "null"
  },

//"this" method is different in vue, points to vue itself
  methods : {
    logMovie(e){
      e.preventDefault();

      console.log(e.currentTarget);

      //find the href (name of video) and use it to filter the collection
      //stripping filename out, removing everything else
      datakey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/') + 1);

      //filter the collection and us the video name as a ref
      currentData = this.moviedata.filter(video => video.vidsource === datakey);

      this.moviename = currentData[0].name;
      this.moviedescription = currentData[0].description;
      this.moviesource = datakey;
    }
  }
});
