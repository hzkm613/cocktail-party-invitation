document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope-wrapper");
  const invitationImage = document.querySelector(".invitation-image");
  const music = document.getElementById("background-music");
  const body = document.body;

  // Define the start and end times of the segment to be played
  const startTime = 20.5;
  const endTime = 23;

  let isEnvelopeOpen = false;
  let hasImageGrown = false;

  envelope.addEventListener("click", () => {
    isEnvelopeOpen = !isEnvelopeOpen;
    envelope.classList.toggle("flap", isEnvelopeOpen);

    if (isEnvelopeOpen) {
      // Play the music segment when the envelope opens
      music.currentTime = startTime;
      music.play();
      if (!hasImageGrown) {
        hasImageGrown = true;
        // Use setTimeout to delay the growth animation by 1.5 seconds
        setTimeout(() => {
          // Add the image to the body and apply the growth animation
          const grownImage = invitationImage.cloneNode(true);
          grownImage.classList.add("grow");
          body.appendChild(grownImage);
        }, 1550); // Delay of 1.5 seconds
      }
    } else {
      // Pause the music when the envelope closes
      music.pause();
      music.currentTime = 0; // Reset music to the beginning
    }
  });

  music.addEventListener("timeupdate", () => {
    // Check if the current playback time is past the end time
    if (music.currentTime >= endTime) {
      music.pause();
      music.currentTime = startTime; // Reset to start time
    }
  });
});
