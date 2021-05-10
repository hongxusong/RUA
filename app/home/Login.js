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

class Login extends Component{
    static navigationOptions = {
        title: 'homepage',
      };
    constructor(props){
      super(props)
      this.state={
         acc:'',
         pwd:''
      }
      
    }

 
    componentWillMount(){
       
      }


    componentWillMount(){
   

    }



    render(){
      
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
             <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
                 <View style={{height:'10%'}}></View>
              <TextInput style={styles.in} placeholder='Name' onChangeText={(v)=>{
                this.setState({acc:v})
              }}/>
              <TextInput secureTextEntry placeholder='PassWord' style={[styles.in,{marginTop:20}]}  onChangeText={(v)=>{
                this.setState({pwd:v});
              }}/>
              
              <TouchableOpacity onPress={()=>{
                if(!this.state.acc){alert('Please enter the account number');return};
                if(!this.state.pwd){alert('Please input a password');return};
                //    this.props.navigation.navigate('HomePage');
                   this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomePage' }],
                  });
              }}>
              <View style={[styles.btn,styles.center,{marginTop:20,width:'80%',marginLeft:'10%'}]}>
              <Text style={{color:'white'}}>LOG IN</Text>
              </View>
              </TouchableOpacity>
              
               
             </View>
             
           </SafeAreaView>
       )
    }
}
export default Login
const styles=StyleSheet.create({
    center:{
        alignItems:'center',
        justifyContent:'center'
       },
       in:{
           width:'80%',borderWidth:2,borderColor:'black',marginLeft:'10%',padding:10
       },
  btn:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'#00C2CC',
    
  },
  pd:{
    padding:20
  },
  bg:{
    width:'100%',
    height:'80%'
  },
  bw:{
    width:'100%',
    padding:20,
    flexDirection:'row',
    justifyContent:'space-between'
  }

})