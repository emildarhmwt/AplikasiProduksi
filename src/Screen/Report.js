import React, {useState} from "react";
import { Pressable, StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, Modal } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const HasilLaporan = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const handleProductionReport = () => {
        navigation.navigate('ProductionReport');
    };

    const handleHourMeterReport = () => {
        navigation.navigate('HourMeterReport');
    };

    const handleSubmit = () => {
        setModalVisible(true); // Tampilkan modal saat tombol submit ditekan
    };

    return(
         <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleProductionReport}>
                <Icon style={styles.buttonIcon} name="cog-outline" size={50} color="white" />
                <Text style={styles.buttonText}>Production Report</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={handleHourMeterReport}>
                <Icon style={styles.buttonIcon} name="timer-outline" size={50} color="white" />
                <Text style={styles.buttonText}>Hour Meter Report</Text>
            </TouchableOpacity>

        {/* <Modal
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
      </Modal> */}
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center'
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
        height: 150,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
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
  buttonIcon: {
    marginBottom: 10,
  },
})

export default HasilLaporan;