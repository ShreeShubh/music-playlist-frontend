import type { Playlist } from "../types/playlist"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

interface PlaylistManagerProps {
  form: { name: string; description: string }
  playlists: Playlist[]
  editingId: string | null
  expandedId: string | null
  formError: string
  handleSubmit: (e: React.FormEvent) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  toggleExpand: (id: string) => void
  handleEdit: (pl: Playlist) => void
  handleDelete: (id: string) => void
}

const PlaylistManager: React.FC<PlaylistManagerProps> = ({
  form,
  playlists,
  editingId,
  expandedId,
  formError,
  handleSubmit,
  handleChange,
  toggleExpand,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 h-[650px]">
      {/* Create Playlist */}
      <div className="bg-secondary rounded-xl shadow-2xl p-6 flex flex-col">
        <h2 className="text-2xl text-white mb-6 tracking-tight">
          Create Playlist
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-white font-medium">
              Playlist Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Chill Beats"
              className={`${
                formError ? "border-red-600" : "border-gray-600"
              } w-full mt-1 px-4 py-2 rounded-lg bg-[#2a2a2a] text-white border focus:outline-none focus:ring-2 focus:ring-[#1BD760] transition`}
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm text-white font-medium">
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="What's this playlist for?"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-[#2a2a2a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1BD760] transition"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-accent text-black px-5 py-2.5 rounded-full font-medium transition transform hover:scale-105 duration-300 shadow-md"
          >
            {editingId ? "Update Playlist" : "Create Playlist"}
          </button>
        </form>
      </div>

      {/* My Playlists */}
      <div className="bg-secondary rounded-xl shadow-2xl p-6 flex flex-col overflow-hidden min-h-[300px]">
        <h2 className="text-2xl text-white mb-6 tracking-tight">
          My Playlists
        </h2>

        <div className="flex-1 overflow-y-auto pr-1 space-y-4 hide-scrollbar">
          {playlists.length === 0 ? (
            <p className="text-gray-500 italic">No playlists created yet.</p>
          ) : (
            playlists.map((pl) => (
              <div
                key={pl._id}
                className="bg-[#2a2a2a] rounded-lg p-4 border border-gray-700 hover:shadow-md transition"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(pl._id)}
                >
                  <div>
                    <p className="text-lg font-semibold text-[#1BD760]">
                      {pl.name}
                    </p>
                    <p className="text-sm text-gray-400">{pl.description}</p>
                  </div>
                  <div className="text-xl text-gray-300">
                    {expandedId === pl._id ? (
                      <IoMdArrowDropup />
                    ) : (
                      <IoMdArrowDropdown />
                    )}
                  </div>
                </div>

                {expandedId === pl._id && (
                  <div className="mt-4 space-y-2">
                    {pl.songs && pl.songs.length > 0 ? (
                      pl.songs.map((song) => (
                        <div
                          key={song.spotifyId}
                          className="bg-[#3a3a3a] border border-gray-600 rounded-md px-4 py-2 text-sm shadow-sm"
                        >
                          <p className="font-medium text-accent">
                            {song.title} — {song.artist}
                          </p>
                          <p className="text-gray-400">{song.album}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">
                        No songs in this playlist yet.
                      </p>
                    )}
                    <div className="flex gap-4 mt-3">
                      <button
                        onClick={() => handleEdit(pl)}
                        className="text-accent hover:underline text-sm font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(pl._id)}
                        className="text-red-500 hover:underline text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PlaylistManager
