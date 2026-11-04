"use client";
import {useState} from "react";
import Link from "next/link";
import styled from "styled-components";


const PageDiv = styled.div`
    margin: 10% auto;
    width: 40%;
    padding: 2%;
    background-color: white;
    border: 2px solid black;
    text-align: center;
`;

const StyledInput = styled.input`
    width: 90%;
    padding: 2%;
    margin: 3%;
    font-size: calc(8px + 0.8vw);
    border: 2px solid black;
`;

//here, since Link is a component from Next.js instead of a html tag,
//we must use styled(Link) instead of styled.Link
const StyledLink = styled(Link)`
    display: block;
    padding: 2%;
    background-color: black;
    color: white;
    text-decoration: none;
`;


export default function Home() {
  const [keyword, setKeyword] = useState("");
  return (
          <PageDiv>
        <h2>Search Artworks</h2>
        <h3>Enter a keyword to find artworks from the Harvard Art Museums</h3>
        <StyledInput
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          />
        <StyledLink href={`/${keyword}`}>Search</StyledLink>
          </PageDiv>
  );
}
