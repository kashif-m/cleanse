import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Community extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {community, user} = this.props

    return (
      <View style={styles.wrap} >
        <Text style={styles.location} >{user.location}</Text>
        {
          community.map(key => <Text key={`${new Date().getTime()}-${key.name}`} style={styles.name} >{key.name}</Text>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 40,
  },
  people: {
    flexDirection: 'column'
  },
  name: {
    backgroundColor: 'rgb(241, 241, 241)',
    fontFamily: 'ReemKufi',
    fontSize: 30,
    color: 'black',
    marginLeft: 60,
    marginRight: 60,
    padding: 5,
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 10,
    borderRadius: 2,
    // alignSelf: 'flex-start',
  },
  location: {
    fontFamily: 'ReemKufi',
    fontSize: 50,
    color: 'black',
    marginBottom: 30,
    alignSelf: 'center',
  }
})
