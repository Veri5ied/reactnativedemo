import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
      <View>
        <Text style={[styles.cyanColor, styles.spacing, styles.text]}>
          Cyan
        </Text>
      </View>
      <View>
        <Text style={[styles.blueColor, styles.spacing, styles.text]}>
          Blue
        </Text>
      </View>
      <View>
        <Text style={[styles.magentoColor, styles.spacing, styles.text]}>
          Magento
        </Text>
      </View>
      <View>
        <Text style={[styles.orangeColor, styles.spacing, styles.text]}>
          Orange
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  cyanColor: {
    backgroundColor: 'cyan',
  },

  blueColor: {
    backgroundColor: 'blue',
  },

  magentoColor: {
    backgroundColor: '#d33682',
  },

  orangeColor: {
    backgroundColor: '#cb4b16',
  },

  spacing: {
    margin: 4,
    padding: 10,
    color: '#ffffff',
  },

  viewBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
