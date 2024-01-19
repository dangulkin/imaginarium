import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { gameSettings } from '../constants/game'
import { IFieldElement, IPlayerElement } from '../types/game'
import { randomInteger } from '../helpers/number'

type UseDrawPlayers = (
  ctx: CanvasRenderingContext2D | null,
  fieldsElement: IFieldElement[],
  setPlace: () => void
) => {
  setNext: Dispatch<SetStateAction<number>>
  generatePlayers: () => void
}

export const UseDrawPlayers: UseDrawPlayers = (
  ctx,
  fieldsElement,
  setPlace
) => {
  const [players, setPlayers] = useState<IPlayerElement[]>([])
  const [next, setNext] = useState(0)

  const generatePlayers = () => {
    const arrPayer = Array.from({ length: randomInteger(2, 6) }).map(() => {
      const field = fieldsElement[randomInteger(0, fieldsElement.length - 1)]
      return {
        width: gameSettings.PLAYER_WIDTH_PX,
        height: gameSettings.PLAYER_HEIGHT_PX,
        top: field.top + randomInteger(0, 80),
        left: field.left + randomInteger(0, 80),
      } as IPlayerElement
    })

    setPlayers(arrPayer)
  }

  useEffect(() => {
    if (!ctx) {
      return
    }
    ctx.fillStyle = 'rgb(12,211,106)'
    players.forEach(player => {
      ctx.fillRect(player.left, player.top, player.width, player.height)
    })
  }, [players, ctx])

  return {
    setNext,
    generatePlayers,
  }
}
