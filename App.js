import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image, Button} from 'react-native';
import { useState } from 'react';


export default function App() {
  const [counter,setCounter]= useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={{color:'blue',paddingLeft:150,marginTop:70,fontSize:18}}>Smart Home </Text>
      <Image
      style={{width:50,height:50,marginTop:-30,margin:30}}
        source={require("./assets/house.png")}/>
        <View style={styles.photo}>
        <View style={{backgroundColor:"skyblue",padding:10}} >
          <Image
      style={{width:50,height:50,}}
        source={require("./assets/kitchen.png")}/>
        <Text>Kitchen</Text>
      </View>
      <View style={{backgroundColor:"skyblue",padding:10}}> <Image
      style={{width:50,height:50}}
        source={require("./assets/living-room.png")}/>
        <Text>Living Room</Text></View>

      <View style={{backgroundColor:"skyblue",padding:10}}><Image 
      style={{width:50,height:50}}
      source={require("./assets/bed.png")}/>
      <Text>Bed Room</Text>
      
      </View>
       </View>
       
      <Text>Devices:</Text>
      <View style={{backgroundColor:'#ffcc80',width:325,height:70,paddingLeft:5,margin:10,justifyContent:'center'}}>
        <Text style={{margin:40}}>Living room lamp</Text>
      </View>
      <View style={{width:50,height:10 , marginLeft:330,marginTop:-80}}>
      <Button title="ON"
      onPress={() =>{
        
        setCounter(counter +1);
      }}
      />
      <Button title="OFF"
      onPress={() =>{
        
        setCounter(counter -1);
        
      }}
      />
      </View>
      
      <View style={{backgroundColor:'#ffcc80',width:325,height:70,paddingLeft:5,marginTop:80,marginLeft:10,justifyContent:'center'}}>
        <Text style={{margin:40}}>  HEATER</Text>
      </View>
      <View style={{width:50,height:10 , marginLeft:330,marginTop:-70}}>
      <Button title="ON"
         onPress={() =>{
        
          setCounter(counter +1);
        }}
      />
      <Button title="OFF"
         onPress={() =>{
        
          setCounter(counter -1);
        }}
      />
      </View>
      <View style={{backgroundColor:'#ffcc80',width:325,height:70,paddingLeft:5,marginTop:80,marginLeft:10,justifyContent:'center'}}>
        <Text style={{margin:40}}> TV</Text>
      </View>
      <View style={{width:50,height:10 , marginLeft:330,marginTop:-70}}>
      <Button title="ON"
      onPress={() =>{
        
        setCounter(counter +1);
      }}
      />
      <Button title="OFF"
       onPress={() =>{
        
        setCounter(counter -1);
      }}
      />
      </View>
      <View style={{backgroundColor:'#D0C9BE',width:325,height:70,paddingLeft:5,marginTop:80,marginLeft:10,justifyContent:'center'}}>
        
        <Text style={{margin:40}}>TOTAL ACTIVE DEVICES : {counter}</Text>
      </View>
      
      
      
      
      
      
      
      
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#cdd',
    width:400,
    height:350,
    flex: 1,
   
  },
  photo:{
    flexDirection:"row",
    padding:40,
    justifyContent:"space-around",
    alignItems:"center",
    
    
  }
  
  
});
