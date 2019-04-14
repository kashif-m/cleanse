import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Stats extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const {stats} = this.props
    
    return (
      <View style={styles.container} >
        <Text style={styles.heading} > Statistics</Text>
        <View style={styles.factWrap} >
          <Text style={styles.factHeading} >Pictures clicked</Text>
          <Text style={styles.fact} >{stats.totalPictures}</Text>
          <Text style={styles.factHeading} >Points earned</Text>
          <Text style={styles.fact} >{stats.points}</Text>
          <Text style={styles.factHeading} >Pictures clicked / day</Text>
          <Text style={styles.fact} >{stats.picturesADay}</Text>
          <Text style={styles.accuracy} >Your clicks help <Text style={styles.percentage} >{stats.accuracy}%</Text> of the times.</Text>
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
  heading: {
    fontFamily: 'ReemKufi',
    color: 'black',
    fontSize: 60,
    paddingLeft: 40,
    paddingTop: 40,
  },
  factWrap: {
    paddingLeft: 60,
    paddingTop: 30,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  factHeading: {
    fontFamily: 'ReemKufi',
    color: 'black',
    fontSize: 20,
  },
  fact: {
    fontFamily: 'Helvetica',
    backgroundColor: 'black',
    fontSize: 40,
    color: 'white',
    borderRadius: 100,
    marginLeft: 10,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'flex-start',
  },
  accuracy: {
    fontFamily: 'ReemKufi',
    color: 'black',
    fontSize: 30,
    marginTop: 40,
    maxWidth: SCREEN_WIDTH * 0.75,
  },
  percentage: {
    fontSize: 50,
    fontWeight: '600',
  }
})
