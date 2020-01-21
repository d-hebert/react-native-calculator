import React from 'react';
import { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

export default class Calvin extends Component {
    render () {
        let pic = {
            uri:
    'https://nationalpostcom.files.wordpress.com/2013/11/calvin-hobbes.jpg?quality=80&strip=all&w=604&zoom=2'
        };
        return (
            <Image source={pic} style={styles.image} />
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 193,
        height: 200
    }
})