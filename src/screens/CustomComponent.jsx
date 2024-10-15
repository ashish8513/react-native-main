import React from "react";
import { StyleSheet, Text, View } from "react-native"

const CustomComponent=()=>{
    return(
        <View>

        <Text style={styles.textstyle}> ashish prabhakar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  textstyle:{
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginTop:20,
    marginBottom: 10,
  }
});

export default CustomComponent;