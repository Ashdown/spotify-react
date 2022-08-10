import {Track} from "./useTracks";

const getCleanTrackData = (items:any[]):Track[] => items.map( (item:any) => ({
  id: item.track.id,
  name: item.track.name,
  image: item.track.album.images.find((image: any) => image.height === 300).url,
  date: new Date(item.added_at),
  artist: {
    id: item.track.artists[0].id,
    name: item.track.artists[0].name,
  }
}))

export default getCleanTrackData
