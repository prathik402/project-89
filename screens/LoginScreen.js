import React,{Component} from "react";
import {Text,View} from "react-native";
import { SafeAreaView, TouchableOpacity } from "react-native-web";

export default class LoginScreen extends Component {
    constructor(){
    render(){
        signInWithGoogleAsync = async () =>{
            try{
                const result = await Google.loginAsync({
                    behaviour:"web",
                    androidClientId:"503474086717-bpgb0t8oavb6uaks3clsqv4lhj81qm46.apps.googleusercontent.com",
                    iosClientId:"503474086717-k158m7pfjj10ido7rn997nip0c8kqh5r.apps.googleusercontent.com",
                    scopes:['profile','email'],
                });
            }
            
        }
    toggleSwitch(){
        const previous_state=this.state.isEnabled;
        const theme = !this.state.isEnabled ? "dark":"light"
        var updates={}
        updates["/users/" + firebase.auth().currentUser.uid + "/current_theme"]=
        theme
        firebase.database().ref().update(updates);
        this.setState({ isEnabled: !previous_state,light_theme:previous_state})
    };
        if(!this.state.fontLoaded){
            return < AppLoading/>;  
        } else{
        return(
            
           <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
           <View style={styles.appTitle}>
            <Image
            source={require("../assets/logo.png")}
            style={styles.appIcon}
            ></Image>
            <Text style={styles.appTitle}>{'Story Telling App'}</Text>
           </View>
           </View>
           <View style={styles.buttonContainer}
           <TouchableOpacity
           style={styles.button}
           onPress={() => this.signInWithGoogleAsync()}
           >
           <Image
           source={require("../assets/google_icon.png")}
           style={styles.googleIcon}
           ></Image>
           <Text style={styles.googleText}>Sign in with Google</Text>
           </TouchableOpacity>
            </View>
            <View style={styles.cloudContainer}>
                <Image
                source={require("../assets/cloud.png")}
                style={styles.cloudImage}
                ></Image>
            </View>
            </View>
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
           <Button>
           title="Sign in with Google"
           onPress={()=> this.signInWithGoogleAsync()}
            </Button>
            </View>
            
        )
        }

        
    }
}

}