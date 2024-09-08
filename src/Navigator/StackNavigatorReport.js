import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
// import { Text, TouchableOpacity } from "react-native";
// import HomeScreen from '../Screen/Home'
// import DataScreen from '../Screen/Data'
// import HMScreen from '../Screen/HM'
import ReportScreen from '../Screen/Report'
import ProductionReport from '../Report/Production'
import HourMeterReport from '../Report/HourMeter'

const Stack = createStackNavigator();

function StackNavigatorReport() {
    return (
        <Stack.Navigator initialRouteName="Report">
            <Stack.Screen name="ReportStack" component={ReportScreen} options={{headerShown: true, title: 'Report'}} />
            <Stack.Screen name="ProductionReport" component={ProductionReport} options={{headerShown: true, title: 'Production Report'}}/>
            <Stack.Screen name="HourMeterReport" component={HourMeterReport} options={{headerShown: true, title:'Hour Meter Report'}}/>
            {/* <Stack.Screen name="ProductionReport" component={ProductionReport} options={{headerShown: true, title:'Production Report'}}/>
            <Stack.Screen name="HourMeterReport" component={HourMeterReport} options={{headerShown: true, title:'Hour Meter Report'}}/> */}

            {/* <Stack.Screen 
            name="ProductionReport" 
            component={ProductionReport} 
            options={({navigation}) => ({
                title: 'Production Report',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ marginLeft: 10, fontSize: 16, color: 'blue' }}>Back</Text>
                    </TouchableOpacity>
                ),
                headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
            })}
            /> */}
        </Stack.Navigator>
    )
}
export default StackNavigatorReport;