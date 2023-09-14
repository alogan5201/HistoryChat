import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Screen, Wallpaper, Header } from "../components"
import { v4 as uuidv4 } from "uuid"
import { Chat, MessageType } from "@flyerhq/react-native-chat-ui"
import { spacing } from "../theme"
import { useNavigation, useRoute, Link, RouteProp } from "@react-navigation/native"
import { AppStackParamList, AppStackScreenProps } from "app/navigators/AppNavigator"
export interface ChatScreenProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ChatScreen = observer(function ChatScreen(props: ChatScreenProps) {
  const [paramState, setParamState] = React.useState(null)
  const { style } = props
  const $styles = [$container, style]
  const [messages, setMessages] = React.useState<MessageType.Any[]>([])
  const user = { id: "06c33e8b-e835-4736-80f4-63f44b66666c" }
  const navigation = useNavigation()
      const route = useRoute<RouteProp<AppStackParamList, "Chat">>()
      const params = route.params
  const goBack = () => navigation.goBack()
  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages])
  }

  const handleSendPress = (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: "text",
    }
    addMessage(textMessage)
  }

      React.useEffect(() => {
        if (route.params) {
          if (params.person && params.imgSource) {
            console.tron.log(params.imgSource.toString())
              setParamState({ person: params.person, imgSource: params.imgSource.toString() })
          }
          
        }
      }, [route])
  return (
    <>
      <Wallpaper />
      <View >
      <Header
        title={paramState ? paramState.person : ""}
        titleImage={paramState ? paramState.imgSource : null}
        leftIcon="caretLeft"
        safeAreaEdges={[]}
        onLeftPress={goBack}
      />

      </View>
      <Chat messages={messages} onSendPress={handleSendPress} user={user} />
    </>
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