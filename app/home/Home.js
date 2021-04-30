import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  SafeAreaView, Alert, Linking, ImageBackground
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Home extends Component {
  static navigationOptions = {
    title: 'HomePage',
  };
  constructor(props) {
    super(props)
    this.state = {

    }

  }


  componentWillMount() {

  }


  componentWillMount() {


  }



  render() {

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('../img/bg.png')} style={styles.bg} />

        <View style={styles.bw}>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Login')
          }}>
            <View style={styles.btn}>
              <Text style={{ color: 'white' }}>LOG IN</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Reg')
          }}>
            <View style={styles.btn}>
              <Text style={{ color: 'white' }}>REGISTER</Text>
            </View>
          </TouchableOpacity>

        </View>

      </SafeAreaView>
    )
  }
}
export default Home
const styles = StyleSheet.create({
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'black',

  },
  pd: {
    padding: 20
  },
  bg: {
    width: '100%',
    height: '80%'
  },
  bw: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

})