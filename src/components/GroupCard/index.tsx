import { TouchableOpacityProps } from "react-native"
import { Container, Icon, Title } from "./styles"
import { useNavigation } from "@react-navigation/native"

type Props = TouchableOpacityProps & {
    title: string,
}

export function GroupCard({ title, ...rest }: Props) {
    const navigation = useNavigation()
    function handleGroup(group: string) {
        navigation.navigate('players', { group })
    }
    return (
        <Container {...rest} onPress={() => handleGroup(title)}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}