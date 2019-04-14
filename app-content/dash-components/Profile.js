import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

export default class Profile extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {

    const {user} = this.props

    return (
      <View style={styles.container} >
        <View style={styles.nameWrap} >
          <Text style={styles.name} >{user.name}</Text>
        </View>

        <View style={styles.infoWrap} >
          <View style={styles.numberWrap} >
            <Text style={styles.numberHeading} >Phone</Text>
            <Text style={styles.number} >{user.phone}</Text>
          </View>
          <View style={styles.numberWrap} >
            <Text style={styles.numberHeading} >Location</Text>
            <Text style={styles.number} >{user.location}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  nameWrap: {
    paddingTop: 40,
    paddingLeft: 40
  },
  name: {
    fontFamily: 'ReemKufi',
    fontSize: 60,
    color: 'black',
  },
  infoWrap: {
    backgroundColor: 'rgb(241, 241, 241)',
    borderRadius: 1,
    paddingBottom: 30,
  },
  numberWrap: {
    paddingLeft: 60,
    paddingTop: 30,
  },
  numberHeading: {
    fontFamily: 'ReemKufi',
    fontSize: 15,
    color: 'black',
    // marginLeft: 20,
    color: 'white',
    alignSelf: 'flex-start',
    borderRadius: 100,
    backgroundColor: 'black',
    padding: 2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  number: {
    fontFamily: 'Helvetica',
    marginTop: 5,
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  }
})
