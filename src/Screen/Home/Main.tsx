import React,{useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';


import { useNavigation } from '@react-navigation/native';

import Header from '../../Components/Header.tsx';
import CustomText from '../../../CustomText.tsx';
import styles from './styles.js';
import profile from '../../Assets/Images/profile.png';


const Main = () => {

    const navigation = useNavigation();
    const [balance, setBalance] = useState(4180);

    useEffect(() => {
        const interval = setInterval(() => {
            setBalance(prevBalance => prevBalance + 0.01);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    const transactionData = [
        {
            id:'1',
            title:'Lorem Ipsum Company',
            history:'Received payment',
            amount:'2,030.80',
        },
        {
            id:'2',
            title:'Auctor Elit Ltd.',
            history:'Transfer money',
            amount:'-450.00',
        },
        {
            id:'3',
            title:'Lectus Sit Amet est',
            history:'Gas&electricity payment',
            amount:'-239.50',
        },
        {
            id:'4',
            title:'Congue Quisque',
            history:'Withdraw money',
            amount:'-1,500.00',
        },
    ];
    

    return (
      <SafeAreaView>
        <ScrollView>
            <Header title="홈"/>
            <View style={styles.profile_top}>
                <View style={styles.profile_basic}>
                    <View style={styles.profile_bg}>
                        <Image source={profile} style={styles.profile_img}/>
                    </View>
                    <View>
                        <CustomText style={styles.profile_name}>홍길동</CustomText>
                        <CustomText style={styles.profile_mail}>hong@email.com</CustomText>
                    </View>
                </View>
                <View style={styles.balance_box}>
                    <CustomText style={styles.balance_tit}>BALANCE</CustomText>
                    <CustomText style={styles.balance_cost}>$ {parseFloat(balance).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</CustomText>
                    <TouchableOpacity 
                        style={styles.balance_btn}
                        onPress={() => navigation.navigate('Transcation')}
                    >
                        <Text style={styles.balance_btn_txt}>TRANSFER</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.main_list}>
                <View style={styles.main_list_tit}>
                    <View>
                        <CustomText style={styles.main_list_tit_txt}>최신 거래 목록</CustomText>
                        <CustomText style={[styles.balance_tit,{fontSize:12}]}>LATEST TRNASACTIONS</CustomText>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TranscationList')}>
                        <CustomText style={styles.more_btn}>MORE</CustomText>
                    </TouchableOpacity>
                </View>
                <View>
                {transactionData.map((transaction) => {
                        const formattedAmount = transaction.amount.startsWith('-')
                            ? `-$${transaction.amount.slice(1)}`
                            : `$${transaction.amount}`;

                        return (
                            <TouchableOpacity key={transaction.id} style={styles.transaction_each}>
                                <View>
                                    <CustomText style={styles.transcation_tit}>{transaction.title}</CustomText>
                                    <CustomText style={styles.transcation_history}>{transaction.history}</CustomText>
                                </View>
                                <View>
                                    <CustomText style={styles.transcation_amount}>{formattedAmount}</CustomText>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  

  
export default Main;