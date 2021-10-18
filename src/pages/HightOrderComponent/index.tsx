import React from "react"
import { SafeAreaView, Text } from "react-native"
import Hoc from "./Hoc"

interface HocProps {
  str: {
    text: string
  }
}
class page1 extends React.Component<HocProps>{
  render() {
    return (
      <SafeAreaView>
        <Text>{this.props.str}</Text>
      </SafeAreaView>
    )
  }
}

function handlePage1(str: string) {
  console.log('page1', str)
}

export default Hoc(page1, handlePage1('Hi'))
