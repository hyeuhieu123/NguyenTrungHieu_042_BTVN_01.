import React from 'react'
import { ScrollView, View } from 'react-native'
import Demo from './Demo'
import { SafeAreaView } from 'react-native-safe-area-context'
import Bai1 from './Bai1'
import { Tabs } from 'expo-router'
import Bai2 from './Bai2'
import Bai3 from './Bai3'
import Bai4 from './Bai4'
import Bai5 from './Bai5'
import Bai6 from './Bai6'
import Bai7 from './Bai7'
import Bai8 from './Bai8'
import ProductDetail from './ProductDetail'

export default function RootLayout() {
  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <Bai1/>
            <Bai2/>
            <Bai3/>
            <Bai4/>
            <Bai5/>
            <Bai6/>
            <Bai7/>
            <Bai8/>
            <ProductDetail/>
      </ScrollView>
    </SafeAreaView>
  )
}
