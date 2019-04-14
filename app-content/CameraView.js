import React, { Component } from 'react'
import {PanResponder, View, Text, StyleSheet, Dimensions, 
    TouchableNativeFeedback, PermissionsAndroid, Animation} from 'react-native'
import Camera from 'react-native-camera'
import axios from 'axios'
import firebase from './config/firebase'

const SCREEN_WIDTH = Dimensions.get('window').width

// SVGs
import Shutter from './images/Shutter'

export default class CameraView extends Component {

  constructor(props) {
    super(props)

    this.requestStoragePermission()
    this.requestCameraPermission()

    this.state = {
      uploaded: false
    }
  }

  requestCameraPermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  requestStoragePermission = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  clickPicture = () => {

    this.camera.capture()
      .then(data => {
        const blob = new Blob([new FileReader(data.path.slice(8))],
          {type: 'image/jpg'})
        firebase.storage().ref(`/phoneNumber/sadsa`)
          .put(blob)
          .then(res => {
            this.setState({uploaded: true})
            setTimeout(() => this.setState({uploaded: false}), 1500)
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <View style={styles.container}>
        <Camera
          ref={cam => {
            this.camera = cam
          }}
          {...this._panGesture}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
          flashMode={Camera.constants.FlashMode.auto} >
          <TouchableNativeFeedback
            style={styles.shutter} 
            onPress={() => this.clickPicture()} >
            <Shutter />
          </TouchableNativeFeedback>
        </Camera>
        {this.state.uploaded ?
        <View style={styles.success} >
          <Text style={styles.successInfo} >Successfully uploaded.</Text>
        </View>
        : null
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: Dimensions.get('window').width,
    flex: 1,
    flexGrow: 1
  },
  camera: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  success: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  successInfo: {
    fontFamily: 'ReemKufi',
    fontSize: 40,
    color: 'black',
    padding: 30
  }
})
