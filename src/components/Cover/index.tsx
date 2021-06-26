import React from 'react';
import {Image, StyleSheet} from 'react-native';

interface CoverProps {
  source: {
    uri: string;
  };
  aspectRatio: number;
}

export default class Cover extends React.Component<CoverProps> {
  render() {
    return (
      <Image
        style={[styles.img, {aspectRatio: this.props.aspectRatio}]}
        source={this.props.source}
      />
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
  },
});
