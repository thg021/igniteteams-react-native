import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean
}


export const Container = styled(TouchableOpacity) <FilterStyleProps>`

    ${({ theme, isActive }) => isActive && css`
        border: 1px solid ${theme.COLORS.GREEN_700};
    `};

    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    padding: 8px;
    align-items: center;
    justify-content: center;
`;


export const Title = styled.Text`

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE}
    `};

`
