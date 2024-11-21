import React, { useEffect, useState, useContext } from 'react';
import { View, Image, StyleSheet, Alert  } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import logo from '../../assets/images/logoCultura.png';
import BtnVoltar from '../../components/btnVoltar';
import PersonagemComBalao from '../../components/PersonagemComBalao';
import ScrollVieww from '../../components/scrollView';
import { useNavigation, useIsFocused } from '@react-navigation/native';

//importacoes necessarias para consumir api
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';
import { id } from 'react-native-paper-dates';

const GerenciamentoCultura2 = ({ navigation }) => {

    const isFocused = useIsFocused(); // Hook para detectar quando a tela está em foco

    //aqui vamos enviar o id que o usuario clicar em editar
    const [culturaId, setCulturaId] = useState('');

    //obtendo os dados do contexto
    const { token, usuarioId } = useContext(UserContext);

    const EditarCultura = (id) => {
        navigation.navigate('EditarCultura', { id });
    };

    const ExcluirCultura = (id) => {
        navigation.navigate('ExcluirCultura', { id });
    };

    const [dadosCultura, setDadosCultura] = useState([]);

    const fetchCultura = async () => {
        if (!usuarioId) {
            Alert.alert("Erro", "ID do usuário não encontrado.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3000/api/cultura/editar/usuario/${usuarioId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.status === 200) {
                setDadosCultura(response.data);
                console.log(response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar dados dos insumos:', error);
            Alert.alert('Erro', 'Não foi possível carregar os insumos cadastrados.');
        }
    };
    useEffect(() => {
        if (isFocused) {
            fetchCultura();
        }
    }, [isFocused]);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <BtnVoltar route="GerenciamentoCultura" />

                <Image source={logo} style={styles.image} />

                <Text variant="titleLarge" style={styles.title}>
                    Gerenciamento de Cultura
                </Text>

                <ScrollVieww
                    talhoes={dadosCultura}
                    onEdit={EditarCultura}
                    onDelete={ExcluirCultura}
                />

            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#18603A',
    },
    image: {
        marginTop: 10,
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        color: 'white',
    },
});

export default GerenciamentoCultura2;
