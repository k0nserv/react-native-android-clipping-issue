/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          >
            <View style={styles.button}>
              <Text>My Button</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
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
  buttonContainer: {
    borderRadius: 50,
    height: 36,
    overflow: 'visible',
  },
  button: {
    borderRadius: 50,
    borderWidth: 1,
    height: 36,
    borderColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
