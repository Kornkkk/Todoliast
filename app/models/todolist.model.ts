import { BaseObject } from "./baseobject.model";


export class Todolist extends BaseObject {
    public constructor(init?: Partial<Todolist>){
        super();
        Object.assign(this,init);
        }
    id?: number;
    header?: string;
    detail?: string;
    remindDate?: string;
}