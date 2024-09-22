import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import CustomText from '../../CustomText.tsx';

const Sidebar = () => {

    const navigation = useNavigation(); 

    return (
        <View style={styles.sidebarContainer}>

            <CustomText style={styles.sidebarTitle}>MENU</CustomText>

            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <CustomText style={styles.sidebarItem}>메인</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AddCard')}>
                <CustomText style={styles.sidebarItem}>카드 추가</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Transcation')}>
                <CustomText style={styles.sidebarItem}>거래</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('TranscationList')}>
                <CustomText style={styles.sidebarItem}>거래 목록</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                <CustomText style={styles.sidebarItem}>결제</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Exchange')}>
                <CustomText style={styles.sidebarItem}>환전</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <CustomText style={styles.sidebarItem}>정보수정</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <CustomText style={styles.sidebarItem}>로그아웃</CustomText>
            </TouchableOpacity>

        </View>
    );
};

export default Sidebar;
