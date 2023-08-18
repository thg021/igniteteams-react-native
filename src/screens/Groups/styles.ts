import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Text = styled.Text`
    flex: 1;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    font-weight: bold;
`