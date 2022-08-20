export interface ICharacter {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
    origin: IOrigin;
    location: ILocation;
}

export interface IOrigin {
    name: string;
}

export interface ILocation {
    name: string;
}
