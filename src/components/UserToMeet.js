import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const UserList = () => {

    const users = [
        {
           name: 'Meagan',
           avatar: 'https://tlc.sndimg.com/content/dam/images/tlc/tlcme/legacy/2018/Pawternity%20Leave.jpg.rend.hgtvcom.406.271.suffix/1539643845290.jpeg',
           interest: 'pet Lover also Loves Jogging and pizza' 
        }     
       ]

    return (
        <Card
        title='Meagan'
        image={require('../images/pet1.jpeg')}>
        <Text style={{marginBottom: 10}}>
          We'll be meeting with Meagan beacuse she had more interests.
        </Text>
        
      </Card>
)}

const styles = StyleSheet.create({
  image:{
    width: 60,
    height: 30,
    borderRadius: 20
},
  users:{
    fontSize: 39,
  },
  name:{
    fontSize: 16,
    marginBottom:5
},
interest:{
  fontSize: 16,
  marginBottom:5
},
})

export default UserList