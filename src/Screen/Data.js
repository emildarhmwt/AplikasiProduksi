import React, {useState, useEffect, useContext} from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Alert, TextInput, Text, View, Modal, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppContext } from "../../AppContext";

const TextInputProduction = () => {
    const [alat, setAlat] = useState('');
    const [timbunan, setTimbunan] = useState('');
    const [material, setMaterial] = useState('');
    const [jarak, setJarak] = useState('');
    const [tipe, setTipe] = useState('');
    const [ritase, setRitase] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const { homeData, saveHomeData } = useContext(AppContext);
    const route = useRoute();
    const navigation = useNavigation();
    const [productionData, setProductionData] = useState(homeData);

   useEffect(() => {
        if (route.params?.homeData) {
            setProductionData(route.params.homeData);
            console.log('Production data:', route.params.homeData); // Debug
        }
    }, [route.params?.homeData]);

    const handleSubmit = async () => {
    if (alat && timbunan && material && jarak && tipe && ritase) {
        const newProductionData = {
            ...productionData,
            alat,
            timbunan,
            material,
            jarak,
            tipe,
            ritase,
        };

        // Alert.alert("Data Tersimpan", "Data telah disimpan!");
        setModalVisible(true);

        // Simpan data baru ke AsyncStorage dan ke context
        await saveHomeData(newProductionData);

        // Clear input fields after submission
        setAlat('');
        setTimbunan('');
        setMaterial('');
        setJarak('');
        setTipe('');
        setRitase('');

        // Navigate to ReportStack
        // navigation.navigate('ReportStack', {
        //     screen: 'ProductionReport',
        //     params: { productionData: newProductionData }
        // });
    } else {
        Alert.alert("Error", "Mohon lengkapi semua data.");
    }
};


return(
    <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={[styles.label, styles.marginTopLabel]}>Alat Gali/Muat:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setAlat}
        value={alat}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Timbunan:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setTimbunan}
        value={timbunan}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Material:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setMaterial}
        value={material}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Jarak:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setJarak}
        value={jarak}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Tipe Hauler:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setTipe}
        value={tipe}
        placeholder="Input Data"
        placeholderTextColor="#888"/>

        <Text style={[styles.label, styles.marginTopLabel]}>Ritase:</Text>
        <TextInput 
        style={styles.input}
        onChangeText={setRitase}
        value={ritase}
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
});

export default TextInputProduction;