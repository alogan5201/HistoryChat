import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Screen, Wallpaper, Header } from "../components"
import { Chat, MessageType } from "@flyerhq/react-native-chat-ui"
import { spacing } from "../theme"
import { useNavigation, useRoute, Link, RouteProp } from "@react-navigation/native"
import { AppStackParamList, AppStackScreenProps } from "app/navigators/AppNavigator"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { set } from "date-fns"

export interface ChatScreenProps {
  /**
   * An optional style override useful for padding & margin
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16)
    const v = c === "x" ? r : (r % 4) + 8
    return v.toString(16)
  })
}
export const ChatScreen = observer(function ChatScreen(props: ChatScreenProps) {
  const [paramState, setParamState] = React.useState(null)
  const { style } = props
  const $styles = [$container, style]
  const [userQuestion, setUserQuestion] = React.useState(null)
  const [messages, setMessages] = React.useState<MessageType.Any[]>([])
  const user = { id: "06c33e8b-e835-4736-80f4-63f44b66666c" }
  const otherUser = { id: "06c33e5b-e835-4732-80f4-63f44b46666c" }
  const navigation = useNavigation()
      const route = useRoute<RouteProp<AppStackParamList, "Chat">>()
      const params = route.params
  const goBack = () => navigation.goBack()
  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages])
  }

  const sendChatGptResponse = (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: otherUser,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: "text",
    }
    addMessage(textMessage)
  }
 const askChatgpt = async (message: string) => {
   // In your React app

   const response = await fetch(
     "https://us-central1-work-chatgpt-cloud-functions.cloudfunctions.net/chat",
     {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ message }),
     },
   )
   const data = await response.json()
   const status = data.status

   return data
 }
  const handleSendPress = async (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: "text",
    }
    addMessage(textMessage)
setUserQuestion(message.text)

  }
   

  React.useEffect(() => {
    const fetchData = async () => { 
      if (userQuestion) {
            const chatGptResponse = await askChatgpt(
              `I want you to act as ${params.person} from the first-person and second-person perspective. I will write your sentences, and you will only answer the question to the best of your ability as if you are actually ${params.person}, and nothing else. The replies must be as close as possible as if I were asking ${params.person} myself. Do not write explanations on replies. My first sentence is "${userQuestion}".`,
            )
            if (chatGptResponse && chatGptResponse.message) {
              sendChatGptResponse({ text: chatGptResponse.message, type: "text" })
            }
      }

    }
    fetchData()
}, [userQuestion]);
React.useEffect(() => {
  const fetchData = async () => {
    if (route.params) {
      if (params.person && params.imgSource) {
         // Added type: 'text'
             sendChatGptResponse({ text: params.greetingMessage, type: "text" })

        console.tron.log(params.imgSource.toString())
        setParamState({ person: params.person, imgSource: params.imgSource.toString() })

    
      }
    }
  }

  fetchData()
}, [route])
  return (
    <SafeAreaProvider>
      <Wallpaper />
      <Header
        title={paramState ? paramState.person : ""}
        titleImage={paramState ? paramState.imgSource : null}
        leftIcon="caretLeft"
      
        onLeftPress={goBack}
      />
      <Chat messages={messages} onSendPress={handleSendPress} user={user} />
    </SafeAreaProvider>
  )
})
const FULL: ViewStyle = { flex: 1 }

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: spacing[4],
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 100,
  width: 100,
}