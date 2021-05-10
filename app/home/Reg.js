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

class Reg extends Component {
  static navigationOptions = {
    title: 'homepage',
  };
  constructor(props) {
    super(props)
    this.state = {
      acc: '',
      pwd: '',
      pwd2: '',
    }

  }


  componentWillMount() {

  }


  componentWillMount() {


  }
  reg() {
    const { acc, pwd, pwd2 } = this.state;

    if (!acc) {
      alert('Please enter the account number')
      return;
    }
    if(!pwd){
      alert('Please input a password')
      return;
    }
    if(pwd!=pwd2){
      alert('Inconsistent password input')
      return;
    };

    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'HomePage' }],
    });


  };



  render() {

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
          <View style={{ height: '10%' }}></View>
          <Text style={{ marginLeft: '10%', marginBottom: 10 }}>Name</Text>
          <TextInput style={styles.in} placeholder='Name' onChangeText={(v) => {
            this.setState({ acc: v })
          }} />

          <Text style={{ marginLeft: '10%', marginBottom: 10, marginTop: 20 }}>PassWord</Text>
          <TextInput secureTextEntry placeholder='PassWord' style={[styles.in, { marginTop: 0 }]}
            onChangeText={(v) => { this.setState({ pwd: v }) }}
          />

          <Text style={{ marginLeft: '10%', marginBottom: 10, marginTop: 20 }}>Confirm PassWord</Text>
          <TextInput secureTextEntry placeholder='Confirm PassWord' style={[styles.in, { marginTop: 0 }]}
            onChangeText={(v) => { this.setState({ pwd2: v }) }}
          />

          <TouchableOpacity onPress={() => {
            this.reg()
          }}>
            <View style={[styles.btn, styles.center, { marginTop: 20, width: '80%', marginLeft: '10%' }]}>
              <Text style={{ color: 'white' }}>NEXT</Text>
            </View>
          </TouchableOpacity>


        </View>

      </SafeAreaView>
    )
  }
}
export default Reg
const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  in: {
    width: '80%', borderWidth: 2, borderColor: 'black', marginLeft: '10%', padding: 10
  },
  btn: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FFA170',

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