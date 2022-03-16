import React from 'react'
import Box from "@mui/material/Box";
import Icon from "../Icons";
import styled from "@emotion/styled";
import {Simulate} from "react-dom/test-utils";

const Input = styled.input`
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 18px;
  height: 36px;
  outline: none;
  width: 100%;
`;

const SearchBar = () => {
   return (
       <Box
           sx={{
               border: 'none',
               borderRadius: 50,
               boxShadow: '8px 5px 13px -4px #787878',
               display: 'flex',
               alignItems: 'center',
               height: 70,
               paddingLeft: 4,
               paddingRight: 4,
               width: 770,
           }}
       >
           <Input type={'text'}></Input>
           <Icon glyph={'magnifyLens'} size={'xl'} />
       </Box>
   );
}

export default SearchBar;