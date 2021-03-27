import {View,Text,StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection:'row',
    // justifyContent:'space-between',
    flexWrap: 'wrap'

    },
    userWrapper:{
     margin:8,
     padding:2,
    },
    userImg:{
        width:110,
        height:100,
        borderWidth:2,
        borderColor:'#744285'
        // margin:2
    },
    //removed
    nameText:{
    position: 'absolute', 
    top: 70,
    left: 0,
    right: 0,
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    // color:'#744285'
    }
});

export default  styles;
