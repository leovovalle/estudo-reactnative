
import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native';

export default class SegProject extends Component {

  constructor(props) {
    super(props);
    this.state = { consumido: 0, status: 'Ruim', pct: 0 };

    this.addcopo = this.addcopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.zerardia = this.zerardia.bind(this);
  }

  atualizar() {
    let s = this.state;
    s.pct = Math.floor((s.consumido / 2000) * 100);
    if (s.pct >= 100) {
      s.status = "Bom";
    }
    else {
      s.status = "Ruim";
    }
    this.setState(s);
  }

  addcopo() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizar();

  }

  zerardia() {
    let s = this.state;
    s.consumido = 0;
    this.setState(s);
    this.atualizar();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./Imagens/fundo.png')} style={styles.bgimage}>
          

            <View style={styles.infoarea}>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Meta</Text>
                <Text style={styles.areadado}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Consumido</Text>
                <Text style={styles.areadado}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areatitulo}>Status</Text>
                <Text style={styles.areadado}>{this.state.status}</Text>
              </View>
            </View>
          
            <View style={styles.pctarea}>
              <Text style={styles.pcttext}>{this.state.pct}</Text>
            </View>

            <View style={styles.btnarea}>
              <Button title="Beber 200ml" onPress={this.addcopo} />
            </View>

            <View style={styles.btnarea2}>
              <Button title="Zerar" onPress={this.zerardia} />
            </View>

          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  bgimage: {
    flex: 1,
    width: null
  },
  infoarea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  areatitulo: {
    color: '#45b2fc',
    fontSize: 20
  },
  areadado: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold'
  },
  pctarea: {
    //marginTop: 10,
    alignItems: 'center'
  },
  pcttext:
  {
    fontSize: 70,
    color: '#000000',
    backgroundColor: 'transparent'
  },
  btnarea: {
    marginTop: 120,
    alignItems: 'center'
  },
  btnarea2: {
    marginTop: 10,
    marginBottom: 100,
    alignItems: 'center'
  }
});