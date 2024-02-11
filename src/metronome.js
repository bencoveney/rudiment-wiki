function init() {
  const playStopInput = document.getElementById("metronome_playstop");
  const bpmInput = document.getElementById("metronome_bpm");
  let isPlaying = false;

  const playMessage = playStopInput.textContent;
  const stopMessage = "Stop";

  playStopInput.addEventListener("click", function () {
    if (isPlaying) {
      console.log("stopping");
      isPlaying = !isPlaying;
      playStopInput.textContent = playMessage;
      return;
    }

    const bpm = bpmInput.value;
    console.log(`playing at ${bpm} bpm`);
    isPlaying = !isPlaying;
    playStopInput.textContent = stopMessage;
  });
}

window.addEventListener("load", init);
