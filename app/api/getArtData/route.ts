import { NextResponse } from 'next/server';
import { getArtData } from './getArtData';

export async function GET() {
    try {
        const artData = await getArtData();
        return NextResponse.json(artData);
    } catch {
        return NextResponse.json(
            { e: 'Failed to fetch art data. Please try again later.' }, { status: 500 }
        );
    }
}

