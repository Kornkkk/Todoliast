export class BaseObject {
    public constructor(init?: Partial<BaseObject>){
        Object.assign(this,init);
    }
    createdDate?: Date;
    createdBy?: string;
    updatedDate?: Date;
    updatedBy?: string;
}