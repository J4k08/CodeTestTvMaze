import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, FlatList } from "react-native"
import { ListSearchResult } from "./ListSearchResult";
import { Series, Shows } from "../Data/Model/Shows";
import { getShowdata } from "../Data/API/TVMaze";

// handles views and call to api
export const Search = () => {

  const [userInput, setUserInput] = useState("")
  const [query, setQuery] = useState("")
  const [shows, setShows] = useState<Series[]>()
  
  // calls api for a list of shows
  //TODO make sure data's loaded before showing
  const handleSearch = async () => {
    setShows(await getShowdata(userInput));
    console.log(shows);
  };

  useEffect(() => {

    handleSearch()
  
}, [query]);


  return (
    <View style={styles.container}>
      
      <View style={styles.searchField}>
        <TextInput 
          style={{borderWidth:1, fontSize: 25}}
          placeholderTextColor={"#555"}
          placeholder="Type in a Tv-show" 
          onChangeText={newInput => setUserInput(newInput)}
          >
        </TextInput>
          <Button
            title="Search"
            onPress={() => setQuery(userInput)}    
                />
          </View>
        
        <View>
        <FlatList
          data={Shows}
          renderItem={({ item }) => (
      
      <ListSearchResult 
        id={item.show.id}
        name={item.show.name}
        summary={item.show.summary}
        image={item.show.image}
        url={item.show.url}/>
    )}/>
        </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: "center",
  },
  searchField: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 50,
  
  },
})




