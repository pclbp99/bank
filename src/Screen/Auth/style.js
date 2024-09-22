import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    full_height:{
        flex: 1,
    },

    //login
    login_top : {
        backgroundColor: '#2D307D',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        height: '50%',
        padding: 60,
    },

    login_welcome: {
        fontWeight:'700',
        fontSize:30,
        color:'#fff',
        textAlign: 'center',
        marginBottom: 5,
    },

    login_welcome_kr: {
        fontSize:16,
        color:'#fff',
        textAlign: 'center',
        marginBottom: 40,
    },

    login_img_box:{
        width:'100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    login_area: {
        padding: 50
    },

    login_tit: {
        fontSize: 30,
        fontFamily:'Pretendard-Bold',
        fontWeight:'900',
        textAlign: 'center',
        marginBottom: 20
    },
    
    login_input:{
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 3,
        marginBottom: 10
    },

    login_btn: {
        width:'100%',
        padding:15,
        backgroundColor:'#2d307d',
        borderRadius: 3,
        marginBottom: 15,
    },

    login_btn_txt:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'700'
    },

    login_bot:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
    },

    login_bot_link:{
        color:'#333',
        
    },

    line: {
        color:'#ccc',
        marginRight: 10,
        marginLeft: 10,
    },

    //join
    join_top:{
        width:'100%',
        padding: 30,
        backgroundColor: '#2D307D',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems:'center',
        marginBottom: 20
    },

    join_top_txt:{
        color:'#fff',
        fontWeight:'700',
        marginTop: 20
    },

    join_container:{
        width:'100%',
        padding: 20,
    },

    join_each:{
        marginBottom:20,
    },

    join_subtit:{
        fontSize:16,
        fontWeight:'700',
        marginBottom:5,
    },

    pw_info: {
        paddingLeft: 10,
        color:'#2d307d',
    },

    checkbox:{
        marginBottom: 30
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

    join_to_login:{
        marginLeft: 10,
        fontWeight:'700',
        textDecorationLine:'underline',
        color:'#2d307d'
    }

});

export default styles;
