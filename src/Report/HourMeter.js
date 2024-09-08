import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput, Text, View, Modal, ScrollView, FlatList} from "react-native";
// import { DataTable} from 'react-native-paper';

const HourMeter = () => {
    const [tanggal, setTanggal] = useState('');
    const [giliran, setGiliran] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    // const [data, setData] = useState([
    //     { no: 1, tanggal: '2024-09-01', alat: 'Se203' },
    //     { no: 2, tanggal: '2024-09-02', alat: 'Se203' },
    //     { no: 3, tanggal: '2024-09-03', alat: 'Se203' },
    //     ]);
    
    const handleSubmit = () => {
        setModalVisible(true); // Tampilkan modal saat tombol submit ditekan
    };

    // const renderItem = ({ item }) => (
    //     <View style={styles.tableRow}>
    //         <Text style={styles.tableCell}>{item.no}</Text>
    //         <Text style={styles.tableCell}>{item.tanggal}</Text>
    //         <Text style={styles.tableCell}>{item.alat}</Text>
    //     </View>
    // );

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

            {/* <View style={styles.tableHeader}>
                    <Text style={styles.tableHeaderText}>No</Text>
                    <Text style={styles.tableHeaderText}>Tanggal</Text>
                    <Text style={styles.tableHeaderText}>Alat</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.no.toString()}
                /> */}

           {/* <DataTable>
                    <DataTable.Header>
                        <DataTable.Title numeric>No</DataTable.Title>
                        <DataTable.Title>Tanggal</DataTable.Title>
                    </DataTable.Header>
                    {data.map((item, index) => (
                        <DataTable.Row key={index}>
                            <DataTable.Cell numeric>{item.no}</DataTable.Cell>
                            <DataTable.Cell>{item.tanggal}</DataTable.Cell>
                        </DataTable.Row>
                    ))}
                </DataTable> */}
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
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    tableHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        width: '50%',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    tableCell: {
        width: '50%',
        textAlign: 'center',
    },
});

export default HourMeter;