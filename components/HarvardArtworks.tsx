"use client";

import styled from "styled-components";
import Image from "next/image";
import type {Artworks} from "../types/Artworks";

const AllArtsDiv = styled.div`
    display: flex;
    flex-flow: row wrap; //arrange elements horizontally and automatically wrap when space is insufficient
`;

const SingleArtDiv = styled.div`
    width: 25%;
    margin: 2%;
    padding: 1%;
    border: 2px solid black;
    text-align: center;
`;

const StyledP = styled.p`
    font-size: calc(10px + 1vw);
`;

export default function HarvardArtworks(props: {data: Artworks[]}){
    //for the images, we must first check whether it is null or not, and if it is null, then we will render it at all
    //otherwise, if it receives a null address, it will complain about it
    //Moreover, we must have to add the "unoptimized" attribute since since it allows the Vercel's image optimizer
    //to load Harvard Artworks images, otherwise if we access this website through Vercel, what we could see would are all broken images
    return(
        <AllArtsDiv>
            {props.data.map((art) =>(
                <SingleArtDiv key={art.id}>
                    <h2>{art.title}</h2>
                    <h3>{art.dated}</h3>
                    {art.primaryimageurl? <Image src={art.primaryimageurl} alt={art.title} width={200} height={200} unoptimized/> : <StyledP>No images available</StyledP>}
                </SingleArtDiv>
            ))}
        </AllArtsDiv>
    )
}