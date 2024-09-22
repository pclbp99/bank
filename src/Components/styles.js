import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width:'100%',
        backgroundColor:'#2d307d',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        zIndex: 1000,
    },

    header_left: {
        width: 70,
    },

    header_right: {
        width: 70,
        flexDirection:'row',
    },

    header_tit:{
        fontSize:18,
        color:'#fff',
        fontWeight:'700'
    },

    header_margin:{
        marginLeft:10,
    },

    sidebarOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 500,
    },
    
    sidebarContainer: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: 250,
        backgroundColor: '#2D307D',
        padding: 30,
        zIndex: 999,
    },

    sidebarTitle: {
        fontSize: 24,
        marginBottom: 20,
        color:'#fff',
        fontWeight:'700',
    },
    sidebarItem: {
        paddingVertical: 15,
        color:'#fff',
        fontSize: 18
    },
});

export default styles;
