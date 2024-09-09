import React, { useState,useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput, Text, View, Modal, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { format } from 'date-fns';

const ProductionReport = ({ route }) => {
    const [tanggal, setTanggal] = useState('');
    const [giliran, setGiliran] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [reports, setReports] = useState([]);
    const [filteredReports, setFilteredReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://192.168.100.129:3000/reports');
                setReports(response.data);
                setFilteredReports(response.data); // Initially show all reports
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };
        
        fetchReports();
    }, []);

    const handleSubmit = () => {
        // Filter reports based on the input fields
        const filtered = reports.filter(report => 
            (tanggal ? report.tanggal === tanggal : true) &&
            (giliran ? report.shift === giliran : true) &&
            (lokasi ? report.lokasi === lokasi : true)
        );
        setFilteredReports(filtered);
        setModalVisible(true); // Tampilkan modal saat tombol submit ditekan
    };


    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return format(date, 'dd MMM yyyy');
        } catch (error) {
            console.error('Error formatting date:', error);
            return dateString;
        }
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.ScrollView}>
                <Text style={[styles.label, styles.marginTopLabel]}>Hari / Tanggal:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={setTanggal}
                    value={tanggal}
                    placeholder="Input Data"
                    placeholderTextColor="#888"
                />

                <Text style={[styles.label, styles.marginTopLabel]}>Giliran / Group:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={setGiliran}
                    value={giliran}
                    placeholder="Input Data"
                    placeholderTextColor="#888"
                />

                <Text style={[styles.label, styles.marginTopLabel]}>Lokasi Kerja:</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={setLokasi}
                    value={lokasi}
                    placeholder="Input Data"
                    placeholderTextColor="#888"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>SEARCH</Text>
                </TouchableOpacity>

                {filteredReports.length > 0 ? (
                    filteredReports.map((report, index) => (
                        <View key={index} style={styles.reportContainer}>
                            <Text style={styles.reportText}>Tanggal: {formatDate(report.tanggal)}</Text>
                            <Text style={styles.reportText}>Shift: {report.shift}</Text>
                            <Text style={styles.reportText}>Group: {report.grup}</Text>
                            <Text style={styles.reportText}>Pengawas: {report.pengawas}</Text>
                            <Text style={styles.reportText}>Lokasi: {report.lokasi}</Text>
                            <Text style={styles.reportText}>Status: {report.status}</Text>
                            <Text style={styles.reportText}>PIC: {report.pic}</Text>
                            {/* Tambahkan atribut lainnya jika diperlukan */}
                        </View>
                    ))
                ) : (
                    <Text style={styles.noDataText}>No data available</Text>
                )}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Data ditemukan!</Text>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.modalButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ScrollView: {
        paddingBottom: 20,
    },
    input: {
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
        backgroundColor: 'black',
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
    reportContainer: {
        margin: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    reportText: {
        fontSize: 14,
        color: 'black',
        marginBottom: 5,
    },
    noDataText: {
        margin: 12,
        fontSize: 16,
        color: '#888',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    modalButton: {
        marginTop: 20,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default ProductionReport;