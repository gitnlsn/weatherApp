import { Weather } from "../models/Weather"

export const groupByDate = (data: Weather[]):{ [x: string]: Weather[] } => {
    return data.reduce((acc,d) => {
        const year = d.date.getFullYear();
        const month = d.date.getMonth();
        const day = d.date.getDate();

        const date = new Date(year, month, day);
        if (!!acc[date.toLocaleDateString()]) {
            acc[date.toLocaleDateString()].push(d);
        } else {
            acc[date.toLocaleDateString()] = [d];
        }
        return acc;
    }, {} as { [x: string]: Weather[] });
}

export const getDates = (data: Weather[]): string[] => {
    return data.map(d => {
        const year = d.date.getFullYear();
        const month = d.date.getMonth();
        const day = d.date.getDate();

        return new Date(year, month, day).toLocaleDateString();
    }).reduce((acc, dateString) => {
        if (!acc.find(existingDateString => existingDateString === dateString)) {
            acc.push(dateString);
        }
        return acc;
    }, [] as string[]);
}
