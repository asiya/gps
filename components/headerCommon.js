import * as React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { Image,View } from 'react-native';



function HeaderComponent (){
    return(
        <View>
            
            <div>
                <input name="txtSearch" type="text" />           
            </div>
        </View>
    );
    
}

export default HeaderComponent