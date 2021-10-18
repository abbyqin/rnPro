import { ProductItem } from "@/commons/entity";
import Cover from "@/components/Cover";
import Icon from "@/components/Icon";
import Swiper from "@/components/Swiper";
import axios from "axios";
import React from "react";
import { ScrollView, View, ViewStyle, TextStyle, Text } from "react-native";

const datas = require('@/data/detail.json');
type Style = {
  detailHeader: ViewStyle,
  wrap: ViewStyle,
  scrollView: ViewStyle,
  slide: ViewStyle,
  swiper: ViewStyle,
  bannerBtn: ViewStyle,
  countWrap: ViewStyle,
  reduceBtn: ViewStyle,
  reduceText: TextStyle,
  count: TextStyle,
  addBtn: ViewStyle,
  addText: TextStyle,
  addCart: ViewStyle,
  cartText: TextStyle,
  detailBottom: ViewStyle,
  title: TextStyle,
  info: TextStyle,
  desc: TextStyle,
  line: ViewStyle,
}

export default class DetailPage extends React.Component {
  constructor(props:any){
    super(props);
  }
  private getDefaultStyle(): Style {
    const black = "#333333";
    const grey = "#e1e1e1"
    return {
      wrap: {
        backgroundColor: '#e0e0e0',
        flex: 1
      },
      scrollView: {
        // flex: 1,
      },
      detailHeader: {
        width: '100%',
        // flex:1,
        height: 500,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      },
      swiper: {
        marginBottom: 25,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: '#ffffff'
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bannerBtn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        bottom: 0,
      },
      countWrap: {
        width: 130,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: black,
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginRight: 20,
      },
      reduceBtn: {
        width: 30,
        height: 30,
        backgroundColor: grey,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      reduceText: {
        color: black,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 22,
      },
      count: {
        fontWeight: 'bold'
      },
      addBtn: {
        width: 30,
        height: 30,
        backgroundColor: black,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      addText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 22,
      },
      addCart: {
        width: 130,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: black,
        borderRadius: 8,
        shadowColor: black,
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      cartText: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold'
      },
      detailBottom: {
        flex: 1,
      },
      line: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingHorizontal: 16,
      },
      title: {
        fontSize: 20,
        color: black,
        fontWeight: 'bold'
      },
      info: {
        fontSize: 14,
        color: '#7a7a7a'
      },
      desc: {
        marginTop: 30,
        letterSpacing: 1,
        lineHeight: 20,
        fontSize: 14,
        color: '#7a7a7a',
        textAlign: 'justify',
        paddingHorizontal: 16,
        marginBottom: 30
      }
    }
  }

  private getMixtrueStyle(): Style {
    return this.getDefaultStyle();
  }
  // async componentDidMount(){
  //   const {data} = await axios.get('/');
  //   console.log('数据 : ', data)
  // }

  private async getDataList(){
    const {data} = await axios.get('/');
    console.log('数据 : ', data)
  }



  render() {
    const style = this.getMixtrueStyle();
    this.getDataList();
    return (
      <View style={style.wrap}>
        <ScrollView contentContainerStyle={style.scrollView}>
          <View style={style.detailHeader}>
            <View style={style.swiper}>
              <Swiper
                activeDotStyle={{
                  backgroundColor: '#333333',
                  borderWidth: 2,
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginBottom: 30,
                  marginRight: 5,
                  marginLeft: 5
                }}
                dotStyle={
                  {
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderColor: '#333333',
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    marginBottom: 30,
                    marginRight: 5,
                    marginLeft: 5
                  }
                }
              >
                {
                  datas.map((item: ProductItem, index: Number) => {
                    return (
                      <View key={item.id} style={style.slide}>
                        <Icon name={item.cover} size={100}></Icon>
                      </View>
                    )
                  })
                }
              </Swiper>
            </View>
            <View style={style.bannerBtn}>
              <View style={style.countWrap}>
                <View style={style.reduceBtn}>
                  <Text style={style.reduceText}>-</Text>
                </View>
                <Text style={style.count}>1</Text>
                <View style={style.addBtn}>
                  <Text style={style.addText}>+</Text>
                </View>
              </View>
              <View style={style.addCart}>
                <Text style={style.cartText}>加入购物车</Text>
              </View>
            </View>
          </View>
          <View style={style.detailBottom}>
            <View style={[style.line, { marginTop: 50 }]}>
              <Text style={style.title}>Coconut</Text>
              <Text style={style.title}>¥20</Text>
            </View>
            <View style={style.line}>
              <Text style={style.info}>12345</Text>
              <Text style={style.info}>月销量1000</Text>
            </View>
            <View>
              <Text style={style.desc}>
                这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本
                这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本
                这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本
                这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本
                这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本
                这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本
                这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本，这是一段介绍文本文本这是一段介绍文本文本这是一段介绍文本文本
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Cover source={{ uri: "https://hellorfimg.zcool.cn/provider_image/preview260/2239326502.jpg" }} />
            </View>
            <View style={{ flex: 1 }}>
              <Cover source={{ uri: "https://hellorfimg.zcool.cn/provider_image/preview260/2239326502.jpg" }} />
            </View>
            <View style={{ flex: 1 }}>
              <Cover source={{ uri: "https://hellorfimg.zcool.cn/provider_image/preview260/2239326502.jpg" }} />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}