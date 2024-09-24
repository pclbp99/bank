import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profile_top: {
        padding:30,
        backgroundColor: '#2D307D',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    profile_basic:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20,
    },

    profile_bg: {
        width:100,
        height:100,
        borderRadius: 50,
        backgroundColor: '#fff',
        position:'relative',
        marginRight: 30
    },

    profile_img: {
        position: 'absolute',
        top:0,
        left:0,
        width:100,
        height:100,
        borderRadius: 50,
        borderWidth:1,
        borderColor:'#ccc',
        zIndex: 9
    },
    
    profile_name: {
        fontSize: 24,
        fontWeight: '700',
        color:'#fff',
        marginBottom:5,
    },

    profile_mail: {
        fontSize: 18,
        color:'#fff',
    },

    balance_box: {
        padding:20,
        backgroundColor:'rgba(255,255,255,0.8)',
        borderRadius:15,
        flexDirection:'column',
        alignItems:'center'
    },

    balance_tit: {
        letterSpacing: 2,
        color:'#7476B8',
        marginBottom:5,
    },

    balance_cost: {
        fontSize:32,
        fontWeight:'800',
        marginBottom: 15,
    },

    balance_btn: {
        paddingTop:10,
        paddingBottom:10,
        paddingRight:30,
        paddingLeft:30,
        backgroundColor:'#2d307d',
        borderRadius:3,
    },

    balance_btn_txt: {
        color:'#fff',
        fontWeight:'900',
        letterSpacing:1,
    },

    main_list: {
        paddingTop: 40,
        paddingBottom:40,
        paddingLeft:20,
        paddingRight:20,   
    },

    main_list_tit:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding:10
    },

    main_list_tit_txt: {
        fontSize:18,
        fontWeight:'700',
    },

    more_btn:{
        textDecorationLine: 'underline',
        color:'#2d307d',
        fontWeight:'800'
    },

    transaction_each:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding:10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    transcation_tit: {
        fontSize:16,
        fontWeight:'600',
    },

    transcation_history:{
        color:'#777'
    },

    transcation_amount: {
        fontSize: 18,
        fontWeight: '700'
    },

    sel_container: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    picker: {
        width: '100%',
        height: 50,
    },

    picker_container: {
        width:'30%',
        height: 50,
    },

    selectBox: {
        paddingTop:12,
        paddingBottom:12,
        paddingRight:10,
        paddingLeft: 10,
        width:'100%',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 5,
        backgroundColor: '#fff',
        height:50,
      },

      selectedValue: {
        fontSize: 16,
      },

      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },

      modalContainer: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
      },

      option: {
        padding: 15,
      },

      optionText: {
        fontSize: 16,
      },

    main_btn:{
        width:'49%',
        padding:15,
        backgroundColor:'#2d307d',
        borderRadius: 3,
        marginBottom: 15,
    },

    main_btn_txt:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'700'
    },

    sub_btn:{
        width:'49%',
        padding:15,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#2d307d',
        borderRadius: 3,
        marginBottom: 15,
    },

    sub_btn_txt:{
        color:'#2d307d',
        textAlign:'center',
        fontWeight:'700'
    },

    common_area: {
        backgroundColor:'#fff',
        padding:20
    },

    card_img_box: {
        padding:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    card_img:{
        width: 200,
        height:120,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    card_each:{
        marginBottom: 20,
    },

    card_tit:{
        fontSize:16,
        fontWeight:'700',
        marginBottom:10,
    },

    card_input: {
        paddingRight: 15,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 3,
        marginBottom: 10,
        height: 50,
    },

    transcation_img_box: {
        width:'100%',
        height: 300,
    },

    transcation_img: {
        width:'100%',
        height:'100%',
    },

    full_page:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
    },

    paginationContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
    },

    paginationPrevButton: {
        padding: 10,
        borderRadius: 5,
    },

    paginationNextButton: {
        padding: 10,
        borderRadius: 5,
    },

    paginationNumText: {
        fontSize: 16,
        color:'#555',
        marginLeft:10,
        marginRight:10,
    },

    paginationPrevText: {
        fontSize: 16,
        color:'#555',
    },

    paginationNextText: {
        fontSize: 16,
        color:'#2d307d',
        fontWeight:'700'
    },

    pay_line:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 30,
    },

    pay_each: {
        width: '32%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center,'
    },

    pay_img:{
        width:90,
        height:90,
        marginBottom:10,
    },

    pay_txt: {
        fontSize: 16,
        color:'#777',
    },

    exchange_img_box: {
        padding: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    exchange_img:{
        width:200,
        height: 120,
    },

    convert_txt:{
        textAlign:'center',
        letterSpacing:3,
        color:'#777',
        paddingTop:10,
        paddingBottom:20,
    },

    keypad_container: {
        padding:20,
    },

    keypad_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    keypad_button: {
        width: '30%',
        backgroundColor: '#f1f1f1',
        borderWidth: 2,
        borderColor:'#2d307d',
        paddingVertical: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    keypad_text: {
        color: '#2d307d',
        fontSize: 20,
        fontWeight: 'bold',
    },

    exchange_input: {
        paddingRight: 15,
        paddingLeft: 15,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 3,
        marginBottom: 10,
        height: 50,
        textAlign:'right',
    },

    modify_profile: {
        width:'100%',
        height: 150,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:40,
    },

    modify_profile_img: {
        borderRadius: 50,
        borderWidth:1,
        borderColor:'#ccc',
        zIndex: 9
    },
});

export default styles;
