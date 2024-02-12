function init() {
  const playStop = document.getElementById("metronome_playstop");
  const bpm = document.getElementById("metronome_bpm");
  let playing = false;

  const play = playStop.textContent;
  const stop = "Stop";

  playStop.addEventListener("click", function () {
    const bpm = bpm.value;
    playing = !playing;
    console.log(playing ? `playing at ${bpm} bpm` : "stopping");
    playStop.textContent = playing ? play : stop;
  });
}

window.addEventListener("load", init);
