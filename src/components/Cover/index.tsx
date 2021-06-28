import React from 'react';
import {Image, ImageStyle, StyleSheet, ViewProps, ViewStyle} from 'react-native';

type Style = {
  wrapper: ViewStyle,
  img: ImageStyle
}

interface CoverProps extends ViewProps{
  source: {
    uri: string;
  };
  aspectRatio?: number;
}

export default class Cover extends React.Component<CoverProps> {
  static defaultProps = {
    aspectRatio : 1
  }

  private getDefaultStyle(): Style {
    return {
      wrapper: {},
      img: {
        width: '100%',
      },
    };
  }

  private getMixtrueStyle(): Style {
    const style = this.getDefaultStyle();
    Object.assign(style, StyleSheet.flatten(this.props.style));
    return style;
  }

  render() {
    const style = this.getMixtrueStyle()
    return (
      <Image
        style={[style.img, {aspectRatio: this.props.aspectRatio}]}
        source={this.props.source}
      />
    );
  }
}