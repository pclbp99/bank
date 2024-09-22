import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Header from '../../Components/Header';
import AppNavigator from './navigation/Navigator';
import styles from './styles.js';

const TranscationList = () => {
  return (
    <SafeAreaView>
      <View style={styles.full_page}>
        <Header title="거래 목록" />
        <AppNavigator />
      </View>
    </SafeAreaView>
  );
};

export default TranscationList;
