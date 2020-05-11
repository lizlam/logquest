import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import Microlink from '@microlink/react'

const DELETE_GAME_MUTATION = gql`
  mutation DeleteGameMutation($id: Int!) {
    deleteGame(id: $id) {
      id
    }
  }
`

const Game = ({ game }) => {
  const [deleteGame] = useMutation(DELETE_GAME_MUTATION, {
    onCompleted: () => {
      navigate(routes.games())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete game ' + id + '?')) {
      deleteGame({ variables: { id } })
    }
  }

  return (
    <>
      <div className="bg-white border rounded-lg overflow-hidden">
        <header className="bg-gray-300 text-gray-700 py-3 px-4">
          <h2 className="text-sm font-semibold">Game {game.id} Detail</h2>
        </header>
        <table className="w-full text-sm">
          <tbody>
            <tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">id</td>
              <td className="p-3">{game.id}</td>
            </tr>
            <tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">title</td>
              <td className="p-3">{game.title}</td>
            </tr>
            <tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">bgglink</td>
              <td className="p-3">
                <Microlink url={game.bgglink} />
              </td>
            </tr>
            <tr className="odd:bg-gray-100 even:bg-white border-t">
              <td className="font-semibold p-3 text-right md:w-1/5">
                createdAt
              </td>
              <td className="p-3">{game.createdAt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="my-4 mx-2 text-center">
        <ul>
          <li className="inline-block ml-2">
            <Link
              to={routes.editGame({ id: game.id })}
              className="text-xs bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
            >
              Edit
            </Link>
          </li>
          <li className="inline-block ml-2">
            <a
              href="#"
              className="text-xs bg-red-600 text-white hover:bg-red-700 rounded px-4 py-2 uppercase font-semibold tracking-wide"
              onClick={() => onDeleteClick(game.id)}
            >
              Delete
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Game
