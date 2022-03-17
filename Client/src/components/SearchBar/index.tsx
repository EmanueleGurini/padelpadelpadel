import React from 'react'
import Box from "@mui/material/Box";
import Icon from "../Icons";
import styled from "@emotion/styled";
import {Simulate} from "react-dom/test-utils";
//import IconButtonWrapper from "../IconButton";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

const Input = styled.input`
  border: none;
  color: grey;
  cursor: pointer;
  font-size: 18px;
  height: 36px;
  outline: none;
  width: 100%;
`;

interface IIconButton {
    icon: any
    size: string
}
const IconButtonWrapper: React.FC<IIconButton> = (props: IIconButton) => {
    return (
        <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton sx={{
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'transparent',
                }}} aria-label={props.icon} size={'large'}>
                <Icon glyph={props.icon} size={props.size} />
            </IconButton>
        </Stack>
    );
}

const SearchBar = () => {
   return (
       <Box
           sx={{
               border: 'none',
               borderRadius: 50,
               //boxShadow: '8px 5px 13px -4px #787878',
               bgcolor: '#ffffff',
               display: 'flex',
               alignItems: 'center',
               height: 70,
               paddingLeft: 4,
               paddingRight: 4,
               width: 770,
           }}
       >
           <Input type={'text'}></Input>
           <IconButtonWrapper icon={'magnifyLens'} size={'xl'}/>

       </Box>
   );
}

export default SearchBar;