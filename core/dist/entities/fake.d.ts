import { Serializable } from "./interfaces/serializable";
import { Poster } from "./interfaces/poster";
export declare class Fake implements Serializable {
    poster: Poster;
    date: Date;
    verificationUrl: string;
    id: string;
    constructor(poster: Poster, date: Date, verificationUrl: string);
}
