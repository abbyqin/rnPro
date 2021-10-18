import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import ListItem from '@/fragment/listItem';
import { ThemeContext, themes } from '@/commons/context';
// import emitter from '@/commons/events'

type Style = {
  wrapper: ViewStyle;
  wrapper2: ViewStyle;
}

interface HomePageProps {

}

export default class HomePage extends React.Component<HomePageProps> {
  constructor(props: any){
    super(props);    
  }

  static contextType = ThemeContext;
  state = {
    theme: themes.light
  }

  // componentDidMount(){
  //   this.itemClick = emitter.addListener('ItemClick', (msg, data)=>{
  //     console.log('llll', data)
  //   })
  // }
  itemRef = React.createRef<ListItem>();

  private getDefaultStyle(): Style {
    let theme = this.context;    
    return {
      wrapper: {
        width: '100%',
      },
      wrapper2: {
        width: '100%',
        height: 50,
        backgroundColor: theme.background,
        marginTop: 50,
      },
    }
  }

  private getMixtrueStyle(): Style {
    return this.getDefaultStyle();
  }

  parentClick(){
    console.log('父组件事件！');
  }

  parentChildrenClick(){
    console.log(this.itemRef);
    this.itemRef.current && this.itemRef.current.childrenClick()
    // this.ref.current.ListItem;
  }

  changeTheme(){
    console.log('change theme');
    this.setState((state)=>({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    }));
    console.log(this.state);
  }

  render() {
    const style = this.getMixtrueStyle();
    
    return (
      <SafeAreaView>
        <View style={style.wrapper}>
          <ThemeContext.Provider value={this.state.theme}>
            <ListItem ref={this.itemRef} parentClick={this.parentClick}/>
          </ThemeContext.Provider>     
        </View>
        <TouchableOpacity onPress={this.parentChildrenClick.bind(this)}>
          <Text>我是父组件</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.wrapper2} onPress={this.changeTheme.bind(this)}>
          <Text>2222</Text>
        </TouchableOpacity>
      </SafeAreaView>
      
    );
  }
}
