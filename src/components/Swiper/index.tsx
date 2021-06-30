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
};

interface SwiperProp extends ViewProps {
  option?:{
    showsButtons?: true,
    loop?: false
  } 
}

export default class MySwiper extends React.Component<SwiperProp> {
  static displayName = 'RNSwiper'
  private getDefaultStyle(): Style {
    return {
      wrapper: {}      
    };
  }

  private getMixtrueStyle(): Style {
    const style = this.getDefaultStyle();
    Object.assign(style.wrapper, StyleSheet.flatten(this.props.style));
    return style;
  }

  render() {
    const styles = this.getMixtrueStyle();
    const operation = this.props.option
    return (
      <Swiper style={styles.wrapper} {...operation}>
       {this.props.children}
      </Swiper>
    );
  }
}
