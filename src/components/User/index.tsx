import React from 'react';
import { Imagem, Login, Location, Container, Bio, Row, Titulo1, Assinatura } from './styles';

export interface UserProps {
    login: string;
    avatar_url: string;
    bio: string;
    location: string;
    created_at: string;
}

const User: React.FC<UserProps> = ({ login, avatar_url, bio, location}) => {
    return (
        <>
            <Container>
                <Row>
                    <Imagem source={{uri: avatar_url}}/>
                </Row>
                <Row style={{backgroundColor:'#118ab2', padding: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                    <Login>{ login }</Login>
                    <Location>{ location }</Location>
                </Row>
            </Container>
            
            <Container style={{backgroundColor: '#06d6a0', padding: 10, marginTop: 10, borderRadius: 10}}>
                <Row>
                    <Titulo1>Biografia</Titulo1>
                </Row>
                <Row>
                    <Bio>{ bio }</Bio>
                </Row>
            </Container>

            <Container style={{padding: 10, marginTop: 10, borderRadius: 10, borderWidth: 1, borderColor:'#06d6a0'}}>
                <Row>
                    <Assinatura>Desenvolvido por Bruno Modinuti</Assinatura>
                </Row>
            </Container>
        </>
        
    );
};

export default User;