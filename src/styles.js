import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.bgColor};
  justify-content: center;
`;

export const AreaLogin = styled.View`
  margin: 0 5% 0 5%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 22px;
  margin-bottom: 10%;
`;

export const AreaInput = styled.View`
  border: 1px solid #fff;
  flex-direction: row;
  align-items: center;
  padding: 1%;
`;

export const InputUser = styled.TextInput.attrs({
  placeholderTextColor: "#FFF",
})`
  padding: 2%;
  padding-left: 10px;
  font-size: 18px;
  color: #fff;
`;

export const InputPassword = styled.TextInput.attrs({
  placeholderTextColor: "#FFF",
})`
  padding: 2%;
  font-size: 18px;
  color: #fff;
`;

export const ButtonSend = styled.TouchableOpacity`
  margin-top: 5%;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;

export const TextButton = styled.Text`
  color: #0081a7;
  font-size: 22px;
`;
