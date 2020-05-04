import React, {useContext, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import SmsRetriever from 'react-native-sms-retriever';
import Toast from 'react-native-simple-toast';
import { 
    Image,
    Input,
    Button,
    Text,
} from 'react-native-elements';

import {UserContext} from '../../context/user';
import {unmaskCellphone} from '../../utils/masker';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    infoContainer: {
        alignItems: 'center'
    },

    logo: {
        width: 150,
        height: 150
    },

    infoText: {
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 15,
    },

    formContainer: {
        marginTop: 10
    },

    actionButton: {
        width:"94%",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: 10,
        backgroundColor: '#11B22B'
    },
})

const SignIn = ({ navigation }) => {
    const { sendCode } = useContext(UserContext);
    
    const [codePhase, setCodePhase] = useState(false);
    const [cellphone, setCellphone] = useState("");
    const [code, setCode] = useState("");
    const [showCellphoneSelector, setShowCellphoneSelector] = useState(true);

    onClickCellphone = async () => {
        if (showCellphoneSelector) {
            try {
                setShowCellphoneSelector(false);
                let phoneNumber = await SmsRetriever.requestPhoneNumber();
                if (phoneNumber) {
                    setCellphone(phoneNumber.substring(3));
                }
            } catch (error) {
            }
        }
    }

    getForm = () => {
        if (codePhase) {
            return (
                <View style={styles.formContainer}>
                    <Input
                        keyboardType='numeric'
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        placeholder="Código"
                        value={code}
                        onChangeText={value => {
                            if (value == '' || /^\d+$/.test(value)) {
                                setCode(value);
                            }
                        }}
                        maxLength={6}
                    />

                    <Button 
                        buttonStyle={styles.actionButton}
                        disabled={code.length < 6}
                        title="Entrar"
                    />
                    
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        paddingLeft: '1%',
                        paddingRight: '1%'
                    }}>
                    <Button 
                        style={{marginTop: 20}}
                        type="clear"
                        title="Reenviar Código"
                        onPress={() => {
                            sendCode(cellphone);
                            setCode("");
                            Toast.show('Código reenviado com sucesso!');
                        }}
                    />

                    <Button 
                        type="clear"
                        title="Alterar Telefone"
                        onPress={() => {
                            setCode("");
                            setCellphone("");
                            setShowCellphoneSelector(true);
                            setCodePhase(false);
                        }}
                    />
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.formContainer}>
                    <TextInputMask
                        customTextInput={Input}
                        customTextInputProps={{
                            leftIcon: {ype: 'font-awesome', name: 'phone' }
                        }}
                        type={'cel-phone'}
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        value={cellphone}
                        placeholder="Telefone"
                        onChangeText={text => {
                            setCellphone(text)
                        }}
                        onTouchStart={onClickCellphone}
                    />
                    
                    <Button 
                        title="Enviar"
                        disabled={unmaskCellphone(cellphone).length < 11}
                        buttonStyle={styles.actionButton}
                        onPress={() => {
                            sendCode(unmaskCellphone(cellphone));
                            setCodePhase(true);
                            Toast.show('Código enviado com sucesso!');
                        }}
                    />
                </View>
            )
        }
    }    
    
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Image
                    source={require('../../../images/logo.png')}
                    style={styles.logo}
                />

                <Text h2>Bem Vindo!</Text>

                <Text style={styles.infoText}>
                    Bem vindo ao StartupWeekend!
                    Para entrar no app, é necessário que você tenha um
                    telefone que já esteja cadastrado em algum evento.
                </Text>
            </View>

            {getForm()}
        </View>
    )
}

export default SignIn;