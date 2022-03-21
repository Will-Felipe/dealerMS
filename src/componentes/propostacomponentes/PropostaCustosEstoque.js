import React, {useState, useEffect, memo} from 'react';
import {View, Image, ScrollView, Dimensions, Text, StyleSheet, TouchableHighlight} from 'react-native';
import TextInput from '~/componentes/tela/TextInput';
import Button from '~/componentes/tela/Button';
import {getEstoqueVeiculos, getCustosVeiculoSimulacao} from '~/servicos/auth';
import Loader from '~/componentes/loading/Loader';
const {width} = Dimensions.get("window");
const height = width * 0.6

const formatarTotalAgregado = function(valor) 
  {
    if (parseFloat(valor, 10) > 0)
      return '(+) ' + valor
    if (parseFloat(valor, 10) < 0)
      return '(-) ' + valor.replace('-', '')

    return ''+valor    
  }

const PropostaCustosEstoque = props => {
    const [ValorSimulacaoNew, setValorSimulacaoNew] = useState(props.Veiculo_Preco);
    const [PropostaD, setPropostaD] = useState(props.PropostaD);
    const [Custos, setCustos] = useState(props.Custos);
    const [Veiculo_Codigo, setVeiculo_Codigo] = useState(0);
    const [loading, setLoading] = useState(false);
    const [TotalAgregado, setTotalAgregado] = useState([]);
    const [ValoresAgregados, setValoresAgregados] = useState([]);
  

    const [inicioUseEffect, setinicioUseEffect] = useState(true);
  
    useEffect(() => {
      }, [inicioUseEffect]);
  
    const style = StyleSheet.create({
        container: {marginTop: 10, width, height, marginBottom: 30, alignSelf: 'center'},
        scroll: {width, height},
        image: {width, height, resizeMode: 'contain'},
        pagination: {flexDirection:'row', position: 'absolute', bottom: -25, alignSelf: 'center'},
        pagingText: {fontSize: (width / 30), color: '#888', margin: 3},
        pagingActiveText: {fontSize: (width / 30), color: '#000', margin: 3},

    })


async function _onCalcularPressed() {
    await getCustosVeiculoSimulacaoGet()
}

const getCustosVeiculoSimulacaoGet = async function() 
{
    setLoading(true);
    
    let preco = parseFloat(ValorSimulacaoNew ? ValorSimulacaoNew.replace('.','').replace(',', '.') : props.PropostaD.Proposta_Valor.replace('.','').replace(',', '.')) 

    let data = await getCustosVeiculoSimulacao(
    'C',
    '',
    '',
    '',
    '',
    '',
    '',
    'D',//TipoConsulta, 
    '',
    preco,
    props.Veiculo_Codigo 
    );
    
    //setLoading(false);

    data.forEach(function(propostas) {
        propostas.Proposta.forEach(function(proposta) {
        PropostasAux = proposta
        })
    });

    if (!PropostasAux){
        setLoading(false);
        Alert.alert('Informação', 'Consulta não retornou dados.');
        return
    }

    if (PropostasAux)
        setPropostaD(PropostasAux)

    if (PropostasAux.Custos)
    { 
        PropostasAux.Custos.Custo.unshift({
        "Custo_Descricao":"Valor Presente",
        "Custo_Valor": PropostasAux.Proposta_ValorPresente
        })
        setCustos(PropostasAux.Custos.Custo)
    
        PropostasAux.Custos.Custo.forEach(function(item) 
        {
        if (item.Custo_Descricao == "Valor Agregado")
        {
            setTotalAgregado(formatarTotalAgregado(item.Custo_Valor))
        }
        })
    }

    if (PropostasAux.ValoresAgregados)
        setValoresAgregados(PropostasAux.ValoresAgregados.ValorAgregado)

    setLoading(false); 
    return PropostasAux
}


        return(
                     
            <ScrollView pagingEnabled 
                onScroll={this.change}
                showsHorizontalScrollIndicator={true}>
                <Loader loading={loading}  />
                <View>
                <View>
                    <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
                    <TextInput
                        label="Valor Simulação"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '50%'}}
                        styleInput={{height: 45}}
                        returnKeyType="next"
                        value={ ValorSimulacaoNew}
                        onChangeText={text => setValorSimulacaoNew(text)}
                    />
                    <TextInput
                        label="Total Custo"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '50%'}}
                        styleInput={{height: 45}}
                        returnKeyType="next"
                        value={'R$ ' + PropostaD.Proposta_CustoTotal}
                    />
                    </View>

                    <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
                    <TextInput
                        label="Resultado"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '60%' }}
                        styleInput={{height: 45, backgroundColor: PropostaD.Proposta_Margem.includes("-") ? "#FF0000" : "#fff",}}
                        returnKeyType="next"
                        value={'R$ ' + PropostaD.Proposta_Margem}
                    />
                    <TextInput
                        label="%"
                        styleContainer={{...stylesGeral.ContainerIpunts, width: '40%'}}
                        styleInput={{height: 45, backgroundColor: PropostaD.Proposta_Margem.includes("-") ? "#FF0000" : "#fff",}}
                        returnKeyType="next"
                        value={PropostaD.Proposta_PercMargem + '%'}
                    />
                    </View>
                </View>

                <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
                        <Button mode="contained" onPress={_onCalcularPressed}>
                        Calcular
                        </Button>
                    </View>

                <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: '5%'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>

                <View >
                    <Text style={{...styles.textoDados, textAlign: 'auto', fontWeight: "bold", paddingBottom: "5%"}}>
                        Composição do Custo
                    </Text> 
                </View>
                
                {Custos ? Custos.map(custo => {
                        return (
                        <View>
                            <View style={{...stylesGeral.ViewCamposCadastro, flexDirection: 'row'}}>
                            <Text style={{...styles.textoDados, textAlign: 'auto', width: '70%'}}>
                                {custo.Custo_Descricao}
                            </Text> 
                        
                            <Text style={{...styles.textoDados, textAlign: 'auto', width: '30%'}}>
                                {'R$ ' + custo.Custo_Valor}
                            </Text>  
                            </View>
                        </View>
                        )
                    }) : (<></>)}

            </View>
            </ScrollView>
    )
    }
//}

export default memo(PropostaCustosEstoque);
