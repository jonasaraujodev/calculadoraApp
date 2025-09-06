import { Colors } from "@/utils/colors";
import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import Button from './button';

const Calculadora = () => {
    const [firstValue, setFirtsValue] = useState('');
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState('');

    const handleNumberInput = (numero : string) => {
        if (displayValue.startsWith('=')) {
            setFirtsValue('')
            setDisplayValue(numero)
        } else if (displayValue == '0') {
            setDisplayValue(numero)
        } else {
            setDisplayValue(displayValue + numero)
        }
    }

    const handleOperatorInput = (operator: string) => {
        if (displayValue.startsWith('=')) {
            setFirtsValue('')
            setDisplayValue('0')
        } else {
            setOperator(operator);
            setFirtsValue(displayValue);
            setDisplayValue('0');
        }
    }
    
    const handlePercent = () => {
        if (displayValue.startsWith('=')) {
            setFirtsValue('')
            setDisplayValue('0')
        } else {
            const number = parseFloat(displayValue)/100;
            setDisplayValue(number.toString())
        }
    }

    const handleCalculation = () => {
        if (displayValue.startsWith('=')) {
            setFirtsValue('')
            setDisplayValue('0')
        } else if (firstValue !== '') {
            const number1 = parseFloat(firstValue);
            const number2 = parseFloat(displayValue);

            if (operator === '+') {
                setDisplayValue( '= ' + (number1 + number2).toString());
            } else if (operator === '-') {
                setDisplayValue( '= ' + (number1 - number2).toString());
            } else if (operator === '÷') {
                setDisplayValue( '= ' + (number1 / number2).toString());            
            }  else if (operator === 'x') {
                setDisplayValue( '= ' + (number1 * number2).toString());
            }  else if (operator === '%') {
                setDisplayValue( '= ' + (number1 % number2).toString());
            }

            setFirtsValue(number1.toString() + operator + number2.toString() );
            setOperator('');
        }
    }

    const handleClear = () => {
        setDisplayValue('0');
        setOperator('');
        setFirtsValue('');
    }

    const handleDelete = () => {
        if (displayValue.length == 1) {
            setDisplayValue('0')
        } else {
            setDisplayValue(displayValue.slice(0, -1));
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={{fontSize: 30, fontWeight: 300}}>{firstValue + operator}</Text>
                <Text style={styles.displayText}>{displayValue}</Text>
            </View>
            <View style={styles.keypad}>Keypad
                <Button title='C' type='top' onPress={() => handleClear()}/>
                <Button title='⌫' type='top' onPress={() => handleDelete()}/>
                <Button title='%' type='top' onPress={() => handlePercent()}/>
                <Button title='÷' type='right' onPress={() => handleOperatorInput('÷')}/>
                <Button title='7' type='number' onPress={() => handleNumberInput('7')}/>
                <Button title='8' type='number' onPress={() => handleNumberInput('8')}/>
                <Button title='9' type='number' onPress={() => handleNumberInput('9')}/>
                <Button title='x' type='right' onPress={() => handleOperatorInput('x')}/>
                <Button title='4' type='number' onPress={() => handleNumberInput('4')}/>
                <Button title='5' type='number' onPress={() => handleNumberInput('5')}/>
                <Button title='6' type='number' onPress={() => handleNumberInput('6')}/>
                <Button title='-' type='right' onPress={() => handleOperatorInput('-')}/>
                <Button title='1' type='number' onPress={() => handleNumberInput('1')}/>
                <Button title='2' type='number' onPress={() => handleNumberInput('2')}/>
                <Button title='3' type='number' onPress={() => handleNumberInput('3')}/>
                <Button title='+' type='right' onPress={() => handleOperatorInput('+')}/>
                <Button title='0' type='number' onPress={() => handleNumberInput('0')}/>
                <Button title='00' type='number' onPress={() => handleNumberInput('00')}/>
                <Button title='.' type='number' onPress={() => handleNumberInput('.')}/>
                <Button title='=' type='right' onPress={() => handleCalculation()}/>                 
            </View>
        </View>
    )
}

export default Calculadora

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    display: {
        flex: 1,
        backgroundColor: Colors.gray,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    displayText: {
        fontSize: 70,
        fontWeight: 300
    },
    keypad: {
        flex: 2,
        backgroundColor: Colors.light,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
        padding: 30
    } 
})