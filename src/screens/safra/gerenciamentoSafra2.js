import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import logo from '../../assets/images/logoSafra.png';
import { useNavigation } from '@react-navigation/native';
import TextInputComponent from '../../components/input';
import Btn from '../../components/button';
import BtnVoltar from '../../components/btnVoltar';
import PersonagemComBalao from '../../components/PersonagemComBalao';
import ScrollVieww from '../../components/scrollView';


const GerenciamentoSafra2 = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(true); // Modal inicialmente visível
  


    const handleGerenciamentoSafra = () => {
        navigation.navigate('GerenciamentoSafra');
    };

    const handleEditarSafra = () => {
        navigation.navigate('EditarSafra');
    };

    const ExcluirSafra = (id) => {
        navigation.navigate('ExcluirSafra', { id });
    };
    const closeModal = () => {
        setModalVisible(false);
      };
    
      useEffect(() => {
        // Mostrar o modal ao carregar a tela
        setModalVisible(true);
      }, []);
    

    const safras = [
        { id: 1, nome: 'Safra 1' },
        { id: 2, nome: 'Safra 2' },

    ];

    return (
        <PaperProvider>
            <View style={styles.container}>
                <BtnVoltar route="GerenciamentoSafra" />

                <Image source={logo} style={styles.image} />

                <Text variant="titleMedium" style={styles.h2}>
                    Gerenciamento de Safras
                </Text>

                <ScrollVieww
                    talhoes={safras}
                    onEdit={handleEditarSafra}
                    onDelete={ExcluirSafra}
                />



                <PersonagemComBalao texto="Selecione se deseja editar ou excluir suas safras" 
                visible={modalVisible} 
                onClose={closeModal} 
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
    h2: {
        marginTop: 20,
        marginBottom: 5,
        color: "white",
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 15,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
});

export default GerenciamentoSafra2;
