import { Serializable } from "./interfaces/serializable";
import { Poster } from "./interfaces/poster";

export class Fake implements Serializable {

  id: string = '';

  constructor(
    public poster: Poster,
    public date: Date,
    public verificationUrl: string
  ) {}

}
