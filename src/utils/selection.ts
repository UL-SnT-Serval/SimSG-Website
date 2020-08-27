export enum ElmtType {
    NULL,
    Fuse= "Fuse",
    Meter= "Meter",
    Cable= "Cable"
}

export class Selection {
    id: number;
    type: ElmtType;


    constructor(id: number, type: ElmtType) {
        this.id = id;
        this.type = type;
    }

    public equals(other: Selection): boolean {
        return this.id === other.id && this.type === other.type;
    }
}

export const NullSelection = new Selection(-1, ElmtType.NULL);