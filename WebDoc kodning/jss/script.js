 
 // CREDIT to: https://www.tutorialspoint.com/how-to-use-javascript-to-play-a-video-on-mouse-hover-and-pause-on-mouseout //
 
 // Listening to the video element
 let clip = document.getElementById("vid")

 /* Adding the event listeners on the video to play/pause the video. */
 clip.addEventListener("mouseover", function (e) {
 
    clip.play();
 })

 /* Applying the mouse out event to pause the video */
 clip.addEventListener("mouseout", function (e) {
    clip.pause();
 })

