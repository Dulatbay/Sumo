// this singleton instance
export default class AudioPlayer {
  static instance = null;
  static BASE_URL = "http://localhost:8000/api";
  static createInstance() {
    return new AudioPlayer();
  }

  static getInstance() {
    if (AudioPlayer.instance == null) {
      AudioPlayer.instance = AudioPlayer.createInstance();
    }
    return AudioPlayer.instance;
  }

  audio = new Audio();
  music_title = "";
  music_id = -1;

  getMusicTitle() {
    return this.music_title;
  }

  getMusicId() {
    return this.music_id;
  }

  setMusicTitle(music_title) {
    this.music_title = music_title;
  }

  setMusicId(music_id) {
    this.music_id = music_id;
  }

  setAudioSrc(src) {
    if (!this.audio.paused) this.audio.pause();
    this.audio.src = AudioPlayer.BASE_URL + src;
    this.setHeader(this.isPlaying(), this.getMusicTitle());
  }

  pause() {
    this.audio.pause();
  }

  play() {
    this.audio.play();
  }

  isPlaying() {
    return !this.audio.paused;
  }

  pauseOrPlay() {
    if (this.reset) this.reset();
    if (this.audio.paused) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
    this.setHeader(this.isPlaying(), this.getMusicTitle());
  }
}
