"use client";

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import type {Artworks} from "../../types/Artworks";
import HarvardArtworks from "../../components/HarvardArtworks";
import styled from "styled-components";

const ArtsDiv = styled.div`
    margin: auto;
    width: 80%;
    padding: 2%;
    background-color: white;
`

export default function ArtworksPage(){
    const params = useParams();  //get the keyword from the url
    const [data, setData] = useState<Artworks[]>([]);  //store the artworks we get from the Harvard api
    const [loading, setLoading] = useState(true);  //store the status that whether the page is loading or not
    const [error, setError] = useState(false);  //store the status that whether there is an error or not

    useEffect(() =>{
        async function fetchData(): Promise<void> {
            //the keyword here depends on what user inputs, so it is a variable instead of a fixed value
            const rawData = await fetch(`/api/getArtworks?keyword=${params.keyword}`);
            //if the rawData we fetch is not ok(status code is not 200-299), then it means there is an error and we set error status to be true
            if(!rawData.ok){
                setError(true);
            }
            else{
                //otherwise, we receive our data in array type and send them to the function setData()
                //to store them and rerender the page
                const result: Artworks[] = await rawData.json();
                setData(result);
            }
            //since we are no longer waiting for the data, the status of loading is false
            setLoading(false);
        }
        fetchData()
            .catch(() => {
                setError(true); //we failed to fetch data
                setLoading(false); //we stop displaying Loading on the screen
            });
    }, [params.keyword]);

    if(loading){
        return <h2>Loading...</h2>;
    }
    if(error){
        return <h2>Something went wrong</h2>;
    }
    return(
        <ArtsDiv>
            <h1>Artworks for {params.keyword}</h1>
            <h2>Found {data.length} artworks</h2>
            <HarvardArtworks data={data}/>
        </ArtsDiv>

    );
}