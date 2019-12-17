import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
// import Geocoder from 'react-native-geocoder';
import Geolocation from 'react-native-geolocation-service';


export default class LocationDemo extends Component {

    constructor() {
        super()
        this.state = {
            latitude: 0,
            longitude: 0,
            error: null
        }
    }

    watchMap = () => {
        this.watchID = Geolocation.watchPosition((lastPosition) => {
            console.log('In Watch', lastPosition)
            this.setState({
                latitude: lastPosition.coords.latitude,
                longitude: lastPosition.coords.longitude,
            });
        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 });
    }

    async componentDidMount() {
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => {
                // See error code charts below.
                this.setState({ error: error.message }),
                    this.watchMap();
                    console.log(error.code, error.message);
            },
            { enableHighAccuracy: false, timeout: 1000, maximumAge: 100000 }
        );
    }

    componentWillUnmount() {
        Geolocation.clearWatch(this.getLongLat);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.text}> Latitude = {this.state.latitude}</Text>
                <Text style={styles.text}> Longitude = {this.state.longitude}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
        padding: 11
    },
    text: {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },
});