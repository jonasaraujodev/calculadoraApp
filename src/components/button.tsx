import { Colors } from "@/utils/colors"
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const Button = ({
    title, 
    type,
    onPress
}: {
    title: string, 
    type: 'top' | 'right' | 'number',
    onPress: Function
}) => {
    return (
        <TouchableOpacity style={[styles.button, {
            backgroundColor: type == 'top' 
            ? Colors.btnDark 
            : type == 'right' 
            ? Colors.btnRight 
            : Colors.btnLight,
        },]} onPress={onPress}>
            <Text style={{
                fontSize: 30,
                color: type == 'number' ? Colors.black : Colors.white,}}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height:60,
        width: 60,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.btnDark
    },
})