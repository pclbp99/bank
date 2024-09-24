import React, {useState} from 'react';
import { 
    SafeAreaView, 
    ScrollView, 
    Text, 
    View,
    TouchableOpacity,
} from 'react-native';
import styles from './../styles.js';
import CustomText from '../../../../CustomText.tsx';

const Tab01 = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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
        {
            id:'5',
            title:'Lorem Ipsum Company',
            history:'Received payment',
            amount:'2,030.80',
        },
        {
            id:'6',
            title:'Auctor Elit Ltd.',
            history:'Transfer money',
            amount:'-450.00',
        },
        {
            id:'7',
            title:'Lectus Sit Amet est',
            history:'Gas&electricity payment',
            amount:'-239.50',
        },
        {
            id:'8',
            title:'Congue Quisque',
            history:'Withdraw money',
            amount:'-1,500.00',
        },
    ];

    const startIndex = (currentPage - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage;
    const currentTransactions = transactionData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(transactionData.length / itemsPerPage);


    return (
        <SafeAreaView>
            <View style={styles.common_area}>
                <View>
                {currentTransactions.map((transaction) => {
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

                <View style={styles.paginationContainer}>
                    <TouchableOpacity
                        disabled={currentPage === 1}
                        onPress={() => setCurrentPage(currentPage - 1)}
                        style={styles.paginationPrevButton}
                    >
                        <Text style={styles.paginationPrevText}>이전</Text>
                    </TouchableOpacity>
                    <Text style={styles.paginationNumText}>{currentPage} / {totalPages}</Text>
                    <TouchableOpacity
                        disabled={currentPage === totalPages}
                        onPress={() => setCurrentPage(currentPage + 1)}
                        style={styles.paginationNextButton}
                    >
                        <Text style={styles.paginationNextText}>다음</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    );
};

export default Tab01;
