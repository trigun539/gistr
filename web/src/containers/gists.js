import { useState, useEffect } from 'react'
import { get } from 'axios'
import GistList from '../components/gist-list'

export default function Gists() {
  const [gists, setGists] = useState([])

  useEffect(() => {
    fetchGists()
  }, [])

  async function fetchGists() {
    const { data } = await get('/api/gists')

    setGists(data)
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Gists</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <GistList gists={gists} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
