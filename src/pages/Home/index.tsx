import React from 'react';
import { Image, ImageStyle, SafeAreaView, ScrollView, Text, TextStyle, View, ViewStyle } from 'react-native';
import Swiper from '@/components/Swiper';
import { ProductItem } from '@/commons/entity';
import Product from '@/fragment/ProductItem';
import Icon from '@/components/Icon';

const datas = require('@/data/data.json');
type Style = {
  wrapper: ViewStyle;
  slide: ViewStyle;
  text: TextStyle;
  image: ImageStyle;
  product: ViewStyle;
  productList: ViewStyle
}

export default class HomePage extends React.Component {
  private getDefaultStyle(): Style {
    return {
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
        <ScrollView>
          <View style={style.wrapper}>
            <Swiper>
              {
                datas.map((item: ProductItem, index: Number) => {
                  return (
                    <View key={item.id} style={style.slide}>
                      <Icon name={item.cover} size={30}></Icon>
                    </View>
                  )
                })
              }
            </Swiper>
          </View>
          <View style={style.productList}>
            {datas.map((item: ProductItem, index: Number) => {
              return (
                <Product style={style.product} key={item.id} title={item.title} cover={item.cover} price={item.price} />
              )
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
