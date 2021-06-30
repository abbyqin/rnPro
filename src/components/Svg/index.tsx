// Svgs.js
import { SvgProperties } from 'csstype';
import React, { Component } from 'react';

import SvgUri from 'react-native-svg-uri';
import svgs from '@/assets/Svg';
import { ViewStyle } from 'react-native';

interface SvgProps{
  icon: string,
  color: string,
  size: number,
  style: ViewStyle
}

export default class Svgs extends Component<SvgProps,void>{
  render() {
    const {
      icon,
      color,
      size,
      style
    } = this.props;
    let svgXmlData = svgs[icon];
    if (!svgXmlData) {
     let err_msg = `没有"${icon}"这个icon，请下载最新的icomoo并 npm run build-js`;
     throw new Error(err_msg);
    }
    return (
      <SvgUri
        width={size}
        height={size}
        svgXmlData = {svgXmlData}
        fill={color}
        style={style}
      />
    )
  }
}
