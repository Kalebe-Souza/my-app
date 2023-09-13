import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';

class Cronometro extends Component {
    constructor() {
        super();
        this.state = {
            horas: 0,
            minutos: 0,
            segundos: 0,
            cronometroAtivo: false,
            ultimoTempoMedido: '00:00:00',
        };
        this.interval = null;
    }

    iniciarCronometro = () => {
        if (!this.state.cronometroAtivo) {
            this.setState({ cronometroAtivo: true });
            this.interval = setInterval(() => {
                const { horas, minutos, segundos } = this.state;
                if (segundos === 59) {
                    if (minutos === 59) {
                        this.setState({ horas: horas + 1, minutos: 0, segundos: 0 });
                    } else {
                        this.setState({ minutos: minutos + 1, segundos: 0 });
                    }
                } else {
                    this.setState({ segundos: segundos + 1 });
                }
            }, 1000);
        } else {
            clearInterval(this.interval);
            this.setState({ cronometroAtivo: false });
        }
    };

    reiniciarCronometro = () => {
        clearInterval(this.interval);
        this.setState({
            horas: 0,
            minutos: 0,
            segundos: 0,
            cronometroAtivo: false,
            ultimoTempoMedido: this.formatarTempo(),
        });
    };

    formatarTempo = () => {
        const { horas, minutos, segundos } = this.state;
        const formatarDigito = (numero) => (numero < 10 ? `0${numero}` : `${numero}`);
        return `${formatarDigito(horas)}:${formatarDigito(minutos)}:${formatarDigito(segundos)}`;
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
               <View style={{width:270, height:270, borderWidth:3, justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderColor: 'red' }}>
                <Image
                    source={require('../assets/imagem.jpg')}
                    style={{ width: 220, height: 200 }}
                />
                </View>

                <Text style={{ fontSize: 24, marginTop: 20 }}>{this.formatarTempo()}</Text>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Icon
                        raised
                        name={this.state.cronometroAtivo ? 'pause' : 'play-arrow'}
                        type='material'
                        color='red'
                        onPress={this.iniciarCronometro}
                    />
                    <Icon
                        raised
                        name='refresh'
                        type='material'
                        color='red'
                        onPress={this.reiniciarCronometro}
                    />
                </View>
                <Text>Último tempo medido: {this.state.ultimoTempoMedido}</Text>
            </View>
        );
    }
}

export default Cronometro;
