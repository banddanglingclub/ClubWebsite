import { WaterAccessType, WaterType } from "./water-enum";
export class Water {
    id!: number;
    dbKey!: string;
    name!: string;
    type!: WaterType;
    access!: WaterAccessType;
    waterType!: string;
    accessType!: string;
    description!: string;
    w3wCarPark!: string;
    videoShortCode!: string;
    species!: string;
    directions!: string;
    destination!: Position;
    centre!: Position;
    markers!: Marker[];
    path!: Position[];
    hasLimits!: boolean;

    public get directionUrl(): string {
        return `https://www.google.co.uk/maps/dir//${this.destination.lat},${this.destination.long}`
    }

    public get what3WordsUrl(): string {
        return `https://what3Words.com/${this.w3wCarPark.replace("///", "")}?maptype=satellite`
    }
}

export class WaterUpdateDto {
    dbKey!: string;
    description!: string;
    directions!: string;
}

export class Marker {
    position!: Position;
    label!: string;
    icon!: string;
}

export class Position {
    lat!: number;
    long!: number;
}