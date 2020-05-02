import Game from 'src/components/Game'

export const QUERY = gql`
  query FIND_GAME_BY_ID($id: Int!) {
    game: game(id: $id) {
      id
      title
      bgglink
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Game not found</div>

export const Success = ({ game }) => {
  return <Game game={game} />
}
