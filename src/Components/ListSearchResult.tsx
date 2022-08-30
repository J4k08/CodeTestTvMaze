import React, { FC, useState } from "react"
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Modal } from "react-native"
import { Show } from "../Data/Model/Shows"
import { DetailsScreen } from "./DetailsScreen";

// component for displaying results in a list
export const ListSearchResult: FC<Show> = (props) => {

    const [openModal, setOpenModal] = useState(false);
    const onClose = () => {
        setOpenModal(false)
    };

    return (
        <View>
            <TouchableOpacity
            onPress={ () => {setOpenModal(true)}}>
    
            <View style={styles.container}>
                <View
                    style={{
                    ...styles.listItem,
                    alignItems: "flex-start"                        
                    }}>
                   <Text>{props.name}</Text>
               </View>
                <View style={{ ...styles.listItem, alignItems: "flex-end"}}>
                    <Image
                    style={{width: 50, height: 50}}
                    source={{uri: props.image.medium}}
                    />
                </View>
            </View>
            </TouchableOpacity>
            <DetailsScreen
            show={props}
            visible={openModal}
            onClose={onClose}
            ></DetailsScreen>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: 350,
        borderBottomWidth: 1,
        borderbottomColor: "#aaa",
        marginVertical: 10,
    },
    listItem: {
        flex: 0.5,
        justifyContent: "center"
    },
    item: {
        padding: 5,
        fontWeight: "600",
        fontSize: 16,
    },
});