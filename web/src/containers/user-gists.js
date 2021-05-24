import { useState, useEffect } from 'react'
import { get } from 'axios'
import GistList from '../components/gist-list'

const ENTER = 13

export default function GistsByUser() {
  const [user, setUser] = useState(null)
  const [gists, setGists] = useState([])

  useEffect(() => {
    if (user) fetchGistsByUser()
  }, [user])

  async function fetchGistsByUser() {
    const { data } = await get(`/api/gists/user/${user}`)

    setGists(data)
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Gists by User</h1>
        <div>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              name="company_website"
              id="company_website"
              className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
              placeholder="Github username"
              onKeyDown={(e) => {
                if (e.keyCode === ENTER) {
                  if (e.target.value.length > 0) {
                    setUser(e.target.value)
                  } else {
                    setGists([])
                  }
                }
              }}
            />
          </div>
        </div>
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
