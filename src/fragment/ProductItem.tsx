import { ProductItem } from "@/commons/entity";
import Cover from "@/components/Cover";
import React from "react";
import { ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

type Style={
  wrapper: ViewStyle,
  cover: ImageStyle,
  content: ViewStyle,
  title: TextStyle,
  price: TextStyle
}

interface ProductProp extends ProductItem{
  style?:ViewStyle
}

export default class Product extends React.Component<ProductProp>{
  static displayName = 'Product'
  private getDefaultStyle(): Style{
    return {
      wrapper:{       
        width: '30%',
        borderRadius: 10,
        overflow: "hidden",
        marginHorizontal: 5
      },
      cover:{
        width: 110,
        height: 110
      },
      content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      title: {},
      price: {}
    }
  }

  private getMixtrueStyle(): Style{
    const style = this.getDefaultStyle()
    Object.assign(style, StyleSheet.flatten(this.props.style));
    return style
  }

  render(){
    const style = this.getMixtrueStyle()
    const {cover, title, price} = this.props
    return(
      <View style={style.wrapper}>
        <Cover source={{uri: cover}} style={style.cover}/>
        <View style={style.content}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.price}>{price}</Text>
        </View>
      </View>
    )
  }
}