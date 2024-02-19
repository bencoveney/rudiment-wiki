async function loadSound(base64) {
  const binary = window.atob(base64);
  const buffer = new ArrayBuffer(binary.length);
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < buffer.byteLength; i++) {
    bytes[i] = binary.charCodeAt(i) & 0xff;
  }
  const blob = new Blob([buffer], { type: "audio/wav" });
  return await blob.arrayBuffer();
}

let audioContext;
let audioBuffer;
function getAudioContext(buffer) {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  if (!audioBuffer) {
    audioBuffer = audioContext.decodeAudioData(buffer);
  }
  return { audioContext, audioBuffer };
}

async function initSound() {
  const buffer = await loadSound(window.click);

  return {
    async playClick(time) {
      const { audioContext, audioBuffer } = getAudioContext(buffer);
      const source = audioContext.createBufferSource();
      source.buffer = await audioBuffer;
      source.connect(audioContext.destination);
      source.start(time);
    },
  };
}

async function init() {
  const playStop = document.getElementById("metronome_playstop");
  const bpm = document.getElementById("metronome_bpm");
  const click = document.getElementById("metronome_click");
  let playing = false;

  const play = playStop.textContent;
  const stop = "Stop";

  const { playClick } = await initSound();

  playStop.addEventListener("click", () => {
    playClick(0);
    playClick(1);
    playClick(2);
    const targetBpm = bpm.value;
    playing = !playing;
    console.log(playing ? `playing at ${targetBpm} bpm` : "stopping");
    playStop.textContent = playing ? play : stop;
  });
}

window.addEventListener("load", init);
