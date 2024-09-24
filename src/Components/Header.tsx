import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles.js';
import CustomText from '../../CustomText.tsx';
import Sidebar from './Sidebar.tsx';
import ic_menu from '../Assets/Images/ic_menu.png';
import ic_back from '../Assets/Images/ic_back.png';
import ic_setting from '../Assets/Images/ic_setting.png';

const Header = (props) => {
    
    const navigation = useNavigation();
    const route = useRoute();
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
      if (isSidebarVisible) {
        setSidebarVisible(false);
      }
    }, [route]);

    return (
      <SafeAreaView>
        <View style={styles.header}>
            <View style={styles.header_left}>
                {route.name !== 'Main' && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={ic_back}/>
                    </TouchableOpacity>
                )}
            </View>
            <View>
                <CustomText style={styles.header_tit}>{props.title}</CustomText>
            </View>
            <View style={styles.header_right}>
                <TouchableOpacity>
                    <Image source={ic_setting}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.header_margin} onPress={toggleSidebar}>
                    <Image source={ic_menu}/>
                </TouchableOpacity>
            </View>
        </View>


        <Modal
          animationType="fade"
          transparent={true}
          visible={isSidebarVisible}
          onRequestClose={toggleSidebar} 
        >
          <TouchableOpacity
            style={styles.sidebarOverlay}
            activeOpacity={1}
            onPress={toggleSidebar} 
          />
          <Sidebar toggleSidebar={toggleSidebar} />
        </Modal>
      </SafeAreaView>
    );
  };
  
export default Header;
