// élements lié à l'audio
const audios = {
  bgm: new Audio("/sfx/mgs-alert.mp3"),
};
let audioSettings = {
  mute: false,
};

const playBgm = () => {
  if (audios.bgm.paused && !audioSettings.mute) {
    audios.bgm.loop = true;
    audios.bgm.volume = 0.05;
    audios.bgm.play();
  }
};

const playNext = () => {
  if (!audioSettings.mute) {
    audios.next.currentTime = 0;
    audios.next.volume = 0.4;
    audios.next.play();
  }
};

const playVoice = (currentScene) => {
  const currentaudio = takeCurrentsceneAudio(currentScene);
  if (!audioSettings.mute) {
    currentaudio.currentTime = 0;
    currentaudio.volume = 0.01;
    currentaudio.play();
  }
};
const takeCurrentsceneAudio = (currentScene) => {
  return audios[currentScene.voice];
};

const handleEffectAudio = (effect) => {
  if (!audioSettings.mute) {
    audios[effect].currentTime = 0;
    audios[effect].volume = 0.1;
    audios[effect].play();
  }
};

export {
  audios,
  audioSettings,
  playBgm,
  playNext,
  playVoice,
  handleEffectAudio,
};
