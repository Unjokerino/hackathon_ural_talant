import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:60,
        paddingHorizontal:20,
        paddingBottom:0,
    },
    image:{
        alignSelf:'center',
        width: width*0.8,
    },
    scrollView:{
        marginTop:40,
    },
    row:{
       
        flexDirection:'row',
      
    },
    column:{
        alignItems:'center',
        flex:1,
    },
    title:{
        fontSize:32,
        
    },
    description:{
        
        fontSize:14,
        
        color:'#646464'
    },
    btn:{
        width: width*0.8,
        height:76,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:50,
        borderRadius:29,
        backgroundColor:Colors.light.primary
    },
    btnText:{
        color:'white',
        fontSize:16,
    }
})
