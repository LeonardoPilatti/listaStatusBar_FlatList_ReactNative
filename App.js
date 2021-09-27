import React from 'react';
import styled from 'styled-components/native';
import AddItemArea from './src/components/AddItemArea';
import ListaItem from './src/components/ListaItem';

import lista from './src/lista';
import uuid from 'react-native-uuid';
import {StatusBar} from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

/* 
  <Scroll>
    {lista.map((item, index) => (
      <Item key={index} activeOpacity={0.6} onPress={() => {}}>
        <>
          <ItemText>{item.task}</ItemText>
          <ItemCheck></ItemCheck>
        </>
      </Item>
    ))}
  </Scroll>
*/

export default () => {
  const [items, setItems] = React.useState(lista);

  const AddNewItem = txt => {
    // alert('Foi executado');
    let newItems = [...items];
    newItems.push({
      id: uuid.v4(),
      task: txt,
      done: false,
    });
    setItems(newItems);
  };

  return (
    <Page>
      <StatusBar
        barStyle="dark-content" //// para as escritas ficarem brancas ou pretas;
        backgroundColor="#00ff00"
        hidden={false} /// se for true, a barra irá sumir;
        animated={true} /// para animar para sair e entrar;
      />
      <AddItemArea onAdd={AddNewItem} />
      <Listagem
        data={lista}
        renderItem={({item}) => <ListaItem data={item} />}
        keyExtractor={item => item.id}
      />
    </Page>
  );
};
