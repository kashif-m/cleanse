import React, { Component } from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableNativeFeedback, Animated, Easing} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

import Community from './dash-components/Community'
import Profile from './dash-components/Profile'
import Stats from './dash-components/Stats'
// SVGs
import Group from './images/Group'
import ProfileIcon from './images/ProfileIcon'
import ShutterBlack from './images/ShutterBlack'
import StatsIcon from './images/StatsIcon'

export default class Dashboard extends Component {

  translate = new Animated.Value(SCREEN_WIDTH)
  constructor(props) {
    super(props)
    
    this.left = props.left

    this.state = {
      screen: '',
      stats: {
        totalPictures: 54,
        points: 456,
        picturesADay: 5,
        accuracy: 84
      },
      community: [{
        name: 'Raunak',
        location: 'Kagdasapura'
      }, {
        name: 'M S',
        location: 'Kagdasapura'
      }, {
        name: 'Chet',
        location: 'Kagdasapura'
      }]
    }
  }

  componentWillUpdate(nextProps, nextState) {
    this.left = nextProps.left
    Animated.timing(this.translate, {
      toValue: this.left,
      duration: 100,
      easing: Easing.ease,
      useNativeDriver: true
    }).start()
  }

  render() {

    const screen = this.state.screen
    const {user} = this.props

    return (
      <Animated.View style={[styles.dashboard, {transform: [{translateX: this.translate}]}]} >

        {/* <View style={styles.rewardsWrap}> */}
          {/* <Text style={styles.rewardsHeading} > Total Rewards</Text> */}
          {/* <View style={styles.rewardWrap} > */}
            {/* <Text style={[styles.rewardsHeading, styles.rewards]} >₹  0.45</Text> */}
            {/* <Text style={styles.checkout} >Checkout</Text> */}
          {/* </View> */}
        {/* </View> */}

        {
          screen === 'profile'
          ? <Profile user={user} />
          : screen === 'stats'
          ? <Stats stats={this.state.stats} />
          : screen === 'community'
          ? <Community user={user} community={this.state.community} />
          :
          <View style={styles.headingWrap}>
            <Text style={styles.heading}>Welcome,</Text>
            <Text style={[styles.heading, styles.user]}>{user.name}</Text>
          </View>
      }

        <View style={styles.nav} >
          <TouchableNativeFeedback
            onPress={() => this.setState({screen: 'profile'})} >
            <View style={styles.profile} ><ProfileIcon height='40' /></View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.setState({screen: 'community'})} >
            <View style={styles.profile} ><Group height='40' /></View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() => this.setState({screen: 'stats'})} >
            <View style={styles.profile} ><StatsIcon height='40' /></View>
          </TouchableNativeFeedback>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: Dimensions.get('window').height,
    backgroundColor: 'white',
    position: 'absolute',
  },
  headingWrap: {
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingLeft: 30,
  },
  heading: {
    fontFamily: 'ReemKufi',
    fontSize: 50,
    color: 'black',
    margin: 0,
  },
  user: {
    fontSize: 30,
    lineHeight: 60,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 100,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 20
  },
  rewardsWrap: {
    flexGrow: 1,
    paddingLeft: 40,
    marginTop: 40,
    paddingTop: 40,
    backgroundColor: 'rgb(231, 231, 231)',
    maxHeight: 300
  },
  rewardsHeading: {
    fontFamily: 'ReemKufi',
    fontSize: 25,
    color: 'black',
  },
  rewardWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewards: {
    marginLeft: 20,
    fontSize: 15,
    backgroundColor: 'black',
    color: 'white',
    alignSelf: 'flex-start',
    height: 21,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100
  },
  checkout: {
    fontFamily: 'ReemKufi',
    marginRight: 50,
    color: 'white',
    backgroundColor: 'grey',
    alignSelf: 'flex-start',
    height: 21,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 100
  },
  nav: {
    position: 'absolute',
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    padding: 20,
    bottom: 20,
    backgroundColor: 'rgb(251, 251, 251)',
    justifyContent: 'space-around'
  },
  profile: {
    alignSelf: 'flex-end'
  },
  shutter: {
    margin: 0,
    alignSelf: 'center'
  }
})
