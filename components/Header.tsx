"use client";

import Link from "next/link";
import styled from "styled-components";
import {usePathname} from "next/navigation";

const StyledHeader = styled.header`
    padding: 1% 2%;
    background-color: white;
    border-bottom: 2px solid black;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: calc(10px + 2vw);
    font-weight: bold;
`;

export default function Header() {
    //by doing so, we can get the path of the current page, so that the header can show different text on different pages
    const currentPath = usePathname();
    return (
        <StyledHeader>
            <StyledLink href={`/`}>
                {currentPath === `/`? "Home Page" : "Back to Home Page"}
            </StyledLink>
        </StyledHeader>
    );
}