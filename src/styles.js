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

export const InputArea = styled.View`
  background-color: #cbc9ce;
  position: absolute;
  width: 100%;
  top: 0;
  align-items: center;
  padding: 3%;
  height: 70px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 95%;
  padding: 2%;
  border-radius: 5px;
  font-size: 18px;
`;

export const AreaList = styled.View`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 70px;
  padding: 3%;
`;

export const AreaSchool = styled.View.attrs({
  borderColor: "#CCC",
  borderBottomWidth: 1,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
`;

export const NameSchool = styled.Text`
  font-size: 22px;
  color: #161b22;
`;
