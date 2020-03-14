export class User {
    constructor(
        public username: string,
        public password: string) { }
}

export class CountryWeather {
    constructor(
        public id: number,
        public nameLocation: string,
        public codeCountry: string,
        public weather: {
            id: number,
            main: string,
            description: string,
            icon: string
        },
        public main: {
            temp: number,
            feels_like: number,
            temp_min: number,
            temp_max: number,
            pressure: number,
            humidity: number
        },
        public wind: {
            speed: number,
            deg: number
        }
    ) { }
}

export const InitialCountryWeather = {
    id: 0,
    nameLocation: '',
    codeCountry: '',
    weather: {
        id: 0,
        main: '',
        description: '',
        icon: ''
    },
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0
    },
    wind: {
        speed: 0,
        deg: 0
    }
}
