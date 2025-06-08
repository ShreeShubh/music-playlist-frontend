export interface Song {
  spotifyId: string
  title: string
  artist: string
  album: string
}

export interface Playlist {
  _id: string
  name: string
  description: string
  songs?: Song[]
}
