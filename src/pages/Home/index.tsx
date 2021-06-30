import React from 'react';
import {Image, ImageStyle, SafeAreaView, Text, TextStyle, View, ViewStyle} from 'react-native';
import RNSwiper from '@/components/Swiper';
import { ProductItem } from '@/commons/entity';
import Cover from '@/components/Cover';
import Product from '@/fragment/ProductItem';
import Svg from '@/components/Svg';

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
    cover: 'apple',
    title: '标题一',
    price: 100,
    id: '1'
  },
  {
    cover: 'apricot',
    title: '标题二',
    price: 200,
    id: '2'
  },
  {
    cover: 'blueberry',
    title: '标题三',
    price: 300,
    id: '3'
  },
  {
    cover: 'orange-1',
    title: '标题si',
    price: 300,
    id: '4'
  },
  {
    cover: 'pineapple',
    title: '标题si',
    price: 300,
    id: '5'
  },
  {
    cover: 'pomegranate2',
    title: '标题si',
    price: 300,
    id: '6'
  },
  {
    cover: 'pomegranate2',
    title: '标题si',
    price: 300,
    id: '7'
  },
  {
    cover: 'strawberry-1',
    title: '标题si',
    price: 300,
    id: '8'
  },
  {
    cover: 'tomato',
    title: '标题si',
    price: 300,
    id: '9'
  },
  {
    cover: 'watermelon',
    title: '标题si',
    price: 300,
    id: '10'
  },
  {
    cover: 'lemon',
    title: '标题si',
    price: 300,
    id: '11'
  },
  {
    cover: 'grapes',
    title: '标题si',
    price: 300,
    id: '12'
  },
  {
    cover: 'kiwi',
    title: '标题si',
    price: 300,
    id: '13'
  },
  {
    cover: 'lime',
    title: '标题si',
    price: 300,
    id: '14'
  },
  {
    cover: 'avocado',
    title: '标题si',
    price: 300,
    id: '15'
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
        flexWrap: 'wrap',
        marginVertical: 10,
        marginHorizontal: 5,
      },
      product: {
        width: '33.33%',
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
                    {/* <Cover source={{uri: item.cover}} aspectRatio={16 /9}/> */}
                    <Svg icon={item.cover} size='30'></Svg>
                  </View>
                )
              })
            }            
          </RNSwiper>
        </View>
        <View style={style.productList}>
          {datas.map((item: ProductItem, index: Number) => {
            return (
              <Product style={style.product} key={item.id} title={item.title} cover={item.cover} price={item.price} />
            )
          })}
        </View>
      </SafeAreaView>
    );
  }
}
