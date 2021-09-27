import React from 'react';
import styled from 'styled-components/native';

const AddItemView = styled.View`
  background-color: #ccc;
  padding: 10px;
`;

const AddItemInput = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
`;

const AddItemEmpy = styled.Text`
  margin: 10px;
  color: red;
  font-size: 16px;
`;

const AddItemArea = ({onAdd}) => {
  const [item, setItem] = React.useState('');
  const [itemEmpy, setItemEmpy] = React.useState('');

  const handleSubmit = () => {
    if (item.trim() != '') {
      /// esse trim() é para remover os espaços;
      onAdd(item.trim());
      setItem('');
    }
  };

  return (
    <AddItemView>
      <AddItemInput
        placeholder="Digite um novo item"
        value={item}
        onChangeText={e => setItem(e)}
        onSubmitEditing={handleSubmit}
      />
      {itemEmpy != '' && <AddItemEmpy>{itemEmpy}</AddItemEmpy>}
    </AddItemView>
  );
};

export default AddItemArea;
