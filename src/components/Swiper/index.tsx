import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Swiper from 'react-native-swiper';

type Style = {
  wrapper: ViewStyle;
  slide1: ViewStyle;
  slide2: ViewStyle;
  slide3: ViewStyle;
  text: TextStyle;
};

export default class MySwiper extends React.Component<ViewProps> {
  private getDefaultStyle(): Style {
    return {
      wrapper: {},
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      },
    };
  }

  private getMixtrueStyle(): Style {
    const style = this.getDefaultStyle();
    Object.assign(style, StyleSheet.flatten(this.props.style));
    return style;
  }

  render() {
    const styles = this.getMixtrueStyle();
    return (
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View testID="Hello" style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View testID="Beautiful" style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}
