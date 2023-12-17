import { SafeAreaView } from "react-native";
import ChatScreen from "./src/ChatScreen";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ChatScreen />
    </SafeAreaView>
  )
}

export default App;