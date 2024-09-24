import React, { useState }  from 'react';

import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../../CustomText.tsx';
import styles from './style.js';
import join_img from '../../Assets/Images/join_img.png';


const Main = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [account, setAccount] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const mailCheck = (text) => {
      setId(text);
      if (emailRegex.test(text)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    };


    const Signup = () => {
        if (!name || !account || !id || !password) {
          Alert.alert('입력 오류', '모든 내용을 입력해주세요.');
          return;
        }

        if(!isEmailValid){
          Alert.alert('이메일 확인', '이메일 형식과 일치하지 않습니다.');
          return;
        }
    
        if (!passwordRegex.test(password)) {
          Alert.alert('비밀번호 오류', '비밀번호는 영문, 숫자, 기호가 조합된 6자 이상이어야 합니다.');
          return;
        }
    
        if (!isCheckboxChecked) {
          Alert.alert('정책 동의 필요', '회원가입 정책에 동의해주세요.');
          return;
        }
    
        Alert.alert('회원가입 성공', '회원가입이 완료되었습니다.');
        navigation.navigate('Login');
      };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.join_top}>
                <Image source={join_img}/>
                <CustomText style={styles.join_top_txt}>은행 계좌를 연결해보세요</CustomText>
            </View>
            <View style={styles.join_container}>
                <CustomText style={styles.login_tit}>회원가입</CustomText>
                <View style={styles.join_each}>
                    <CustomText style={styles.join_subtit}>이름</CustomText>
                    <TextInput 
                        style={styles.login_input}
                        placeholder='이름을 입력해주세요'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.join_each}>
                    <CustomText style={styles.join_subtit}>은행계좌</CustomText>
                    <TextInput 
                        style={styles.login_input}
                        placeholder='은행계좌를 - 없이 입력해주세요'
                        value={account}
                        onChangeText={(text) => {
                          const numericText = text.replace(/[^0-9]/g, '');
                          setAccount(numericText);
                      }}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.join_each}>
                    <CustomText style={styles.join_subtit}>이메일</CustomText>
                    <TextInput 
                        style={styles.login_input}
                        placeholder='로그인에 사용할 이메일을 입력해주세요'
                        value={id}
                        onChangeText={mailCheck}
                    />
                    {!isEmailValid && <CustomText style={styles.pw_info}>이메일 형식을 확인해주세요</CustomText>}
                </View>
                <View style={styles.join_each}>
                    <CustomText style={styles.join_subtit}>비밀번호</CustomText>
                    <TextInput 
                        style={styles.login_input}
                        placeholder='비밀번호를 입력해주세요'
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <CustomText style={styles.pw_info}>영문,숫자,기호를 조합해 6자 이상 입력해주세요</CustomText>
                </View>
                <BouncyCheckbox
                    style={styles.checkbox}
                    size={24}
                    fillColor="#2d307d"
                    unfillColor="#f1f1f1"
                    text="회원가입 정책에 동의합니다"
                    textStyle={{ textDecorationLine: 'none', color:'#333', fontSize: 14, marginLeft: -5}}
                    iconStyle={{ borderColor: '#2d307d'}}
                    onPress={(isChecked: boolean) => setIsCheckboxChecked(isChecked)}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
                    <TouchableOpacity style={styles.main_btn} onPress={Signup}><CustomText style={styles.main_btn_txt}>회원가입</CustomText></TouchableOpacity>
                    <TouchableOpacity style={styles.sub_btn} onPress={() => navigation.navigate('Login')}><CustomText style={styles.sub_btn_txt}>취소</CustomText></TouchableOpacity>
                </View>

                <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 20}}>
                    <CustomText>이미 계정이 있으신가요?</CustomText>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><CustomText style={styles.join_to_login}>로그인</CustomText></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  

  
export default Main;