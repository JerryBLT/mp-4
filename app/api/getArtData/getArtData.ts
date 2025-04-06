import { ArtRecord } from '../../types';

export async function getArtData(): Promise<ArtRecord[]> {
    const apiKey = process.env.MUSEUM_API_KEY;
    const url = `https://api.harvardartmuseums.org/exhibition?apikey=${apiKey}&size=5`;

    const response = await fetch(url);
    const data = await response.json();
    return data.records;
}