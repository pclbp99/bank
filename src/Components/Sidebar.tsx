import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import CustomText from '../../CustomText.tsx';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Sidebar = ({ toggleSidebar }) => {

    const navigation = useNavigation(); 
    const insets = useSafeAreaInsets();


    const navigateTo = (screen) => {
        navigation.navigate(screen);
        toggleSidebar();
    };

    return (
        <View style={[styles.sidebarContainer, { paddingTop: insets.top }]}>

            <CustomText style={styles.sidebarTitle}>MENU</CustomText>

            <TouchableOpacity onPress={() => navigateTo('Main')}>
                <CustomText style={styles.sidebarItem}>메인</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('AddCard')}>
                <CustomText style={styles.sidebarItem}>카드 추가</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Transcation')}>
                <CustomText style={styles.sidebarItem}>거래</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('TranscationList')}>
                <CustomText style={styles.sidebarItem}>거래 목록</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Payment')}>
                <CustomText style={styles.sidebarItem}>결제</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Exchange')}>
                <CustomText style={styles.sidebarItem}>환전</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Account')}>
                <CustomText style={styles.sidebarItem}>정보수정</CustomText>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigateTo('Login')}>
                <CustomText style={styles.sidebarItem}>로그아웃</CustomText>
            </TouchableOpacity>

        </View>
    );
};

export default Sidebar;
