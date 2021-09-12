import {apptypes} from '@apptypes';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import withShareCapture from './hoc/withShareCapture';

const App = ({shareState}: {shareState: apptypes.shareState}) => {
  if (shareState.isSharedNow) {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>BOOK MARKER</Text>
        <Text> share site : {shareState.bookmarkItem.site}</Text>
        <Text> share site : {shareState.bookmarkItem.description}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>BOOK MARKER</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  image: {
    width: '100%',
    height: 200,
  },
});

export default withShareCapture(App);
