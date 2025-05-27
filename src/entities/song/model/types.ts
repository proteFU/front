export interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  duration: number;
  audioUrl: string;
}

export interface PlayerState {
  currentTime: number;
  isPlaying: boolean;
  volume: number;
} 