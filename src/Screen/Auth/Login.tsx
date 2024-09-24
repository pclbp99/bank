import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useNavigation, useFocusEffect } from '@react-navigation/native';
import CustomText from '../../../CustomText.tsx';
import styles from './style.js';
import login_img from '../../Assets/Images/login_img.png';


const Login = () => {
    const [userid, setUserid] = useState('');
    const [userpw, setUserpw] = useState('');
    const navigation = useNavigation();

    const LoginCheck = () => {
        if(userid === 'test' && userpw === '1234'){
            navigation.navigate('Main');
        }else{
            Alert.alert('Error','아이디 또는 비밀번호를 확인하세요');
        }
    };

    useFocusEffect(
        React.useCallback(() => {
          setUserid('');
          setUserpw('');
        }, [])
    );

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.full_height}>

            {/* 로그인 상단 */}
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.login_top}>
                    <CustomText style={styles.login_welcome}>WELCOME!</CustomText>
                    <CustomText style={styles.login_welcome_kr}>환영합니다!</CustomText>
                    <View style={styles.login_img_box}>
                        <Image source={login_img}/>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            {/* 로그인 영역 */}
            <View style={styles.login_area}>
                <CustomText style={styles.login_tit}>로그인</CustomText>
                <TextInput style={styles.login_input} value={userid} onChangeText={setUserid} placeholder='아이디 또는 이메일을 입력하세요'></TextInput>
                <TextInput style={styles.login_input} placeholder='비밀번호를 입력하세요' secureTextEntry value={userpw} onChangeText={setUserpw}></TextInput>
                <TouchableOpacity style={styles.login_btn} onPress={LoginCheck}>
                    <CustomText style={styles.login_btn_txt}>로그인</CustomText>
                </TouchableOpacity>
                <View style={styles.login_bot}>
                    <TouchableOpacity><CustomText style={styles.login_bot_link}>아이디 / 비밀번호 찾기</CustomText></TouchableOpacity>
                    <CustomText style={styles.line}>|</CustomText>
                    <TouchableOpacity onPress={() => navigation.navigate('Join')}><CustomText style={styles.login_bot_link}>회원가입</CustomText></TouchableOpacity>
                </View>
            </View>
        </View>
      </SafeAreaView>
    );
  };
  

  
export default Login;
