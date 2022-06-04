import { Tema } from "./Tema";
import { User } from "./User";

export class Postagem {
    public id:number;
    public title: string;
    public description: string;
    public date:Date;
    public user: User;
    public tema: Tema;
}
