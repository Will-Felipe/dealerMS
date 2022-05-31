import React, {createRef} from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet, TouchableHighlight} from 'react-native';
import TextInput from '~/componentes/tela/TextInput';
import moment from 'moment';
import {TextInputMask} from 'react-native-masked-text';

const {width} = Dimensions.get("window");
const height = width * 0.6
//const { width, height } = Dimensions.get('window')


export default class PropostaGeral extends React.Component{
  
  render(){
      // console.log(this.props.PropostaD);
        return(
                     
            <View>
            <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
              <TextInput
                        label="Proposta"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '30%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Codigo ? this.props.PropostaD.Proposta_Codigo+'' : ' ' }
                        selection={{start:0, end:0}}
                        editable={false}
                      />
                
                <TextInput
                        label="Pedido"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '30%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Pedido ? this.props.PropostaD.Proposta_Pedido+'' : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      /> 
                
                <TextInput
                        label="Valor"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '40%',}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Valor ? 'R$ ' + this.props.PropostaD.Proposta_Valor : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      />  
                </View>
      
              <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
              <TextInput
                        label="Vendedor"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '67%',}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Vendedor ? this.props.PropostaD.Proposta_Vendedor : ' ' }
                        editable={false}
                        selection={{start:0, end:0}}
                      />
                
                <TextInput
                        label="Nota Fiscal"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '33%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_NotaFiscalNumero ? this.props.PropostaD.Proposta_NotaFiscalNumero+'' : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      /> 
                </View>
      
              <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
              <TextInput
                        label="Cliente"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '100%',}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_ClienteNome ? this.props.PropostaD.Proposta_ClienteNome : ' ' }
                        editable={false}
                        selection={{start:0, end:0}}
                      />
                </View>
      
              <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
              <TextInput
                        label="Empresa"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '100%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_EmpresaNome ? this.props.PropostaD.Proposta_EmpresaNome : ' ' }
                        editable={false}
                        selection={{start:0, end:0}}
                      />
                </View>
      
              <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
              <TextInput
                        label="Chassi"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '33%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Chassi ? this.props.PropostaD.Proposta_Chassi : ' ' }
                        editable={false}
                        selection={{start:0, end:0}}
                      />
                
                <TextInput
                        label="Placa"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '33%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Placa ? this.props.PropostaD.Proposta_Placa : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      /> 
                
                <TextInput
                        label="Ano"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '33%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_AnoModAnoFab ? this.props.PropostaD.Proposta_AnoModAnoFab : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      />  
                </View>
      
              <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
              <TextInput
                        label="Cor"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '33%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Cor ? this.props.PropostaD.Proposta_Cor : ' ' }
                        editable={false}
                        selection={{start:0, end:0}}
                      />
                
                <TextInput
                        label="Dias Estoque"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '33%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_DiasEstoque ? this.props.PropostaD.Proposta_DiasEstoque+'' : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      /> 
                
                <TextInput
                        label="Status"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '33%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_Status ? this.props.PropostaD.Proposta_Status+'' : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      />  
                </View>
      
              <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
              <TextInput
                        label="Status do Veículo"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '50%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Veiculo_Status ? this.props.PropostaD.Veiculo_Status+'' : ' ' }
                        editable={false}
                        selection={{start:0, end:0}}
                      />
                <TextInput
                        label="Previsão de Entrega"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '50%'}}
                        styleInput={{}}
                        returnKeyType="next"
                        value={this.props.PropostaD.Proposta_DataPrevisaoEntrega ? moment(this.props.PropostaD.Proposta_DataPrevisaoEntrega).format('DD-MM-YYYY') : ' '}
                        editable={false}
                        selection={{start:0, end:0}}
                      /> 
                </View>
          </View>
    )
    }
}

const style = StyleSheet.create({
    container: {marginTop: 10, width, height, marginBottom: 30, alignSelf: 'center'},
    scroll: {width, height},
    image: {width, height, resizeMode: 'contain'},
    pagination: {flexDirection:'row', position: 'absolute', bottom: -25, alignSelf: 'center'},
    pagingText: {fontSize: (width / 30), color: '#888', margin: 3},
    pagingActiveText: {fontSize: (width / 30), color: '#000', margin: 3},

})