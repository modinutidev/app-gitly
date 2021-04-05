import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const Imagem = styled.Image`
    height: 300px;
    width: 100%;
    margin: 0 auto;
    flex: 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px #118ab2;
`;

export const Login = styled.Text`
    flex: 1;
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
`;

export const Location = styled.Text`
    flex: 2;
    text-align: right;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
`;

export const Titulo1 = styled.Text`
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 6px;
    font-weight: bold;
    color: #fff;
`;

export const Bio = styled.Text`
    font-style: italic;
    color: #fff;
`;

export const Assinatura = styled.Text`
    font-style: italic;
    color: #06d6a0;
    margin: 0 auto;
`;