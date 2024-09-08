import React, { useState,useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput, Text, View, Modal, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductionReport = ({ route }) => {
    const [tanggal, setTanggal] = useState('');
    const [giliran, setGiliran] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        const loadData = async () => {
            try {
                const storedData = await AsyncStorage.getItem('homeData');
                if (storedData) {
                    setData(JSON.parse(storedData));
                }
            } catch (error) {
                console.error('Failed to load data:', error);
            }
        };
 if (route.params?.productionData) {
            setData(route.params.productionData);
        } else {
            loadData();
        }
    }, [route.params?.productionData]);

    const handleSubmit = () => {
        setModalVisible(true); // Tampilkan modal saat tombol submit ditekan
    };


    return(
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.ScrollView}>
            <Text style={[styles.label, styles.marginTopLabel]}>Hari / Tanggal:</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setTanggal}
            value={tanggal}
            placeholder="Input Data"
            placeholderTextColor="#888"/>

            <Text style={[styles.label, styles.marginTopLabel]}>Giliran / Group :</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setGiliran}
            value={giliran}
            placeholder="Input Data"
            placeholderTextColor="#888"/>

            <Text style={[styles.label, styles.marginTopLabel]}>Lokasi Kerja:</Text>
            <TextInput 
            style={styles.input}
            onChangeText={setLokasi}
            value={lokasi}
            placeholder="Input Data"
            placeholderTextColor="#888"/>

            <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableOpacity>

            <Text style={[styles.label, styles.marginTopLabel]}>Tanggal: {data.tanggal}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Shift: {data.shift}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Group: {data.group}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Pengawas: {data.pengawas}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Lokasi: {data.lokasi}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Status: {data.status}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>PIC: {data.pic}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Alat Gali/Muat: {data.alat}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Timbunan: {data.timbunan}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Material: {data.material}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Jarak: {data.jarak}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Tipe Hauler: {data.tipe}</Text>
                <Text style={[styles.label, styles.marginTopLabel]}>Ritase: {data.ritase}</Text>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ScrollView: {
        paddingBottom: 20,
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: -5,
    },
    label: {
        marginLeft: 12,
        marginBottom: -4,
        fontSize: 12,
        color: 'black',
    },
    marginTopLabel: {
        marginTop: 20,
        marginLeft: 12,
    },
    button: {
        backgroundColor:'black',
        padding: 10,
        margin: 12,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 335,
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ProductionReport;