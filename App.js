import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, Touchable, TouchableWithoutFeedback, View } from 'react-native';
import { Bottompopup } from './bottompopup';
export default function App() {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  }

  const onClosePopup = () => {
    popupRef.close();
  }

  return (
    <>
      <StatusBar barStyle="dark-content">
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={onShowPopup}>
            <Text style={styles.txtSize}>Show popup</Text>
          </TouchableWithoutFeedback>
          <Bottompopup ref={(target => popupRef = target)}
            onTouchOutside={onClosePopup}
          />
        </SafeAreaView>
      </StatusBar>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSize: {
    fontSize: 20,
    color:'black'
  }
});
