import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { translate } from "../i18n"
import { DemoShowroomScreen, DemoDebugScreen, ChatScreen, HistoricFiguresScreen, ChatListScreen } from "../screens"
import { DemoPodcastListScreen } from "../screens/DemoPodcastListScreen"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import Config from "react-native-config"
import {nodeEnv} from "app/environment"
export type DemoTabParamList = {
  HistoricFiguresScreen: undefined
  ChatScreen: { queryIndex?: string; itemIndex?: string; person?: string, imgSource?: any}
  ChatListScreen: undefined
  DemoShowroom: { queryIndex?: string; itemIndex?: string }
  DemoDebug: undefined
  DemoPodcastList: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<DemoTabParamList>()

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets()
React.useEffect(() => {
  console.tron.log(nodeEnv)
}, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle:
          route.name === "ChatScreen" ? { display: "none" } : [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      })}
    >
      {nodeEnv === "development" && (
        <Tab.Screen
          name="DemoShowroom"
          component={DemoShowroomScreen}
          options={{
            tabBarLabel: translate("demoNavigator.componentsTab"),
            tabBarIcon: ({ focused }) => (
              <Icon icon="components" color={focused && colors.tint} size={30} />
            ),
          }}
        />
      )}

      <Tab.Screen
        name="HistoricFiguresScreen"
        component={HistoricFiguresScreen}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ focused }) => (
            <Icon icon="community" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="ChatListScreen"
        component={DemoPodcastListScreen}
        options={{
          tabBarAccessibilityLabel: "Chats",
          tabBarActiveBackgroundColor: "transparent",
          tabBarInactiveBackgroundColor: "transparent",
          tabBarLabel: "Chats",
          tabBarIcon: ({ focused }) => (
            <Icon icon="chat" color={focused && colors.tint} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="DemoDebug"
        component={DemoDebugScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <Icon icon="settings" color={focused && colors.tint} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}

// @demo remove-file
