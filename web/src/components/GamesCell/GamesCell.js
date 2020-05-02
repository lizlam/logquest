import { Link, routes } from '@redwoodjs/router'

import Games from 'src/components/Games'

export const QUERY = gql`
  query GAMES {
    games {
      id
      title
      bgglink
      createdAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No games yet. '}
      <Link
        to={routes.newGame()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ games }) => {
  return <Games games={games} />
}
