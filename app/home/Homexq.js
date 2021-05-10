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

class Homexq extends Component{
    static navigationOptions = {
        title: 'homepage',
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
              <TouchableOpacity onPress={()=>{
                
              }}>
              <View>
              <Text>homexq</Text>
              </View>
              </TouchableOpacity>
               
         
           </SafeAreaView>
       )
    }
}
export default Homexq
const styles=StyleSheet.create({

})