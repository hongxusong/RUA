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

class XueShen extends Component {
  static navigationOptions = {
    title: 'homepage',
  };
  constructor(props) {
    super(props)
    this.state = {
        tpc_arr:[
            {
                name:'Grades',
                status:false
            },
            {
                name:'Dating',
                status:false
            },
            {
                name:'Food',
                status:false
            },
            {
                name:'Money',
                status:false
            },
            {
                name:'Job/Job seeking',
                status:false
            },
            {
                name:'Health/Mental Health',
                status:false
            },
        ]
    }

  }


  componentWillMount() {

  }


  componentWillMount() {


  }



  render() {

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView>
       <View style={[{padding:20},styles.bgc]}>
       <Text style={{fontSize:25,color:'#FFA170'}}>What`s  your parent`s phone number ?</Text>
      
       <View style={styles.bw}>
       <View style={styles.btn}>
       <TextInput placeholder='phone number' placeholderTextColor='black'/>
       </View>
       
       </View>

      
       <Text style={{fontSize:25,marginTop:30,color:'#FFA170'}}>How many times a week would you like to ... </Text>
       <View style={styles.bw}>
       <View style={styles.btn}>
       <TextInput placeholder='call home' placeholderTextColor='black'/>
       </View>
       
       </View>
       
       <View style={styles.bw}>
       <View style={styles.btn}>
       <TextInput placeholder='video call home' placeholderTextColor='black'/>
       </View>
       
       </View>
       
       <View style={styles.bw}>
       <View style={styles.btn}>
       <TextInput placeholder='text parents' placeholderTextColor='black'/>
       </View>
       
       </View>

       

       <Text style={{fontSize:25,marginTop:30,color:'#FFA170'}}> What is the maximum number of days you would like to go without talking to your parent ?  </Text>
       <View style={styles.bw}>
       <View style={styles.btn}>
       <TextInput placeholder='3' placeholderTextColor='black'/>
       </View>
       </View>

       <Text style={{fontSize:25,marginTop:30,color:'#FFA170'}}>What topics do you not wish to discuss with your parents unless you bring them up ? </Text>
       
       <View style={{flexDirection:'row',flexWrap:'wrap',width:'100%',display:'flex'}}>
       <View style={styles.bw}>
           {this.state.tpc_arr.map((i,k)=>{
            return(
                <TouchableOpacity style={[styles.btn2,{marginTop:10}]} onPress={()=>{
                     let d=this.state.tpc_arr;
                     let aa=d[k].status;
                       console.log(aa);

                    this.setState({tpc_arr:d.map((a,b)=>k==b?{...a,status:!a.status}:a   )})
                }}>
                 <Text style={[i.status?{color:'red'}:'']}>{i.name}</Text>
                </TouchableOpacity>
                
            )
           } )}
       </View>
       
       </View>



       <TouchableOpacity  onPress={()=>{
         this.props.navigation.goBack()
       }}>
       <View style={{marginTop:10,borderRadius:6,borderColor:'black',borderWidth:2,padding:20,alignItems:'center',
      
    }}>
          <Text style={{color:'#FFA170',fontSize:30}}>Submit</Text> 
       </View>
       </TouchableOpacity>
       
       
       {/* <TextInput style={styles.note} placeholder='Note to share now'/> */}

       </View>
       </ScrollView>  
      </SafeAreaView>
    )
  }
}
export default XueShen
const styles = StyleSheet.create({
    note:{
        marginTop:20,
        borderRadius:8,
        borderWidth:3,
        borderColor:'black',
        height:100,
        padding:10
    },
    bgc:{
        backgroundColor:'white',
        width:'100%',
         height:'100%'
         },
  btn: {
   width:'100%',
   borderWidth:3,
   borderColor:'black',
   padding:10,
   borderRadius:20

  },
  btn2: {
    width:'47%',
    borderWidth:3,
    borderColor:'black',
    padding:10,
    borderRadius:20
 
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
    justifyContent: 'space-between',
    flexWrap:'wrap'
  }

})