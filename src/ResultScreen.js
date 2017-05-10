import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ResultScreen extends Component {
  static navigationOptions = {
    title: 'Результат',
  };


  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={ styles.container }>
          <Text style={styles.textResult}>
            {params.result}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textResult: {
    color: '#2C2C2C',
    textAlign: 'center',
    fontSize: 20,
  },
});