## LIRI-Bot-App
## _Overview of the App_
In this project, I have made a LIRI Bot running on the Node.js with the JavaScript programming language. This LIRI Bot is like the major voice assistants like Siri to the IPhone, Google Assistant to the Google Pixel, and Bixby Voice to the Samsung phones. When a person ask something, this app recognize the voices and finishes the task. However, these devices does Speech Interpretation and Recognition Interface, as for the LIRI Bot it is a Language Interpretation and Recognition Interface. The LIRI Bot that I have saved, as a GIF file will demonstrate using the command line in PowerShell/Terminal.

## _App Outcomes_
The LIRI Bot will produce search results based on the following commands lines in PowerShell/Terminal:
* node liri.js spotify-this-song
* node liri.js movie-this
* node liri.js concert-this  
* node liri.js do-what-it-says


## This command searches songs from the _Spotify requested API._
https://developer.spotify.com/documentation/web-api/
> *node liri.js spotify-this-song “song/track name”*

* Artist
* Song
* Spotify song preview url
* Album

**Spotify API, Client ID & Client SECRET**
> The Spotify API requires developers to sign up and generate the necessary API credentials (client id and client secret):
1. Step One: Visit https://developer.spotify.com/my-applications/#!/
1. Step Two: Either login to your existing Spotify account or create a new one (a free account is fine).
1. Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register or create a new application inorder to get your API keys to be use it with the Spotify API.
1. Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy the Spotify API key values down somewhere, you’ll need the Spotify API keys to pull data from the Spotify API database when you run the LIRI Bot App.
1. As a security precaution, the Spotify Client ID & SECRET were stored on a local .env file and added to a local .gitignore file to avoid publishing the information.

## This command searches movies from the _OMDB API database._
http://www.omdbapi.com/
>	*node liri.js movie-this “movie title”*

•	Title of the movie
•	Year the movie came out
•	IMDB Rating of the movie
•	Rotten Tomatoes Rating of the movie
•	Country where the movie was produced
•	Language of the movie
•	Plot of the movie
•	Actors/Actress in the movie

## This command searches movies from the _Bands in Town Artist Events API._
https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0
> *node liri.js concert-this “artist/band name”*

•	Artist
•	Name of Venue
•	Venue location
•	Date of the event in MM/DD/YYYY format




## This command searches the song from the *random.txt* file from the _Spotify requested API._
https://developer.spotify.com/documentation/web-api/
>	*node liri.js do-what-it-says*

> Search and display the spotify result for the song “I want it that way”which is stored in the random.txt file.

## Deployed link to the app
https://github.com/yingvang19/LIRI-Bot-App

## Deployed link to the app recorded on GIF file
https://github.com/yingvang19/LIRI-Bot-App/blob/upload-files/LIRI.gif
