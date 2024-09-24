import React,{ useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import {
    SafeAreaView,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Text
  } from 'react-native';

import Header from '../../Components/Header';
import styles from './styles.js';
import CustomText from '../../../CustomText.tsx';
import SelectBox from '../Home/SelectBox/SelectBox';
import exchange from '../../Assets/Images/exchange.png';

const Payment = () => {

    const [unit, setUnit] = useState('');
    const [amount, setAmount] = useState('');
    const [changeUnit, setChangeUnit] = useState('$');
    const [ChangeAmount, setChangeAmount] = useState('￦');

    const [activeInput, setActiveInput] = useState('amount');

    const currencyUnit =[
        { label: '$', value: '$' },
    ];

    const convertUnit =[
        { label: '￦', value: '￦' },
    ];

    const handleNumberPress = (number) => {
        if (activeInput === 'amount') {
            setAmount(prev => prev + number);
        } else {
            setChangeAmount(prev => prev + number);
        }
    };

    const handleClear = () => {
        if (activeInput === 'amount') {
            setAmount('');
        } else {
            setChangeAmount('');
        }
    };

    useEffect(() => {
        const numericAmount = parseFloat(amount) || 0;
        setChangeAmount((numericAmount * 1300).toString());
    }, [amount]);

    useFocusEffect(
        React.useCallback(() => {
            setAmount('');
            setChangeAmount('');
        }, [])
    );

    return (
        <SafeAreaView>
          <View style={styles.full_page}>
            <Header title="환전" />
            <View>
                <View style={styles.exchange_img_box}>
                    <Image source={exchange} style={styles.exchange_img}/>
                </View>

                <View style={styles.common_area}>
                    <View style={[styles.card_each, {marginBottom:0}]}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={styles.picker_container}>
                                <SelectBox
                                    options={currencyUnit}
                                    selectedValue={unit}
                                    onValueChange={setUnit}
                                />
                            </View>
                            <TextInput 
                                placeholder='0'
                                style={[
                                    { width: '69%', height: 50 }, 
                                    styles.exchange_input, 
                                    { color: amount ? '#000' : '#333' }
                                ]}
                                value={amount}
                                onChangeText={(text) => setAmount(text)}
                                onFocus={() => setActiveInput('amount')}
                                keyboardType="numeric"
                                editable={false}
                                showSoftInputOnFocus={false}
                            />
                        </View>
                    </View>

                    <CustomText style={styles.convert_txt}>CONVERT TO</CustomText>

                    <View style={styles.card_each}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={styles.picker_container}>
                                <SelectBox
                                    options={convertUnit}
                                    selectedValue={changeUnit}
                                    onValueChange={setChangeUnit}
                                />
                            </View>
                            <TextInput 
                                placeholder='0'
                                style={[
                                    { width: '69%', height: 50 }, 
                                    styles.exchange_input, 
                                    { color: amount ? '#000' : '#333' }
                                ]}
                                value={ChangeAmount}
                                onChangeText={(text) => setChangeAmount(text)}
                                onFocus={() => setActiveInput('changeAmount')}
                                keyboardType="numeric"
                                editable={false}
                                showSoftInputOnFocus={false}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.keypad_container}>
                        <View style={styles.keypad_row}>
                            {[1, 2, 3].map(num => (
                                <TouchableOpacity key={num} style={styles.keypad_button} onPress={() => handleNumberPress(num.toString())}>
                                    <Text style={styles.keypad_text}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.keypad_row}>
                            {[4, 5, 6].map(num => (
                                <TouchableOpacity key={num} style={styles.keypad_button} onPress={() => handleNumberPress(num.toString())}>
                                    <Text style={styles.keypad_text}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.keypad_row}>
                            {[7, 8, 9].map(num => (
                                <TouchableOpacity key={num} style={styles.keypad_button} onPress={() => handleNumberPress(num.toString())}>
                                    <Text style={styles.keypad_text}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.keypad_row}>
                            <TouchableOpacity style={styles.keypad_button} onPress={() => handleNumberPress('00')}>
                                <Text style={styles.keypad_text}>00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.keypad_button} onPress={() => handleNumberPress('0')}>
                                <Text style={styles.keypad_text}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.keypad_button} onPress={handleClear}>
                                <Text style={styles.keypad_text}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
          </View>
        </SafeAreaView>
      );
}

export default Payment;