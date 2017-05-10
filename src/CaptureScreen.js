import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Camera from 'react-native-camera';

var {height, width} = Dimensions.get('window');

export default class CaptureScreen extends Component {
  constructor() {
    super();
    this.state = {
      cameraOn: false,
    }
  }

  static navigationOptions = {
    header: null,
  }

  showCamera = () => {
    this.setState({
      cameraOn: true
    })
  }

  takePicture = () => {
    this.camera.capture()
      .then()
      .catch(err => alert(err));
  }

  showResult = (e) => {
    if (e.data) {
      this.setState({cameraOn: false}, () => {
        const { navigate } = this.props.navigation;
        navigate('ResultScreen', { 
          result: e.data
        })
      })
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        {this.state.cameraOn ?
          <Camera
            captureTarget={ Camera.constants.CaptureTarget.temp }
            ref={ cam => {this.camera = cam} }
            style={ styles.preview }
            onBarCodeRead={this.showResult}
            >
          </Camera> :
          <TouchableOpacity 
            style={ styles.button }
            onPress={ this.showCamera }>
              <Text style={ styles.button_text }>Начать поиск</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#505050',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    height: width - 100,
    width: width - 100,
    backgroundColor: '#C6C6C6',
  },
  button: {
    height: width - 100,
    width: width - 100,
    backgroundColor: '#C6C6C6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    fontSize: 36,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});