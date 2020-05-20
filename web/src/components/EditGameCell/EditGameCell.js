import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import GameForm from 'src/components/GameForm'

export const QUERY = gql`
  query FIND_GAME_BY_ID($id: Int!) {
    game: game(id: $id) {
      id
      title
      bgglink
      createdAt
      completed
    }
  }
`
const UPDATE_GAME_MUTATION = gql`
  mutation UpdateGameMutation($id: Int!, $input: UpdateGameInput!) {
    updateGame(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ game }) => {
  const [updateGame, { loading, error }] = useMutation(UPDATE_GAME_MUTATION, {
    onCompleted: () => {
      navigate(routes.games())
    },
  })

  const onSave = (input, id) => {
    updateGame({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Game {game.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <GameForm game={game} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
