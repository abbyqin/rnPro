import React from "react";
import { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import MyContainer from "./hoc";

interface cProps{
  loggedIn: boolean
}
class MyComponent extends Component<cProps> {
  static defaultProps = {
    loggedIn : true
  }
  render(){
    console.log(this.props)
    return (
      <SafeAreaView>
        <Text>包裹的组件</Text>
      </SafeAreaView>
    )
  }
}

export default MyContainer(MyComponent)