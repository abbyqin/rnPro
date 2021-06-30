import { ProductItem } from "@/commons/entity";
import Cover from "@/components/Cover";
import React from "react";
import { ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import Svg from '@/components/Svg';

type Style={
  wrapper: ViewStyle,
  cover: ImageStyle,
  content: ViewStyle,
  title: TextStyle,
  price: TextStyle,
  icon: ImageStyle,
}

interface ProductProp extends ProductItem{
  style?:ViewStyle
}

export default class Product extends React.Component<ProductProp>{
  static displayName = 'Product'
  private getDefaultStyle(): Style{
    return {
      wrapper:{       
        borderRadius: 10,
        overflow: "hidden",
        paddingHorizontal: 5,
        marginBottom: 20,
      },
      cover:{
        width: '100%',
        aspectRatio: 1,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#eff6f7',
        borderRadius:5,
        marginBottom: 10,        
      },
      icon: {
        alignSelf: 'center',
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
    Object.assign(style.wrapper, StyleSheet.flatten(this.props.style));
    return style
  }

  render(){
    const style = this.getMixtrueStyle()
    const {cover, title, price} = this.props
    return(
      <View style={style.wrapper}>
        {/* <Cover source={{uri: cover}} style={style.cover}/> */}
        <View style={style.cover}>
          <Svg icon={cover} size='60' style={style.icon}></Svg>
        </View>        
        <View style={style.content}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.price}>{price}</Text>
        </View>
      </View>
    )
  }
}