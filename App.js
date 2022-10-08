import * as react from 'react';
import { StyleSheet, View, Text, Image,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
    
      <Text style={estilo.titulo}>Series Legais</Text>
      <Text style={estilo.subTitulo}>Estas são as melhores das
        melhores</Text>
        <ScrollView>
      <Text style={estilo.serie}>Guerra dos Tronos</Text>
      <View style={estilo.image}>
        <Image style={estilo.img} source={require("./assets/guerra-dos-tronos.jpg")} />
      </View>

      <Text style={estilo.serie}>Stranger Things</Text>
      <View style={estilo.image}>
        <Image style={estilo.img} source={require("./assets/stranger-things-4.jpg")} />
      </View>

      <Text style={estilo.serie}>Umbrella Acadmy</Text>
      <View style={estilo.image}>
        <Image style={estilo.img} source={require("./assets/umbrellaAcadmy.jpg")} />
      </View>

      <Text style={estilo.serie}>One Peace</Text>
      <View style={estilo.image}>
        <Image style={estilo.img} source={require("./assets/tileburnedin.jpg")} />
      </View>
     
      </ScrollView>
    </View>

  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#45adef",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "900",
    marginBottom: 25,
    marginTop:30,
    textAlign: "center"
  },
  subTitulo: {
    fontSize: 25,
    color: "#ffa",
    marginHorizontal: 2,

    textAlign: "center"
  },
  serie: {
    fontSize: 19,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "flex-start",
    textAlign: "left"
  },
  img: {
    width: 300,
    height: 400
  },
  image: {
    alignItems: "center"
  }
})