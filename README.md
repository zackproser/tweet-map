# [Configurable Tweet Map](http://www.realtimehungermap.com)

## Overview 
A configurable application that draws tweets on any topic a Google map in real time. Leverages the [markercluster](https://github.com/googlemaps/js-marker-clusterer) library for grouping markers together.

![Tweet Map Example](doc/img/map-splash.png)

A demo of this application, configured to draw tweets related to hunger and meal times, is running [here](http://www.realtimehungermap.com). 

The purpose of this project is to make it very simple and fast to deploy a realtime tweet visualization on any subject without doing any coding.

## Application at a Glance

### Easy to configure
A single config.json in the root of the project allows you to specify: 

* Your Twitter oauth access credentials
* The Twitter tracking terms you want to listen for 
* The background color of the app's body 
* Your Google maps API key for drawing and geocoding
* The app's admin contact email 
* The content of the about page 

### Getting Started

* $ git clone https://github.com/zackproser/tweet-map.git
* $ npm i 
* edit config.json 
* obtain your google maps API key from [here](https://console.developers.google.com/apis/credentials)
* create a Twitter app and obtain your twitter oAuth credentials from [here](https://apps.twitter.com/)
* $ node app.js 

### Example Configuration

```javascript
{
	"twitter": {
		"oauth": {
			"consumer_key": "f4iesdcjhsdkcRG87k8j",
			"consumer_secret": "FzTKsdc9o82389whcdwvm9kekBavFjhkDsEYbTGH",
			"access_token": "2476678908-RZxnfhEEce9k6ihyasccadsqeLuS4fgwqr9",
			"access_token_secret": "tTW6SN9fzuPw8wHiKlB3I51vVFUK6jqcX8k8FLOYwl2HJ"
		},
		"tracking_terms": ["hungry", "lunch", "food", "eat", "breakfast", "dinner", "meal"]
	},
	"google": {
		"mapsApiKey": "ZPzaSyDi8vcY_V3djywrmcVzzEtkaTsdcjkh47Pk" 
	}, 
	"map": {
		"body_class": "", 
		"start_lat": -34.397, 
		"start_long": 150.644, 
		"start_zoom": 12
	},
	"port": 3000, 
	"app_name": "Realtime Hunger Map",
	"app_title": "Realtime Hunger Map", 
	"app_background_color": "#000",
	"contact_email": "zackproser@gmail.com", 
	"about_text": "This is a realtime map of people tweeting about food, mealtime, or being hungry. It is powered by Twitter and Google maps and was created by Zack Proser."
}
```

### Tech Stack 
This application was built using [express](http://expressjs.com/) and  [socket.io](http://socket.io/)
