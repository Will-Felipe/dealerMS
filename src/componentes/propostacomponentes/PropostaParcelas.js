import React from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet, TouchableHighlight} from 'react-native';
import TextInput from '~/componentes/tela/TextInput';
import moment from 'moment';

const {width} = Dimensions.get("window");
const height = width * 0.6
//const { width, height } = Dimensions.get('window')


export default class PropostaParcelas extends React.Component{
   
    render(){
        return(
                     
        <ScrollView pagingEnabled   
        onScroll={this.change}
        showsHorizontalScrollIndicator={true}
        >
     <View> 
      {this.props.Parcelas ? this.props.Parcelas.map(parcela => {
            return (
              <View>

                <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
                  <TextInput
                    label="Tipo"
                    styleContainer={{...stylesGeral.ContainerIpunts, width: '100%'}}
                    styleInput={{}}
                    returnKeyType="next"
                    value={parcela.Parcela_Descricao}
                    editable={false}
                    selection={{start:0, end:0}}
                  />
                </View>

                <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
                  <TextInput
                    label="Vencimento"
                    styleContainer={{...stylesGeral.ContainerIpunts, width: '50%'}}
                    styleInput={{}}
                    returnKeyType="next"
                    value={moment(parcela.PropostaParcela_DataVencimento).format('DD-MM-YYYY')}
                    editable={false}
                    selection={{start:0, end:0}}
                  />
                  <TextInput
                    label="Valor"
                    styleContainer={{...stylesGeral.ContainerIpunts, width: '50%'}}
                    styleInput={{}}
                    returnKeyType="next"
                    value={'R$ ' + parcela.Parcela_Valor}
                    editable={false}
                    selection={{start:0, end:0}}
                  />
                </View>

                <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
                  <TextInput
                    label="Observações"
                    styleContainer={{...stylesGeral.ContainerIpunts, width: '100%'}}
                    styleInput={{}}
                    returnKeyType="next"
                    value={parcela.PropostaParcela_Observacao}
                    editable={false}
                    selection={{start:0, end:0}}
                  />
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{flex: 1, height: 1, backgroundColor: 'black', marginBottom: 10}} />
                </View>

              </View>
      )
    }) : (<></>)}
</View>
</ScrollView>
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