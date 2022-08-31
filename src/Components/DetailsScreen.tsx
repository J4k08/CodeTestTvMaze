import React, { FC, useState } from 'react';
import {
    View, Text, Button, StyleSheet, Image, Modal
} from 'react-native';
import { Show } from '../Data/Model/Shows';


interface ModalProps {
    show: Show;
    onClose: () => void;
    visible: boolean;
}

// Simple 'detail view', or modal component
export const DetailsScreen: FC<ModalProps> = (props) => {
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <View style={styles.contentWrapper}>
                    <View style={styles.modelContent}>
                        <Text style={styles.title}>
                            {props.show.name}</Text>
                        <Image style={styles.image}
                            source={{ uri: props.show.image.medium }}
                        />
                        <Text style={styles.summary}>
                            {props.show.summary}</Text>
                        <Button title='Close' onPress={props.onClose}></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'rgba(0,0,0,0.3',
    },
    contentWrapper: {
        flex: 1,
    },
    modelContent: {
        backgroundColor: "white",
        justifyContent: "center",
    },
    image: {
        padding: 15,
        alignSelf: "center",
        width: 150,
        height: 150,
    },
    title: {
        padding: 15,
        alignSelf: "center",
        fontSize: 40,

    },
    summary: {
        fontSize: 15,
        padding: 15,
    }
});
