import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    
    componentDidMount () {
        setInterval( () => (
            this.setState(prevState => (
                { isShowingText: !prevState.isShowingText }
            ))
        ), 1000);
    }

    state = { isShowingText: true };

    render () {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render () {
        return (
            <View>
                <Blink text="Hello, world!" />
                <Blink text="Welcome to my first mobile app!" />
            </View>
        )
    }
}