import React, {useState, useContext} from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput, Text, View, Modal, ScrollView, Button} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
// import DatePicker from 'react-native-date-picker';
import { AppContext } from "../../AppContext";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios'; // Import axios

const API_URL = 'http://192.168.100.129:3000/reports';

const TextInputOperation = ({ navigation }) => {
    const { saveHomeData } = useContext(AppContext); // Menggunakan context untuk menyimpan data
    const [tanggal, setTanggal] = useState(new Date());
    const [tanggalString, setTanggalString] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [shift, setShift] = useState('');
    const [grup, setGrup] = useState('');
    const [pengawas, setPengawas] = useState('');
    const [lokasi, setLokasi] = useState('');
    const [status, setStatus] = useState('');
    const [pic, setPic] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

     const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || tanggal;
        setShowDatePicker(false);
        setTanggal(currentDate);
        setTanggalString(currentDate.toISOString().split('T')[0]); // Memperbarui representasi tanggal dalam bentuk string
    };

   const handleSubmit = async () => {
        const data = { tanggal: tanggalString, shift, grup, pengawas, lokasi, status, pic };
        saveHomeData(data); // Menyimpan data ke context

       // Clear input fields after submission
       try {
            // Kirim data ke server
            const response = await axios.post(API_URL, data);
            console.log('Data berhasil dikirim:', response.data);
            
            setTanggal(new Date());
            setTanggalString('');
            setShift('');
            setGrup('');
            setPengawas('');
            setLokasi('');
            setStatus('');
            setPic('');

            if (status === 'PRODUCTION') {
                navigation.navigate('Data', { homeData: data });
            } else if (status === 'HOUR_METER') {
                navigation.navigate('HM');
            } else {
                setModalVisible(true);
            }
        } catch (error) {
            console.error('Error mengirim data:', error);
        }
    };

return(
   <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={[styles.label, styles.marginTopLabel]}>Tanggal</Text>
                <TouchableOpacity
                    style={styles.datePickerButton}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text style={styles.datePickerText}>
                        {tanggalString || 'Pilih Tanggal'}
                    </Text>
                </TouchableOpacity>

                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={tanggal}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                    />
                )}

                <TextInput
                    style={styles.input}
                    onChangeText={setShift}
                    value={shift}
                    placeholder="SHIFT"
                    placeholderTextColor="#888"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setGrup}
                    value={grup}
                    placeholder="GROUP"
                    placeholderTextColor="#888"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setPengawas}
                    value={pengawas}
                    placeholder="PENGAWAS"
                    placeholderTextColor="#888"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={setLokasi}
                    value={lokasi}
                    placeholder="LOKASI"
                    placeholderTextColor="#888"
                />

                <Text style={styles.label}>STATUS</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={status}
                        onValueChange={(itemValue) => setStatus(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="PRODUKSI / JAM JALAN" value="" />
                        <Picker.Item label="PRODUCTION" value="PRODUCTION" />
                        <Picker.Item label="HOUR METER" value="HOUR_METER" />
                    </Picker>
                </View>

                <Text style={styles.label}>PIC</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={pic}
                        onValueChange={(itemValue) => setPic(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="DIVISI" value="" />
                        <Picker.Item label="DIVISI1" value="DIVISI1" />
                        <Picker.Item label="DIVISI2" value="DIVISI2" />
                    </Picker>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit}
                >
                    <Text style={styles.buttonText}>CREATE REPORT</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Icon name="checkmark-circle" size={50} color="green" />
                            <Text style={styles.modalText}>Data Tersimpan!</Text>
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
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingBottom: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
    pickerContainer: {
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#888',
    },
    picker: {
        height: 40,
        width: '100%',
    },
    datePickerButton: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
    },
    datePickerText: {
        color: '#888',
    },
});

export default TextInputOperation;