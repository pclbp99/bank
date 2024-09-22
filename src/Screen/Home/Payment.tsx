import React,{ useState, useEffect } from 'react';
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
import Header from '../../Components/Header';
import styles from './styles.js';
import CustomText from '../../../CustomText.tsx';
import profile from '../../Assets/Images/profile.png';
import pay01 from '../../Assets/Images/pay01.png';
import pay02 from '../../Assets/Images/pay02.png';
import pay03 from '../../Assets/Images/pay03.png';
import pay04 from '../../Assets/Images/pay04.png';
import pay05 from '../../Assets/Images/pay05.png';
import pay06 from '../../Assets/Images/pay06.png';
import pay07 from '../../Assets/Images/pay07.png';
import pay08 from '../../Assets/Images/pay08.png';
import pay09 from '../../Assets/Images/pay09.png';

const Payment = () => {
    const [balance, setBalance] = useState(4180);

    useEffect(() => {
        const interval = setInterval(() => {
            setBalance(prevBalance => prevBalance + 0.01);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <SafeAreaView>
          <View style={styles.full_page}>
            <Header title="결제" />
            <View style={styles.full_page}>
                <View style={[styles.profile_top,{paddingTop:20, paddingBottom:10}]}>
                    <View style={styles.profile_basic}>
                        <View style={styles.profile_bg}>
                            <Image source={profile} style={styles.profile_img}/>
                        </View>
                        <View>
                            <CustomText style={styles.balance_tit}>TRANSFER</CustomText>
                            <CustomText style={[styles.balance_cost, {color:'#fff', marginBottom:0}]}>$ {parseFloat(balance).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</CustomText>
                        </View>
                    </View>
                </View>
                <View style={[styles.common_area, {marginTop:20}]}>
                    <View style={styles.pay_line}>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay01} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Water</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay02} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Electircity</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay03} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Gas</CustomText>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.pay_line}>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay04} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Shopping</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay05} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Phone</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay06} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Credit Card</CustomText>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.pay_line}>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay07} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Insurance</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay08} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Mortgage</CustomText>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pay_each}>
                            <Image source={pay09} style={styles.pay_img}/>
                            <CustomText style={styles.pay_txt}>Other Bills</CustomText>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row-reverse'}}>
                        <TouchableOpacity>
                            <CustomText style={styles.more_btn}>MORE</CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
        </SafeAreaView>
      );
}

export default Payment;