import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,
    SafeAreaView,Alert,Linking,ImageBackground
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class My extends Component{
    static navigationOptions = {
        title: 'HomePage',
      };
    constructor(props){
      super(props)
      this.state={
       
      }
      
    }

 
    componentWillMount(){
       
      }


    componentWillMount(){
   

    }

    render(){
    
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
              <View>
              <Text>my</Text>
              </View> 
         
           </SafeAreaView>
       )
    }
}
export default My
const styles=StyleSheet.create({
  
})