import { useState, useEffect } from "react"
import API from "../api/axios"
import PlaylistManager from "../components/PlaylistManager"
import type { Playlist, Song } from "../types/playlist"
import SearchAndAddSongs from "../components/SearchAndAddSongs"

type Option = {
  label: string
  value: string
}

const Dashboard = () => {
  const [form, setForm] = useState({ name: "", description: "" })
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [formError, setFormError] = useState("")

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Song[]>([])
  const [selectedPlaylist, setSelectedPlaylist] = useState("")

  const fetchPlaylists = async () => {
    const res = await API.get("/api/playlists")
    setPlaylists(res.data)
    if (!selectedPlaylist && res.data.length > 0) {
      setSelectedPlaylist(res.data[0]._id)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim()) {
      setFormError("Playlist name is required.")
      return
    }

    try {
      if (editingId) {
        await API.put(`/api/playlists/${editingId}`, form)
        setEditingId(null)
      } else {
        await API.post("/api/playlists", form)
      }

      setForm({ name: "", description: "" })
      setFormError("")
      fetchPlaylists()
    } catch (err) {
      console.error("Error saving playlist:", err)
    }
  }

  const handleEdit = (pl: Playlist) => {
    setForm({ name: pl.name, description: pl.description })
    setEditingId(pl._id)
  }

  const handleDelete = async (id: string) => {
    await API.delete(`/api/playlists/${id}`)
    fetchPlaylists()
  }

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleSearch = async () => {
    const res = await API.get(`/api/spotify/search?q=${query}`)
    //console.log(res)

    setResults(res.data)
  }

  const playlistOptions: Option[] = playlists.map((pl) => ({
    label: pl.name,
    value: pl._id,
  }))

  const addToPlaylist = async (song: Song) => {
    if (!selectedPlaylist) return
    await API.post(`/api/playlists/${selectedPlaylist}/songs`, song)
    fetchPlaylists()
  }

  useEffect(() => {
    fetchPlaylists()
  }, [])

  return (
    <div className="min-h-screen pt-24 px-4 pb-10 flex">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <PlaylistManager
          form={form}
          playlists={playlists}
          editingId={editingId}
          expandedId={expandedId}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleExpand={toggleExpand}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          formError={formError}
        />

        <SearchAndAddSongs
          query={query}
          setQuery={setQuery}
          selectedPlaylist={selectedPlaylist}
          setSelectedPlaylist={setSelectedPlaylist}
          playlistOptions={playlistOptions}
          results={results}
          handleSearch={handleSearch}
          addToPlaylist={addToPlaylist}
        />
      </div>
    </div>
  )
}

export default Dashboard
