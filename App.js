import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const listaItens = [
  {
    nome: "Capuz da Morte de Rabadon",
    dano: "Dano de Poder de Habilidade: 120",
    passiva: "Apogeu Mágico: aumenta o Poder de Habilidade em 35%",
    preco: 'Preço: 3200g',
    urlItem: "http://cdn.championcounter.com/images/items/3089-rabadonsdeathcap.png?v=1619884116481"
  },
  {
    nome: "Espada do Rei Destruido",
    dano: "Dano de Ataque: 40",
    passiva: "Gume da Névoa: Ataques causam Dano Físico ao contato",
    preco: "Preço: 3200g",
    urlItem: "http://cdn.championcounter.com/images/items/3153-bladeoftheruinedking.png?v=1619884118921"
  },
  {
    nome: "Chamado do Carrasco",
    dano: "Dano de Ataque: 15",
    passiva: "Laceração: causar Dano Físico aplica 40% de Feridas Dolorosas a Campeões por 3s",
    preco: "Preço: 800g",
    urlItem: "http://cdn.championcounter.com/images/items/3123-executionerscalling.png?v=1619884117881"
  }
]

export default function App() {
  return (
    <View style={styles.fundo}>
      <Text style={styles.titulo}>Loja de RPG</Text>
      {listaItens.map(item => <Item item={item} key={item.nome} />)}
    </View>
  );
}

function Item(props) {
  return (
    <View style={styles.card}>
      <View style={styles.containerImagem}>
        <Image style={styles.imagem} source={{ uri: props.item.urlItem }} />
      </View>
      <View style={styles.containerDados}>
        <Text style={styles.nomeItem}>{props.item.nome}</Text>
        <Text style={styles.textoDados}>{props.item.dano}</Text>
        <Text style={styles.textoDados}>{props.item.passiva}</Text>
        <Text style={styles.textoDados}>{props.item.preco}</Text>
        <TouchableOpacity style={styles.botaoComprar}>
          <Text style={styles.textoBotao}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#222',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImagem: {
    padding: 20,
    width: '35%',
  },
  imagem: {
    width: 95,
    height: 100,
  },
  containerDados: {
    width: '70%',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nomeItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    fontFamily: 'Arial',
  },
  textoDados: {
    marginBottom: 5,
    color: '#ccc',
    fontFamily: 'Arial',
  },
  botaoComprar: {
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: '#ff5500',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textoBotao: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
