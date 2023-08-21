import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
    type?: ButtonTypeStyleProps
    title: string
}


export function Button({ type = 'PRIMARY', title, ...rest }: Props) {
    return (
        <Container {...rest} type={type}>
            <Title>{title}</Title>
        </Container>
    )
}