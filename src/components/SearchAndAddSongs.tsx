import type { Song } from "../types/playlist"
import Select from "react-select"
import type { SingleValue } from "react-select"

export interface Option {
  label: string
  value: string
}

interface Props {
  query: string
  setQuery: (q: string) => void
  selectedPlaylist: string
  setSelectedPlaylist: (id: string) => void
  playlistOptions: Option[]
  results: Song[]
  handleSearch: () => void
  addToPlaylist: (song: Song) => void
}

const SearchAndAddSongs: React.FC<Props> = ({
  query,
  setQuery,
  selectedPlaylist,
  setSelectedPlaylist,
  playlistOptions,
  results,
  handleSearch,
  addToPlaylist,
}) => {
  return (
    <div className="bg-secondary rounded-xl shadow-2xl p-6 text-white h-[650px] flex flex-col">
      <h2 className="text-2xl text-white mb-6 tracking-tight">
        Search & Add Songs
      </h2>

      <div className="space-y-5 mb-8">
        <div>
          <label className="text-sm text-white font-medium">Search</label>
          <input
            type="text"
            placeholder="Search for songs..."
            className="w-full mt-1 px-4 py-2 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1BD760] transition"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-white font-medium mb-1 block">
            Select Playlist
          </label>
          <Select
            options={playlistOptions}
            value={
              playlistOptions.find((opt) => opt.value === selectedPlaylist) ||
              null
            }
            onChange={(selected: SingleValue<Option>) =>
              setSelectedPlaylist(selected?.value || "")
            }
            placeholder="Choose a playlist..."
            isSearchable
            className="react-select-container"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#2a2a2a",
                borderColor: "#444",
                color: "#fff",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#2a2a2a",
                color: "#fff",
              }),
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? "#333" : "#2a2a2a",
                color: "#fff",
                cursor: "pointer",
              }),
              singleValue: (base) => ({
                ...base,
                color: "#fff",
              }),
              placeholder: (base) => ({
                ...base,
                color: "#aaa",
              }),
            }}
          />
        </div>

        <button
          onClick={handleSearch}
          className=" bg-accent text-black px-5 py-2.5 rounded-full font-medium transition transform hover:scale-105 duration-300 shadow-md"
        >
          Search
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-1 space-y-4 hide-scrollbar">
        {results.map((song) => (
          <div
            key={song.spotifyId}
            className="bg-[#2a2a2a] rounded-lg border border-gray-700 p-4 shadow-sm"
          >
            <p className="font-semibold text-[#1BD760]">
              {song.title} — {song.artist}
            </p>
            <p className="text-sm text-gray-400">{song.album}</p>
            <button
              onClick={() => addToPlaylist(song)}
              className="mt-2 text-accent hover:underline text-sm font-medium"
            >
              + Add to Playlist
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchAndAddSongs
