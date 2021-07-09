import React from 'react';
import {
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import Swiper, { SwiperProps } from 'react-native-swiper';

type Style = {
  wrapper: ViewStyle;
};

interface SwiperProp extends SwiperProps {
  option?:{
    showsButtons?: true,
    loop?: false,
  } 
}

export default class MySwiper extends React.Component<SwiperProps> {
  static displayName = 'Swiper'
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
    const operation = this.props
    return (
      <Swiper style={styles.wrapper} {...operation}>
       {this.props.children}
      </Swiper>
    );
  }
}
