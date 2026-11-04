//this is the server side
import {NextResponse} from "next/server";

const HARVARD_API_KEY = process.env.HARVARD_ART_MUSEUM_API_KEY; //get the api key from .env file

export async function GET(req: Request){
    //by doing so, we can turn the url into an object so that we can read the content after '?'
    const {searchParams} = new URL(req.url);
    //get the value of keyword
    const keyword = searchParams.get("keyword");

    const resource = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=${HARVARD_API_KEY}&keyword=${keyword}&hasimage=1`,
        {cache: "no-store"}
    );

    if (!resource.ok) {
        return NextResponse.json({error: "Failed to fetch artworks"},{status:502});
    }
    const data = await resource.json();
    //only send the "records" attribute in our Harvard json file back to the client, otherwise the client may see our api key
    return NextResponse.json(data.records);
}