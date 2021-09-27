import React from 'react';
import styled from 'styled-components/native';

/// tem o "TouchableHighlight", ele faz o texto ficar um pouco mais claro;
const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #eee;
  flex-direction: row;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #fff;
`;

const ListaItem = props => {
  return (
    <Item activeOpacity={0.6} onPress={() => {}}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck></ItemCheck>
      </>
    </Item>
  );
};

export default ListaItem;
