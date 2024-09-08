import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput, Text, View, Modal, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

const TextInputProduction = () => {
    const [equipment, setEquipment] = useState('');
    const [hm_awal, setHM_Awal] = useState('');
    const [hm_akhir, setHM_Akhir] = useState('');
    const [jam_lain, setJam] = useState('');
    const [breakdown, setBreakdown] = useState('');
    const [no_operator, setOperator] = useState('');
    const [hujan, setHujan] = useState('');
    const [ket, setKet] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        setModalVisible(true); // Tampilkan modal saat tombol submit ditekan
    };

return(
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.ScrollView}>
        
        <Text style={[styles.label, styles.marginTopLabel]}>Equipment:</Text>
        <View style={styles.pickterContainer}>
            <Picker
            selectedValue={equipment}
            onValueChange={(itemValue) => setStatus(itemValue)}
            style={styles.picker}
            >
            <Picker.Item label="Select" value=""/>
            <Picker.Item label="Equipment1" value="Equipment1"/>
            <Picker.Item label="Equipment2" value="Equipment2"/>
            <Picker.Item label="Equipment3" value="Equipment3"/>
            </Picker>
        </View>

        <Text style={[styles.label, styles.marginTopLabel]}>HM Awal:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setHM_Awal}
        value={hm_awal}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>HM Akhir:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setHM_Akhir}
        value={hm_akhir}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Jam Lain</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setJam}
        value={jam_lain}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Breakdown:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setBreakdown}
        value={breakdown}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>No Operator:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setOperator}
        value={no_operator}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Hujan:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setHujan}
        value={hujan}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Keterangan:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setKet}
        value={ket}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Icon name="checkmark-circle" size={50} color="green" />
            <Text style={styles.modalText}>Data Tersimpan!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}>
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
  picker: {
    marginBottom: -20,
  },
});

export default TextInputProduction;