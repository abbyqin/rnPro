import React from 'react';
import {Image, ImageStyle, SafeAreaView, Text, TextStyle, View, ViewStyle} from 'react-native';
import RNSwiper from '@/components/Swiper';
import { ProductItem } from '@/commons/entity';
import Cover from '@/components/Cover';
import Product from '@/fragment/ProductItem';

type Style = {
  wrapper: ViewStyle;
  slide: ViewStyle;
  text: TextStyle;
  image: ImageStyle;
  product: ViewStyle;
  productList: ViewStyle
}

const datas = [
  {
    cover: 'https://img.zcool.cn/community/01432060d95dce11013eaf70b049f8.jpg',
    title: '标题一',
    price: 100,
    id: '1'
  },
  {
    cover: 'https://img.zcool.cn/community/0155d760d9383e11013f4720cb32d8.jpg',
    title: '标题二',
    price: 200,
    id: '2'
  },
  {
    cover: 'https://img.zcool.cn/community/010f6760d9261411013f472075c85d.png',
    title: '标题三',
    price: 300,
    id: '3'
  }
]

export default class HomePage extends React.Component {
  private getDefaultStyle(): Style{
    return{
      wrapper: {
        width: '100%',
        height: 200,
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      },
      image: {
        height: '100%',
      },     
      productList: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,        
      },
      product: {
      },
    }
  }

  private getMixtrueStyle(): Style {
    return this.getDefaultStyle();
  }
  
  render() {
    const style = this.getMixtrueStyle();
    return (
      <SafeAreaView>
        <View style={style.wrapper}>
          <RNSwiper>
            {
              datas.map((item: ProductItem, index: Number) => {
                return (
                  <View key={item.id} style={style.slide}>
                    <Cover source={{uri: item.cover}} aspectRatio={16 /9}/>
                  </View>
                )
              })
            }            
          </RNSwiper>
        </View>
        <View style={style.productList}>
          {datas.map((item: ProductItem, index: Number) => {
            return (
              <Product style={style.product} title={item.title} cover={item.cover} price={item.price} />
            )
          })}
        </View>
      </SafeAreaView>
    );
  }
}
