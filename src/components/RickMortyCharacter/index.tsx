import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Modal,
  Pressable,
} from "react-native";

import React, { useEffect, useState } from "react";
import Api from "../../services/Api";

import { ICharacter } from "../../types";
import styles from "./styles";

function RickMortyCharacter() {
  const [characters, setCharacters] = useState<ICharacter[]>();
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Api.get("character").then((res) => {
      setCharacters(res.data.results);
    });
  }, []);

  function ModalComponent() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          visible={showModal}
          onRequestClose={() => {
            setShowModal(false);
          }}
        >
          <View style={styles.modal}>
            <Text>Origem: {selectedCharacter?.origin.name}</Text>
            <Text>Localização: {selectedCharacter?.location.name}</Text>
            <View style={styles.closeModalContainer}>
              <Pressable onPress={() => setShowModal(false)}>
                <Text>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
      <ScrollView>
        <View style={styles.container}>
          {characters?.map((character, index) => (
            <View style={styles.card} key={index}>
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: character.image }}
              />
              <View style={styles.textBox}>
                <Text style={styles.textName}>{character.name}</Text>
                <Text style={styles.text}>{character.species}</Text>
                <Text style={styles.text}>{character.gender}</Text>

                <Pressable
                  onPress={() => {
                    setSelectedCharacter(character);
                    setShowModal(true);
                  }}
                >
                  <Text>Ver mais</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {showModal && ModalComponent()}
    </SafeAreaView>
  );
}

export default RickMortyCharacter;
