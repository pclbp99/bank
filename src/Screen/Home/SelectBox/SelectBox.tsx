import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import styles from './../styles.js';

const { height } = Dimensions.get('window');

const CustomSelectBox = ({ options, selectedValue, onValueChange }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const handleSelect = (value) => {
      onValueChange(value);
      setIsModalVisible(false);
    };
  
    const modalHeight = options.length * 50 > height * 0.5 ? height * 0.5 : undefined;

    return (
      <View>
        <TouchableOpacity
          style={styles.selectBox}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.selectedValue}>
            {options.find(option => option.value === selectedValue)?.label || '-선택-'}
          </Text>
        </TouchableOpacity>
  
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={[styles.modalContainer, {modalHeight}]}>
                <ScrollView>
                  {options.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.option}
                      onPress={() => handleSelect(option.value)}
                    >
                      <Text style={styles.optionText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  };

export default CustomSelectBox;
