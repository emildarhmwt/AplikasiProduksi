import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
// import Home from '../Screen/Home'
// import Production from '../Screen/Data'
// import HM from '../Screen/HM'
// import HasilLaporan from '../Screen/Report'
import StackNavigator from "./StackNavigator";
import StackNavigatorReport from '../Navigator/StackNavigatorReport'
// import ProductionReport from '../Report/Production'
// import HourMeter from '../Report/HourMeter'

const Tab = createBottomTabNavigator();

export default function BottomNavigate(){
    return (
        <Tab.Navigator>
      <Tab.Screen 
      name="HomeStack" 
      component={StackNavigator} 
      options={{
        headerShown: false, 
        title: 'Home', 
        tabBarIcon: ({ color }) => <Feather name="home" color={color} size={24}/>,
        headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',}
        }}/>

       <Tab.Screen
        name="Report"
        component={StackNavigatorReport}
        options={{
          headerShown: false, 
          title: 'Report',
          tabBarIcon: ({ color }) => <Feather name="file-text" color={color} size={24} />,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',}
        }}
      />
     
      </Tab.Navigator>
    )
}