import React from "react";
import { Text, View } from "react-native";

export default TelaSobreMim = () => {
    return (
        <View style={{gap: 10, display: "flex", alignItems: 'center', justifyContent: 'center', height: "100%", width: "80%", alignSelf: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>Maria Eduarda Alves Veridiano</Text>
            <Text>Idade: 17 anos</Text>
            <Text style={{textAlign: 'center'}}>Olá, meu nome é duda. Gosto bastante da área de tecnologia e ja lidei com algumas linguagens como Golang, Javascript e TypeScript</Text>
            <Text style={{textAlign: 'center'}}>Atualmente faço estágio na área, numa empresa de tecnologia onde atuo no frontend de um projeto de Gerenciamento de inteligencia</Text>
        </View>

    )
}