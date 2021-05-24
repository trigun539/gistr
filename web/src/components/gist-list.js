import shortid from 'shortid'

export default function GistList({ gists }) {
  const gistRowsHTML = gists.map((gist) => {
    return (
      <tr key={shortid.generate()}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={gist.owner.avatar_url} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{gist.owner.login}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{gist.id}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href={`/gists/${gist.id}`} className="text-indigo-600 hover:text-indigo-900">
            View
          </a>
        </td>
      </tr>
    )
  })

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Owner
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            GIST ID
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">View</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">{gistRowsHTML}</tbody>
    </table>
  )
}
