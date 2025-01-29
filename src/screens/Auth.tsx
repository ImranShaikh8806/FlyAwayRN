import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { SignupUser, signinUser } from "../authSlice";
import { useState, } from "react";
import { StyleSheet, TextInput, View ,Text,Button,TouchableOpacity} from "react-native";

const Auth = ()=>{
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName,setFirstname]=useState("")
    const [lastName,setLastname]=useState("")
    const [auth,setAuth]=useState("signin")
    const dispatch = useDispatch()

    const Authenticate = ()=>{
        if(auth=="signin"){
            dispatch(signinUser({email,password}))
        }else{
            dispatch(SignupUser({email,password,firstName,lastName}))
        }
    }

    return(
        <View style={styles.con}>
            <View style={styles.form_area}>
            <Text style={styles.text}>Please {auth} !!</Text>
          <View style={styles.form_group}>
          <TextInput
            value={email}
            placeholder="email"
            onChangeText={(text)=>setemail(text)}
            style={styles.form_style}
            />
          </View>
           <View style={styles.form_group}>
           <TextInput
            value={password}
            placeholder="password"
            onChangeText={(text)=>setPassword(text)}
            style={styles.form_style}
            />
           </View>
            {auth=="signup" && 
            <View>
                <View style={styles.form_group}>
                <TextInput
            value={firstName}
            placeholder="firstName"
            onChangeText={(text)=>setFirstname(text)}
            style={styles.form_style}
            />
            </View>
            <View style={styles.form_group}>
            <TextInput
            value={lastName}
            placeholder="lastName"
            onChangeText={(text)=>setLastname(text)}
            style={styles.form_style}
            />
            </View>
                </View>
            
            }
              {
                 auth=="signin"?
                 <TouchableOpacity onPress={()=>setAuth("signup")}><Text style={{textAlign:"center",fontSize:18,marginTop:20}}>Dont have an account ?</Text></TouchableOpacity>
                 : <TouchableOpacity onPress={()=>setAuth("signin")}><Text style={{textAlign:"center",fontSize:18,marginTop:20}}>Already have an account ? ?</Text></TouchableOpacity>

             }
            
           <View style={styles.btn}>
             <Button 
              title={auth}
              color="#DE5499"
              onPress={()=>Authenticate()}
             />
             </View>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    con:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop:30
    },
    form_area :{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        backgroundColor: "#EDDCD9",
        height: "auto",
        width: "auto",
        borderWidth: 2, 
        borderColor  : "#264143",
        borderRadius: 20,
        boxShadow: "3 4 0 1 #E99F4C",
        
      },
    
      form_group :{
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        margin: 10,
        
      },
      form_style :{
        
        borderWidth: 2, 
        borderColor:"#264143",
        boxShadow: "3 4 0 1 #E99F4C",
        width: 290, 
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 4,
        fontSize: 15,
      },
      btn: {
        padding: 15,
        marginVertical: 25,
        marginHorizontal: 0,
        width: 290,
        fontSize: 15,
        backgroundColor: "#DE5499",
        borderRadius: 10,
        fontWeight: 800,
        boxShadow: "3 3 0 0 #E99F4C"
      },
    text:{
        fontSize:24,
        textAlign:"center",
        marginTop:20
    },
  

})
export default Auth