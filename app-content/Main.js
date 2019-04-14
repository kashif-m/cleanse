import React from 'react'
import {PanResponder, View, Text, StyleSheet, Dimensions, 
  TouchableNativeFeedback, PermissionsAndroid, Animation} from 'react-native'

import Dashboard from './Dashboard'
import CameraView from './CameraView'

var screenWidth = Dimensions.get('window').width

export default class Main extends React.Component {

  _panGesture = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
             && Math.abs(gestureState.dx) > 10
    },
    onPanResponderGrant: (evt, gestureState) => {
      if(!this.state.left === 0)
        this.setState({left: gestureState.moveX})
    },
    onPanResponderMove: (evt, gestureState) => {

      if(gestureState.dx < 0)
        this.setState({ left: Math.abs(gestureState.moveX) })
      else
        this.setState({ left: Math.abs(gestureState.moveX) })
    },
    onPanResponderRelease: () => this.moveFinished(),
    onPanResponderTerminate: this.moveFinished,
  })

  constructor(props) {
    super(props)

    this.state = {
      left: screenWidth,
      user: {
        name: 'Kashif',
        phone: '+91 85531 07083',
        location: 'Whitefield, Bangalore'
      }
    }
  }

  moveFinished = () => {

    if(this.state.left > screenWidth * 0.5)
      this.setState({left: screenWidth})
    if(this.state.left < screenWidth * 0.5) {
      this.setState({left: 0})
    }
  }

  render() {
    return (
      <View style={styles.main}
       {...this._panGesture.panHandlers} >
        <CameraView />
        <Dashboard user={this.state.user} left={this.state.left} setLeft={left => this.setState({left})} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
  }
})
