import React from "react";
import { SafeAreaView, Text } from "react-native";

const MyContainer = (wrappedComponent: any) =>
  class extends wrappedComponent {
    render() {
      if (this.props.loggedIn) {
        const ren = super.render();
        console.log('ren', ren)
        let newProps = {}
        if (ren) {
          newProps = { value: '反向继承' };
        }
        const props = Object.assign({}, this.props, newProps);
        console.log(props)
        return <SafeAreaView>
          <Text>高阶组件头部</Text>
          {this.props.loggedIn ? <Text>{props.value}</Text> : <Text>123</Text>}
          {super.render()}
          <Text>高阶组件-尾巴</Text>
        </SafeAreaView>
      } else {
        return null
      }
    }
  }

export default MyContainer;