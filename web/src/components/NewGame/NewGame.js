import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import GameForm from 'src/components/GameForm'

const CREATE_GAME_MUTATION = gql`
  mutation CreateGameMutation($input: CreateGameInput!) {
    createGame(input: $input) {
      id
    }
  }
`

const NewGame = () => {
  const [createGame, { loading, error }] = useMutation(CREATE_GAME_MUTATION, {
    onCompleted: () => {
      navigate(routes.games())
    },
  })

  const onSave = (input) => {
    createGame({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Game</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <GameForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGame
