import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";


export const Container = styled(TextInput)`
    flex: 1;
    
    min-height: 56px;
    max-height: 56px;

  
    border-radius: 6px;
    padding: 16px;

    ${({ theme: { COLORS, FONT_FAMILY, FONT_SIZE } }) => css`
        background-color: ${COLORS.GRAY_700};
        font-family:  ${FONT_FAMILY.REGULAR};
        font-size:  ${FONT_SIZE.MD}px;
        color:  ${COLORS.WHITE};
    `}
 
`

