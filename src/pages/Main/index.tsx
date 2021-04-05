import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, FloatButton, FormContainer, Input, Logo } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import api from '../../services/api';
import { UserProps } from '../../components/User';
import User from '../../components/User';
const Main: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<UserProps>();
    
    const handleSearchForUser = async () => {
        if(username.length < 3) {
            console.log('Insira um nome de usuário válido!');
            return false;
        };

        try {
            setLoading(true);
            const response = await api.get(`/${username}`);
            setUser(response.data);
            setLoading(false);
        } catch(err) {
            setLoading(false);
            console.log(`USUÁRIO NÃO ENCONTRADO!`);
        };
    };
    return (
        <>
            <Container>
                <Logo>GITLY</Logo>
                <FormContainer>
                    <Input 
                    placeholder="Digite o nome do usuário..."
                    onChangeText={ text => setUsername(text) }
                    />

                    <FloatButton
                    onPress={ handleSearchForUser }>
                        <Icon name="search" color="#fff" size={ 16 } />
                    </FloatButton>
                </FormContainer>

                { user ? <User { ...user } /> : null }
            </Container>
        </>
    )
};

export default Main;