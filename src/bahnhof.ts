//https://app.quicktype.io/?l=ts
//hiermit kann man json zu typescript types umwandeln

interface BahnAPIResponse {
    offset: number;
    limit:  number;
    total:  number;
    result: Bahnhof[];
}

interface Bahnhof {
    number: number;
    name: string;
    mailingAddress: MailingAddress;
    category: number;
    priceCategory: number;
    hasParking: boolean;
    hasBicycleParking: boolean;
    hasLocalPublicTransport: boolean;
    hasPublicFacilities: boolean;
    hasLockerSystem: boolean;
    hasTaxiRank: boolean;
    hasTravelNecessities: boolean;
    hasSteplessAccess: string;
    hasMobilityService: string;
    hasWiFi: boolean;
    hasTravelCenter: boolean;
    hasRailwayMission: boolean;
    hasDBLounge: boolean;
    hasLostAndFound: boolean;
    hasCarRental: boolean;
    federalState: string;
    regionalbereich: Regionalbereich;
    aufgabentraeger: Aufgabentraeger;
    localServiceStaff: LocalServiceStaff;
    timeTableOffice: TimeTableOffice;
    szentrale: Szentrale;
    stationManagement: StationManagement;
    evaNumbers: EvaNumber[];
    ril100Identifiers: Ril100Identifier[];
    productLine: ProductLine;
}

interface Aufgabentraeger {
    shortName: string;
    name: string;
}

interface EvaNumber {
    number: number;
    geographicCoordinates: GeographicCoordinates;
    isMain: boolean;
}

interface GeographicCoordinates {
    type: string;
    coordinates: number[];
}

interface LocalServiceStaff {
    availability: Availability;
}

interface Availability {
    monday: Day;
    tuesday: Day;
    wednesday: Day;
    thursday: Day;
    friday: Day;
    saturday: Day;
    sunday: Day;
    holiday: Day;
}

interface Day {
    fromTime: string;
    toTime: string;
}

interface MailingAddress {
    city: string;
    zipcode: string;
    street: string;
}

interface ProductLine {
    productLine: string;
    segment: string;
}

interface Regionalbereich {
    number: number;
    name: string;
    shortName: string;
}

interface Ril100Identifier {
    rilIdentifier: string;
    isMain: boolean;
    hasSteamPermission: boolean;
    steamPermission: string;
    geographicCoordinates: GeographicCoordinates;
    primaryLocationCode: string;
}

interface StationManagement {
    number: number;
    name: string;
}

interface Szentrale {
    number: number;
    publicPhoneNumber: string;
    name: string;
}

interface TimeTableOffice {
    email: string;
    name: string;
}

export{
    BahnAPIResponse,
    Bahnhof,
    Aufgabentraeger,
    EvaNumber,
    GeographicCoordinates,
    LocalServiceStaff,
    Availability,
    Day,
    MailingAddress,
    ProductLine,
    Regionalbereich,
    Ril100Identifier,
    StationManagement,
    Szentrale,
    TimeTableOffice
}