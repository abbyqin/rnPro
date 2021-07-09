// Svgs.js
import { SvgProperties } from 'csstype';
import React, { Component } from 'react';

import SvgUri, { SvgUriProps } from 'react-native-svg-uri';
import svgs from '@/assets/Svg';
import { View, ViewProps, ViewStyle } from 'react-native';

interface IconProps{
  name: string,
  color?: string,
  size: number,
  style?: ViewStyle
}

export default class Icon extends Component<IconProps>{
  static displayName= 'Icon'
  render() {
    const {
      name,
      color,
      size,
      style
    } = this.props;
    let svgXmlData = svgs[name];
    if (!svgXmlData) {
     let err_msg = `没有"${name}"这个icon，请下载最新的icomoo并 npm run build-js`;
     throw new Error(err_msg);
    }
    return (
      <View style={style}>
      <SvgUri
        width={size}
        height={size}
        svgXmlData = {svgXmlData}
        fill={color}        
      />
      </View>
    )
  }
}
