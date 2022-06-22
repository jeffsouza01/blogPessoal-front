import { Postagem } from "./Postagem"

export class Tema {
  public id: number
  public description!: string
  public postagem: Postagem[]
}
