import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function PharmacyModal({closeModal, statePass}) {
  const [pharmacyData, setPharmacyData] = useState({
    name: '',
    medCategories: [],
  });

  const addMedicineType = () => {
    let med_categories = [...pharmacyData.medCategories];
    med_categories.push({type: '', med: []});
    setPharmacyData({...pharmacyData, medCategories: med_categories});
  };

  const addMedicine = index => {
    setPharmacyData(prevData => {
      const newMedicine = {name: ''};

      return {
        ...prevData,
        medCategories: prevData.medCategories.map((category, i) => {
          if (i === index) {
            category.med.push(newMedicine); // Use push to add the new medicine
          }
          return category;
        }),
      };
    });
  };

  const handleMedicineTypeChange = (index, text) => {
    setPharmacyData(prevData => {
      return {
        ...prevData,
        medCategories: prevData.medCategories.map((category, i) => {
          if (i === index) {
            return {
              ...category,
              type: text,
            };
          }
          return category;
        }),
      };
    });
  };

  const handleMedChange = (categoryIndex, medIndex, newName) => {
    setPharmacyData(prevData => {
      return {
        ...prevData,
        medCategories: prevData.medCategories.map((category, i) => {
          if (i === categoryIndex) {
            return {
              ...category,
              med: category.med.map((medicine, j) => {
                if (j === medIndex) {
                  return {
                    ...medicine,
                    name: newName,
                  };
                }
                return medicine;
              }),
            };
          }
          return category;
        }),
      };
    });
  };

  const renderInput = () => {
    return pharmacyData.medCategories.map((medCategories, index) => (
      <View>
        <View
          key={index}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            style={styles.inputStyle2}
            placeholder="Medicine Type"
            value={medCategories.type}
            onChangeText={text => handleMedicineTypeChange(index, text)}
          />
          {index === pharmacyData.medCategories.length - 1 && (
            <TouchableOpacity
              onPress={() => addMedicine(index)}
              style={styles.addMedicineButton}>
              <Text style={{color: 'white', alignSelf: 'center'}}>
                Add Medicine
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {medCategories.med.map((data, i) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: 5,
            }}>
            <TextInput
              style={styles.inputStyle3}
              placeholder="Medicine Name"
              value={data.name}
              onChangeText={text => handleMedChange(index, i, text)}
            />
          </View>
        ))}
      </View>
    ));
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.subTitle}>Enter Pharmacy</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            onChangeText={text =>
              setPharmacyData(Object.assign({}, pharmacyData, {name: text}))
            }
          />
          <View style={styles.addMedicineContainer}>
            <Text style={styles.subTitle}>Add Medicine Type</Text>
            <TouchableOpacity onPress={addMedicineType}>
              <Text style={styles.addTypeButton}> Add Type </Text>
            </TouchableOpacity>
          </View>
          {renderInput()}
        </View>
        <TouchableOpacity
          style={styles.addPharmacyButton}
          onPress={() => {
            closeModal();
            statePass(pharmacyData);
          }}>
          <Text style={{color: 'white', fontSize: 20, paddingVertical: 10}}>
            Save Pharmacy Detail..
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFD3E8',
  },

  subContainer: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
  },

  subTitle: {
    fontSize: 22,
    color: '#001965',
    fontFamily: 'Poppins-BoldItalic',
  },

  addMedicineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: 10,
  },

  addTypeButton: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#9F63B0',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  addMedicineButton: {
    backgroundColor: '#9F63B0',
    borderRadius: 10,
    marginVertical: 7,
    justifyContent: 'center',
    width: '30%',
  },

  addPharmacyButton: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#9F63B0',
    padding: 2,
    borderRadius: 10,
    marginTop: 10,
  },

  inputStyle: {
    backgroundColor: '#C7B6CE',
    borderRadius: 10,
    width: '100%',
    paddingLeft: 15,
    marginVertical: 7,
    paddingVertical: 10,
  },
  inputStyle2: {
    backgroundColor: '#C7B6CE',
    borderRadius: 10,
    width: '65%',
    paddingLeft: 15,
    paddingVertical: 10,
    marginVertical: 7,
  },

  inputStyle3: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '85%',
    paddingLeft: 15,
    paddingVertical: 10,
    marginVertical: 7,
  },

  Icon: {
    marginVertical: 7,
  },
});
