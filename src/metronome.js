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
  let removers = [];
  return {
    async playClick(time) {
      const { audioContext, audioBuffer } = getAudioContext(buffer);
      const timestamp = audioContext.getOutputTimestamp();
      const offsetTime = timestamp.contextTime + time;
      const source = audioContext.createBufferSource();
      source.buffer = await audioBuffer;
      source.connect(audioContext.destination);
      source.start(offsetTime);
      const remover = () => {
        source.stop();
        source.disconnect();
        const index = removers.indexOf(remover);
        removers.splice(index, 1);
        source.removeEventListener("ended", remover);
      };
      source.addEventListener("ended", remover);
      removers.push(remover);
    },
    stop() {
      for (let i = removers.length - 1; i >= 0; i--) {
        removers[i]();
      }
      removers = [];
    },
  };
}

async function init() {
  const playStop = document.getElementById("metronome_playstop");
  const bpm = document.getElementById("metronome_bpm");
  let playing = false;

  const { playClick, stop } = await initSound();

  playStop.addEventListener("click", () => {
    playing ? stop() : (playClick(0), playClick(1), playClick(2));
    const targetBpm = bpm.value;
    playing = !playing;
    playStop.textContent = !playing ? "Play" : "Stop";
  });
}

window.addEventListener("load", init);
