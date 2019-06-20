require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");



//spotify
var getSpotify = function(song){
  var spotify = new Spotify(keys.spotify);
  if (typeof song === typeof undefined) {
    song = "The Sign";
}
  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } else{
  
    var song = data.tracks.items;
    console.log("This is the artist: " ,song[0].album.artists[0].name );
    console.log("The song's name: " , song[0].name); 
    console.log("Preview link of the song: " , song[0].preview_url); 
    console.log("Album: " , song[0].album.name);
    console.log("------------------------------------------");
   
    }
  
  });
  

}

 //switch case
 var choose = function(switchData, getData){

  switch (switchData) {
      case 'spotify-this-song':
          getSpotify(getData);
          break;
  
      case 'movie-this':
          getMovie(getData);
          break;
      case 'concert-this':
        
          getBand(getData);
          break;

      case 'do-what-it-says':
          getText();
          break;
      
      default:
          
          console.log("LIRI does not know this stuff");
          break;
  }
}


//OMBD movie
var getMovie = function(movie){

  if (typeof movie === typeof undefined) {
    movie = "Mr. Nobody";
  }
  request('http://www.omdbapi.com/?t=' +movie+'&apikey=trilogy', function (error, response, body) {
; 

if (!error && response.statusCode === 200) {
     var jsonData = JSON.parse(body);
    //  console.log(jsonData);   
   
    
     console.log('Title:', jsonData.Title);
     console.log('Year:', jsonData.Year);
     console.log('IMDB Rating:', jsonData.imdbRating);
     console.log('Rotten Tomatoes Rating:', jsonData.Ratings[1]);
     console.log('Country Produced:', jsonData.Country);
     console.log('Language:', jsonData.Language);
     console.log('Plot:', jsonData.Plot);
     console.log('Actors/Actress:', jsonData.Actors);
     console.log('----------------------------------');

} else{

  console.log('error:', error); // Print the error if one occurred

}

  });
  
}

//bandsintown
var getBand= function(artistName) {

  if (typeof artistName === typeof undefined) {
    artistName = "MC Hammer";
  }
  axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp")
  .then(function(response) {
     
          // console.log(response);
          console.log("----------------");
          console.log("Artist: ", artistName);

          console.log("Name of Venue: "+ response.data[0].venue.name);
          console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
          console.log("Date of the Event (MM/DD/YYYY): " + moment(response.data[0].datetime).format("L"));
          console.log("-----------------------------------------");
      
  });
}

//spotify the text file
function getText() {
 
  fs.readFile('random.txt', "utf8", function(error, data){
 
     if (error) {
         return display(error);
       }
 
   
     var dataArg = data.split(",");
     
     if (dataArg[0] === "spotify-this-song") {
         
       var song = dataArg[1].trim().slice(1, -1);
       getSpotify(song);
     } 
    
     });
 
 };



var nodeArg = function(argOne, argTwo){
choose(argOne, argTwo);
};

nodeArg(process.argv[2], process.argv[3]);