import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Alert, View } from 'react-native';

export default function App() {
  let twoButtonAlert = () => {
    Alert.alert("Hi there", "This is a message",
      [ 
        {
          text: "Cancel",
          onPress: () => {
            console.log("Do nothing because we cancelled");
          }
        },
        {
          text: "OK",
          onPress: () => {
            console.log("Do whatever ok is in your app e.g. save/delete");
          }
        }
      ]
    )
  }

  let threeButtonAlert = () => {
    Alert.alert("Hi there", "This is a message",
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Do nothing because we cancelled");
          }
        },
        {
          text: "OK",
          onPress: () => {
            console.log("Do whatever ok is in your app e.g. save/delete");
          }
        },
        {
          text: "Crazy Option",
          onPress: () => {
            console.log("Are you crazy? You chose the crazy option!");
          }
        }
      ]
    )
  }

  let prompt = () => {
    Alert.prompt("Title", "Enter your name",
      (name) => console.log(`Hi ${name}`)
    )
  }

  return (
    <View style={styles.container}>
      <Button 
        title="2 Button Alert"
        onPress={twoButtonAlert}
      />
      <Button 
        title="3 Button Alert"
        onPress={threeButtonAlert}
      />
      <Button 
        title="Prompt"
        onPress={prompt}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
