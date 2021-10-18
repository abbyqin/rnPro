import React from "react"
// 属性代理
interface HocProps{
  str: string 
}
const Hoc = (WrappedComponent: any, clickFn: void) => {
  return class extends React.Component {
    constructor(props: Object){
      super(props)
    }
    state = {
      str:'test'
    }
    componentDidMount(){
     
    }
    componentWillUnmount(){

    }
    handleClick(){
      this.setState({
          str:'ddddd'
      })
    }
    render(){
      return <WrappedComponent str={this.state.str} {...this.props}/>
    }
  }
}

export default Hoc