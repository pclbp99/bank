import React, { useState }  from 'react';
import { Picker } from '@react-native-picker/picker';

import {
    SafeAreaView,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
  } from 'react-native';

  import { useNavigation } from '@react-navigation/native';

  import CustomText from '../../../CustomText.tsx';
  import Header from '../../Components/Header';
  import styles from './styles.js';
  import transcation_img from '../../Assets/Images/transcation_img.png';

  const Transcation = () => {

    const navigation = useNavigation();

    const [accountWithdraw, setAdccountWithdraw] = useState('');
    const [accountCode, setAccountCode] = useState('');
    const [unit, setUnit] = useState('');
    const [amount, setAmount] = useState('');
    const [memo, setMemo] = useState('');

    const accountLists = [
        { label: '232-12-027211-4', value: '232-12-027211-4'},
        { label: '5553-0201-59253-2', value: '5553-0201-59253-2'},
    ];

    const currencyUnit =[
        { label: '$', value: '$' },
        { label: '￦', value: '￦' },
    ];

    const Send = () => {
        if(!accountWithdraw || !amount){
            Alert.alert('입력 확인', '모든 내용을 입력해주세요');
            return;
        }

        Alert.alert('출금 성공', '출금이 완료되었습니다');
        navigation.navigate('Main');
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <Header title='거래'/>
                <View>
                    <View style={styles.transcation_img_box}>
                        <Image source={transcation_img} style={styles.transcation_img}/>
                    </View>
                </View>

                <View style={styles.common_area}>
                    <View style={styles.card_each}>
                        <CustomText style={styles.card_tit}>출금할 계좌</CustomText>
                        <TextInput
                            placeholder='계좌번호를 입력하세요'
                            style={styles.card_input}
                            value={accountWithdraw}
                            onChangeText={(text) => setAdccountWithdraw(text)}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.card_each}>
                        <CustomText style={styles.card_tit}>입금할 계좌</CustomText>
                        <View style={[styles.picker_container, {width:'100%'}]}>
                            <Picker
                                selectedValue={accountCode}
                                style={styles.picker}
                                onValueChange={(itemValue) => setAccountCode(itemValue)}
                            >
                                {accountLists.map((account) => (
                                <Picker.Item key={account.value} label={account.label} value={account.value} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.card_each}>
                        <CustomText style={styles.card_tit}>금액</CustomText>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={styles.picker_container}>
                            <Picker
                                selectedValue={unit}
                                style={[styles.picker, { height: 50 }]} 
                                onValueChange={(itemValue) => setUnit(itemValue)}
                            >
                                {currencyUnit.map((unit) => (
                                <Picker.Item key={unit.value} label={unit.label} value={unit.value} />
                                ))}
                            </Picker>
                            </View>
                            <TextInput 
                                placeholder='금액 입력'
                                style={[{width:'69%', height: 50}, styles.card_input]}
                                value={amount}
                                onChangeText={(text) => setAmount(text)}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <View style={styles.card_each}>
                        <CustomText style={styles.card_tit}>메모</CustomText>
                        <TextInput
                            placeholder='메모 입력'
                            style={styles.card_input}
                            value={memo}
                            onChangeText={(text) => setMemo(text)}
                        />
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 10}}>
                        <TouchableOpacity 
                        style={styles.main_btn} 
                        onPress={Send}
                        >
                        <CustomText style={styles.main_btn_txt}>보내기</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sub_btn} onPress={() => navigation.navigate('Main')}><CustomText style={styles.sub_btn_txt}>취소</CustomText></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
  }

  export default Transcation;