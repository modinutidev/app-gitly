import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 40px;
    flex: 1;
`;

export const Logo = styled.Text`
    color: #060719;
    font-size: 25px;
    font-weight: bold;
    text-align: left;
`;

export const FormContainer = styled.View`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
`;

export const Input = styled.TextInput`
    width: 92%;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 5px;
    font-size: 16px;
    border: 1px #ef476f;
    height: 60px;
    color: #ef476f;
`;

export const FloatButton = styled.TouchableOpacity`
    background-color: #ef476f;
    padding: 20px;
    border-radius: 50px;
    position: absolute;
    right: 0;
    height: 60px;
    width: 60px;
`;