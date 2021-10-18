import React from "react";
import { Pressable, View, ViewStyle, Text, ViewProps, TextStyle } from "react-native";
import { ThemeContext } from '@/commons/context';
// import emitter from '@/commons/events';

type Style = {
  wrapper: ViewStyle;
  font: TextStyle;
}

interface ListItemProps extends ViewProps{
  text: String;
  parentClick: ()=>void;
}

export default class  ListItem extends React.Component<ListItemProps> {
  static displayName = 'ListItem'

  static contextType = ThemeContext;

  static defaultProps = {
    text: 'this is children',
    parentClick: ()=>{},
  }

  constructor(props: any) {
    super(props)
  }

  private getDefaultStyle(): Style{
    const theme = this.context;
    return{
      wrapper:{
        backgroundColor: theme.background,
      },
      font:{
        color: theme.foreground,
      }
    }
  }

  private getMixtrueStyle(): Style{
    return this.getDefaultStyle()    
  }

  handleClick = (entry: any) => {
    console.log('this is handleClick');
    // emitter.emitEvent('ItemClick', 'emitter events');
    this.props.parentClick(); //调用父组件
  }

  childrenClick(){
    console.log('我是子组件  -----》 自组件 传值');
  }

  render(){
    const style = this.getMixtrueStyle();
    return(
      <View style={style.wrapper}>
        <Pressable onPress={this.handleClick.bind(this)}>
          <View >
            <Text style={style.font}>Click1111</Text>
          </View>
        </Pressable>
      </View>
    )
  }
}