import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

interface BoxPhotoInputProps {}

const BoxPhotoInput: React.FC<BoxPhotoInputProps> = () => {
    const [photo, setPhoto] = useState<any>(null);
    const { colors } = useTheme();

    const choosePhoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0]);
        }
    };

    return (
        <TouchableOpacity style={[styles.container, { borderColor: '#707181' }]} onPress={choosePhoto}>
            {photo ? (
                <Image source={{ uri: photo.uri }} style={styles.photo} />
            ) : (
                <View style={styles.placeholder}>
                    <IconButton icon="tray-arrow-up" size={30} iconColor={colors.outline} />
                    <Text style={[styles.text, { color: '#707181' }]}>Choose a photo</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: 360,
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
    },
    placeholder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 14
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
});

export default BoxPhotoInput;