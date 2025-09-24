import React from 'react'
import { Button, Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Demo() {
  return (
    <ScrollView>
        <Text>Component Demo</Text>
        <Image 
            height={300}
            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWphenrFmicwysLQ7LtQdOxkPkS0EbrcckaA&s"}}
        />
        <Text>Component Image</Text>
        <View style={{height: 300}}>
            <ImageBackground 
            style={{height: "100%"}}
            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWphenrFmicwysLQ7LtQdOxkPkS0EbrcckaA&s"}}
            >
                <Text>Đây là nội dung ở trong hình ảnh</Text>
            </ImageBackground>
        </View>
        <Text>Ok</Text>

        <Button title="Button" color="#dadada"/>

        <Pressable style={{backgroundColor: "blue", height: 36, borderRadius: 8}}>
            <Text style={{textAlign: "center"}}>Button Pressable</Text>
        </Pressable>
    </ScrollView>
  )
}
