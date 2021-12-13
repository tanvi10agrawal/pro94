import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ChicagoScreen from '../screens/Chicago';

export default class CityScreen extends Component{
  goToChicagoScreen=()=>{
    this.props.navigation.navigate('ChicagoScreen')
  }
  render(){
    return(
      <View>
        <Image source={require('../assets/chicago.jpg')} style={styles.iconImage1}/>
        <Text style={styles.text}> Chicago </Text>
        <Image source={require('../assets/newyork.jpeg')} style={styles.iconImage2}/>
        <Text style={styles.text}> New York </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  iconImage1:{
    position:'absolute',
    height:200,
    width:100,
    resizeMode:'contain',
    margin:100,
    borderRadius:80,
    alignItems:'center',
    justifyContent:'center',
    margin:100,
    alignSelf: 'center',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5
  },
  iconImage2:{
    position:'absolute',
    height:300,
    width:300,
    resizeMode:'contain',
    margin:20,
    borderRadius:80,
    alignItems:'left',
    justifyContent:'left',
    margin:100,
    alignSelf: 'left',
    backgroundColor:'#C1ACE9',
    width:400,
    height:300,
    borderRadius:50,
    borderColor:'black',
    borderWidth:5
  },
  text:{
    color:'black',
    fontSize:25,
    zIndex:1,
    marginTop:235,
    fontFamily:'lobster',
    fontWeight:'bold',
  },
});