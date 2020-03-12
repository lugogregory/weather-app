export class User {
    constructor(
    public username: string,  
    public password: string) {}
}

export interface CountryWeather {
    idCountry: number,
    nameCountry: string,
    favorite: boolean,
    weather: {
        id: number,
        main: string,
        description: string,
        icon: string
    }
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    wind: {
        speed: number,
        deg: number
    },
}