import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
    const [group, setGroup] = useState('')
    const navigation = useNavigation()
    function handleGroup() {
        navigation.navigate('players', { group })
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />

                <Highlight
                    title="Nova turma"
                    subtitle="crie a turma para adicionar as pessoas"
                />
                <Input placeholder="Nome da turma" value={group} onChangeText={setGroup} />
                <Button title="Criar" style={{ marginTop: 20 }} onPress={() => handleGroup()} />
            </Content>
        </Container>
    )
}