
import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
    const [groups, setGroups] = useState(['Time da Rocket'])
    const navigation = useNavigation()
    function handleNewGroup() {
        navigation.navigate('new')
    }

    return (
        <Container>
            <Header />
            <Highlight title="Turmas" subtitle="jogue com sua turma." />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => <ListEmpty message="Que tal cadastra a primeira turma?" />}
            />
            <Button title="cadastrar" onPress={handleNewGroup} />
        </Container>
    );
}

