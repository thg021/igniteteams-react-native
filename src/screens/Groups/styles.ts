import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Text = styled.Text`
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: bold;
`