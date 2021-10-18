import React from "react";
import { View } from "react-native";
import { Text } from "react-native-svg";

export default class CommentList extends React.Component {
  constructor(props: any){
    super(props)
  }
  state = {
    comments: [{
      id: ''
    }]
  }
  
  render(){
    return(
      <View>
        
         {this.state.comments.map((comment) => (
          <Text>{comment}{comment.id}</Text>
        ))}
      </View>
    )
  }
}