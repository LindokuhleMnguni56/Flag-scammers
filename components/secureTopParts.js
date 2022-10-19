import { StyleSheet, SafeAreaView, Text, View, } from 'react-native';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import picture from '../assets/pic.png';


import { TouchableOpacity } from 'react-native-web';

export default function RedPart2() {
    return (
        <View style={styles.topContainer} >
            <View>
                <View style={styles.wrapper} >

                </View>
                <View style={styles.userContainerBorder}>

                    <Text style={styles.username}>example@gmail.com</Text>
                </View>

            </View>

            <View style={styles.menuDots}>
                <TouchableOpacity >
                    <FontAwesomeIcon style={styles.dots} icon={faEllipsisV} />
                </TouchableOpacity>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        display: 'flex',

        backgroundColor: '#D2373C',
        height: '50px',
        width: '100%',
        // paddingTop: 15,


    },
    dots: {
        paddingLeft: '90%',
        color: 'white',
       
       
    },

    userContainerBorder: {

        paddingLeft: '50px'
    },

    username: {
        color: 'white',
    },

    wrapper: {
        marginLeft: '12px',
        height: 17,
        width: 17,
         top:'50%',
        backgroundColor: 'green',
        borderRadius: '50px'
    },

    menuDots:{
        bottom:'30%'
    }

});