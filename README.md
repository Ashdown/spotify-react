# Spotify React App

React app showing a list of all recent likes a spotify user makes, as well as a filter by artists sidebar component.

## Instructions

### Set Bearer Token

You will need a valid spotify bearer token to view content.  You can get this from the network request tab of your web browser, and you will need to set that value at the top of `/src/services/useSpotifyTracks`

### Run app Locally

- `npm install`
- `npm start`

## Run Test Suite

- `npm test`

## Notes about Implementation

### Polling every 30 seconds

This is actually quite easy using the react-query library (you can see it on line 10 of `src/services/useSpotifyTracks`).

### Security concerns

Because this uses as bearer token that looks like it expires every hour, there are no major security concerns, however it is a pain to have to keep updating it. (I've stripped out my personal bearer token from the code) 

### Trade offs

I would have preferred to refactor more of the code into hooks with better unit test coverage, and I would have built a responsive solution if I had the time.
Also, the original solution asked for 'recent tracks' the user has played, but I don't see a way to get that using spotifys api.  Using likes instead seems like a good idea, because that allowed me to demonstrate all the other functionality. If I had the time, it would be better to request the user to enter their bearer token into a text input, as there is less risk of them checking it into the code base in that case.
