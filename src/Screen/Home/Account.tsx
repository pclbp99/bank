import React,{ useState, useEffect } from 'react';

import {
    SafeAreaView,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Text
}from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../Components/Header';
import styles from './styles.js';
import CustomText from '../../../CustomText.tsx';
import profile from '../../Assets/Images/profile.png';

const Account = () => {

    const navigation = useNavigation();

    const [name, setName] = useState('홍길동');
    const [accountCode, setAccountCode] = useState('232 12 027211 4');
    const [email, setEmail] = useState('hong@email.com');
    const [userpw, setUserpw] = useState('');
    const [phone, setPhone] = useState('010-1234-5678');
    const [address, setAdderss] = useState('부산광역시 OO구 OO대로 123-45번길, 607호');

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    const Save = () => {

          if (userpw !== '' && !passwordRegex.test(userpw)) {
            Alert.alert('비밀번호 오류', '비밀번호는 영문, 숫자, 기호가 조합된 6자 이상이어야 합니다.');
            return;
          }
      
          Alert.alert('정보 수정 완료', '회원정보 수정이 완료되었습니다.');
          navigation.navigate('Main');
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <Header title='정보수정' />
                <View style={styles.common_area}>
                    <View style={styles.modify_profile}>
                        <Image source={profile} style={styles.modify_profile_img}/>
                    </View>
                    <View>
                        <View style={styles.card_each}>
                            <CustomText style={styles.card_tit}>이름</CustomText>
                            <TextInput
                                style={styles.card_input}
                                value={name}
                                onChangeText={(text) => setName(text)}
                                editable={false} 
                            />
                        </View>

                        <View style={styles.card_each}>
                            <CustomText style={styles.card_tit}>은행 계좌</CustomText>
                            <TextInput
                                style={styles.card_input}
                                value={accountCode}
                                onChangeText={(text) => setAccountCode(text)}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.card_each}>
                            <CustomText style={styles.card_tit}>이메일</CustomText>
                            <TextInput
                                style={styles.card_input}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>

                        <View style={styles.card_each}>
                            <CustomText style={styles.card_tit}>비밀번호</CustomText>
                            <TextInput
                                style={styles.card_input}
                                value={userpw}
                                onChangeText={(text) => setUserpw(text)}
                                secureTextEntry 
                            />
                        </View>

                        <View style={styles.card_each}>
                            <CustomText style={styles.card_tit}>연락처</CustomText>
                            <TextInput
                                style={styles.card_input}
                                value={phone}
                                onChangeText={(text) => setPhone(text)}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={styles.card_each}>
                            <CustomText style={styles.card_tit}>주소</CustomText>
                            <TextInput
                                style={styles.card_input}
                                value={address}
                                onChangeText={(text) => setAdderss(text)}
                            />
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
                        <TouchableOpacity 
                        style={styles.main_btn} 
                        onPress={Save}
                        >
                        <CustomText style={styles.main_btn_txt}>변경 내용 저장</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sub_btn} onPress={() => navigation.navigate('Main')}><CustomText style={styles.sub_btn_txt}>취소</CustomText></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
} 

export default Account;