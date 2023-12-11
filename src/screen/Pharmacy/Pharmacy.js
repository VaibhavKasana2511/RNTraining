import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';

import PharmacyModal from '../../Modal/PharmacyModal/PharmacyModal';

const Pharmacy = () => {
  const [pharmacyData, setPharmacyData] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const emptyComponent = () => {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.titleStyle}>Oops! There's no data here!</Text>
        <Text style={styles.titleStyle}>
          Cick Add Pharmacy to Add Pharmacies
        </Text>
      </View>
    );
  };

  const renderMedicines = ({item}) => (
    <View>
      <Text style={styles.medicine}> -- {item.name}</Text>
    </View>
  );

  const renderMedicineType = ({item}) => (
    <View>
      <Text style={styles.medicineType}> {item.type}</Text>
      <View style={{flexDirection: 'row'}}>
        <FlatList
          data={item.med}
          keyExtractor={(title, index) => Math.random()}
          renderItem={renderMedicines}
        />
      </View>
    </View>
  );

  const renderPharmacy = ({item}) => (
    <View style={styles.renderUser}>
      <Text style={styles.pharmacy}> Pharmacy : {item.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.pharmacy}> Medicine Types :</Text>
        <FlatList
          ListEmptyComponent={emptyComponent}
          data={item.medCategories}
          keyExtractor={(title, index) => Math.random()}
          renderItem={renderMedicineType}
        />
      </View>
    </View>
  );

  const handleAddUser = stateData => {
    setPharmacyData([...pharmacyData, stateData]);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.mainContainer}>
      {/* <View style={styles.mainContainer}> */}
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>Pharmacies</Text>
        <FlatList
          ListEmptyComponent={emptyComponent}
          data={pharmacyData}
          renderItem={renderPharmacy}
          keyExtractor={(item, index) => Math.random()}
        />
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Text style={{color: 'white', fontSize: 20, paddingVertical: 10}}>
            ADD PHARMACY....
          </Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <PharmacyModal statePass={handleAddUser} closeModal={closeModal} />
        </Modal>
      </SafeAreaView>
      {/* </View> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFD3E8',
  },

  container: {
    flex: 1,
    margin: 20,
    marginVertical: 10,
  },

  titleStyle: {
    color: '#0E1116',
    fontSize: 17,
  },

  headerTitle: {
    color: '#0E1116',
    fontSize: 25,
    fontFamily: 'Poppins-ExtraBold',
    alignSelf: 'center',
  },

  medicine: {
    color: '#0E1116',
    fontSize: 15,
    fontFamily: 'Poppins-LightItalic',
  },

  medicineType: {
    color: '#0E1116',
    fontSize: 17,
    fontFamily: 'Poppins-SemiBoldItalic',
  },

  pharmacy: {
    color: '#0E1116',
    fontSize: 18,
    fontFamily: 'Poppins-BoldItalic',
  },

  renderUser: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },

  title: {
    color: '#0E1116',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
  addButton: {
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#9F63B0',
  },
});

export default Pharmacy;
