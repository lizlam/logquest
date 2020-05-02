import { db } from 'src/lib/db'

export const games = () => {
  return db.game.findMany()
}

export const game = ({ id }) => {
  return db.game.findOne({
    where: { id },
  })
}

export const createGame = ({ input }) => {
  return db.game.create({
    data: input,
  })
}

export const updateGame = ({ id, input }) => {
  return db.game.update({
    data: input,
    where: { id },
  })
}

export const deleteGame = ({ id }) => {
  return db.game.delete({
    where: { id },
  })
}
