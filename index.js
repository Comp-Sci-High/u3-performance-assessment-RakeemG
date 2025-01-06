// Good luck!
const express = require('express');
const app = express()

const tracks =[
    {
      "track ID": "1",
      "track name": "Shape of You",
      "artist name": "Ed Sheeran",
      "album name": "Divide",
      "genre": "Pop",
      "duration in seconds": 233,
      "preview URL": "https://youtu.be/JGwWNGJdvx8?si=V4uLxp_tEOHXD69w"
    },
    {
      "track ID": "2",
      "track name": "Blinding Lights",
      "artist name": "The Weeknd",
      "album name": "After Hours",
      "genre": "Synthwave",
      "duration in seconds": 200,
      "preview URL": "https://youtu.be/4NRXx6U8ABQ?si=I_RxzSKboOYaAeu7"
    },
    {
      "track ID": "3",
      "track name": "Levitating",
      "artist name": "Dua Lipa",
      "album name": "Future Nostalgia",
      "genre": "Disco",
      "duration in seconds": 203,
      "preview URL": "https://youtu.be/TUVcZfQe-Kw?si=6n8CkZUD46iZvaNH"
    },
    {
      "track ID": "4",
      "track name": "Bad Guy",
      "artist name": "Billie Eilish",
      "album name": "When We All Fall Asleep, Where Do We Go?",
      "genre": "Electropop",
      "duration in seconds": 194,
      "preview URL": "https://youtu.be/DyDfgMOUjCI?si=kt0Jm8j3sTRHlTpD"
    },
    {
      "track ID": "5",
      "track name": "Watermelon Sugar",
      "artist name": "Harry Styles",
      "album name": "Fine Line",
      "genre": "Pop Rock",
      "duration in seconds": 174,
      "preview URL": "https://youtu.be/E07s5ZYygMg?si=D3x-EU-UlDrhf9yX"
    },
    {
      "track ID": "6",
      "track name": "Circles",
      "artist name": "Post Malone",
      "album name": "Hollywood's Bleeding",
      "genre": "Pop",
      "duration in seconds": 215,
      "preview URL": "https://youtu.be/wXhTHyIgQ_U?si=rY-KcpNhK9m1P8wK"
    },
    {
      "track ID": "7",
      "track name": "Don't Start Now",
      "artist name": "Dua Lipa",
      "album name": "Future Nostalgia",
      "genre": "Disco",
      "duration in seconds": 183,
      "preview URL": "https://youtu.be/oygrmJFKYZY?si=5DBDNICc_VLJEdri"
    },
    {
      "track ID": "8",
      "track name": "Someone You Loved",
      "artist name": "Lewis Capaldi",
      "album name": "Divinely Uninspired to a Hellish Extent",
      "genre": "Pop",
      "duration in seconds": 182,
      "preview URL": "https://youtu.be/zABLecsR5UE?si=hJiyoDlXmMWCcO9n"
    },
    {
      "track ID": "9",
      "track name": "Sunflower",
      "artist name": "Post Malone, Swae Lee",
      "album name": "Spider-Man: Into the Spider-Verse",
      "genre": "Hip Hop",
      "duration in seconds": 158,
      "preview URL": "https://youtu.be/ApXoWvfEYVU?si=odli4vcYNJc7yHQ7"
    },
    {
      "track ID": "10",
      "track name": "Old Town Road",
      "artist name": "Lil Nas X",
      "album name": "7 EP",
      "genre": "Country Rap",
      "duration in seconds": 157,
      "preview URL": "https://youtu.be/r7qovpFAGrQ?si=-XYr0YjrgJZBfdls"
    }
  ]
  
  app.get("/tracks", (req, res)=>{
    res.json(tracks)
    })
  

app.listen(3000, () => {
    console.log("Server running")
})

app.use((req, res, next)=>{
    res.status(404).send("404 NOT FOUND")
})