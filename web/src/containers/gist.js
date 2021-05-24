import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { get } from 'axios'
import { PaperClipIcon } from '@heroicons/react/solid'
import moment from 'moment'
import shortid from 'shortid'

export default function Gist() {
  const [gist, setGist] = useState(null)
  let gistDetailsHTML = null
  let filesHTML = null

  const { id } = useParams()

  useEffect(() => {
    if (!gist) fetchGist()
  })

  async function fetchGist() {
    const { data } = await get(`/api/gists/${id}`)

    setGist(data)
  }

  if (gist?.files) {
    filesHTML = Object.keys(gist.files).map((filename) => {
      return (
        <li key={shortid.generate()} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span className="ml-2 flex-1 w-0 truncate">{filename}</span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a href={gist.files[filename].raw_url} className="font-medium text-indigo-600 hover:text-indigo-500">
              Download
            </a>
          </div>
        </li>
      )
    })
  }

  if (gist) {
    gistDetailsHTML = (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Gist Details</h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{gist.description}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Created At</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {moment(new Date(gist.created_at)).format('YY/MM/DD')}
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Github API Link</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href={gist.url}>
                      Link
                    </a>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Github Link</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500" href={gist.html_url}>
                      Link
                    </a>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Files</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">{filesHTML}</ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Gist: {id}</h1>
      </div>
      {gistDetailsHTML}
    </div>
  )
}
