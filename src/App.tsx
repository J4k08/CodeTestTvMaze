import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Search } from './Components/Search';
import { Series, Shows } from './Data/Model/Shows';
import { ListSearchResult } from './Components/ListSearchResult';

const App: FC = () => {

  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Search />          
    </View>
  </SafeAreaView>
  )
}
/*

<SearchResult
        id={item.show.id}
        name={item.show.name}
        summary={item.show.summary}
        image={item.show.image}
        url={item.show.url}
        genres={item.show.genres}  />
        */

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});