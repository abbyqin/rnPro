import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MySwiper from '@/components/Swiper';

export default class HomePage extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.wrapper}>
          <MySwiper />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 300,
  },
});
