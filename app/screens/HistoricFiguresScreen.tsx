import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { ListItem, Screen, Text } from "../components"
import { DemoTabScreenProps } from "../navigators/DemoNavigator"
import { spacing ,colors} from "../theme"
import { openLinkInBrowser } from "../utils/openLinkInBrowser"
import { isRTL } from "../i18n"
import { AutoImage, AvatarImage } from 'app/components'
import { Asset } from "expo-asset"

const chainReactLogo = require("../../assets/images/cr-logo.png")
const reactNativeLiveLogo = require("../../assets/images/rnl-logo.png")
const reactNativeRadioLogo = require("../../assets/images/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../assets/images/rnn-logo.png")
const abrahamLincoln = require("../../assets/images/AbrahamLincoln.png")

const albertEinstein = require("../../assets/images/albertEinstein.png")
const martinLuther = require("../../assets/images/martinLuther.png")
const jimmyhendrix = require("../../assets/images/jimmyhendrix.png")
const gandhi = require("../../assets/images/ghandi.png")



export const HistoricFiguresScreen: FC<DemoTabScreenProps<"HistoricFiguresScreen">> =
  function HistoricFiguresScreen(_props) {
      const { navigation } = _props
  const handlePress = async (person, imgSource, greetingMessage) => {
    // Preload image(s) for the next screen
    await Asset.fromURI(imgSource).downloadAsync()
    // Navigate after preloading
        navigation.navigate("Chat", {
                person: "Abraham Lincoln",
                imgSource: abrahamLincoln,
                greetingMessage:
                  "Greetings! I am Abraham Lincoln, the 16th President of the United States. My tenure saw the nation through its most tumultuous times. I am here to engage in a meaningful dialogue with you. What would you like to discuss about the fabric of our nation or the ideals of liberty and democracy?",
              })
  }

    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="heading" text="People" style={$title} />

        <View style={$personContainer}>
          <ListItem
            TextProps={{ style: $text }}
            text="Abraham Lincoln"
            bottomSeparator
            LeftComponent={
              <View style={$logoContainer}>
                <Image source={abrahamLincoln} style={$logo} />
              </View>
            }
            onPress={() => {
              // Here's how you can pass dynamic props
              navigation.navigate("Chat", {
                person: "Abraham Lincoln",
                imgSource: abrahamLincoln,
                greetingMessage:
                  "Greetings! I am Abraham Lincoln, the 16th President of the United States. My tenure saw the nation through its most tumultuous times. I am here to engage in a meaningful dialogue with you. What would you like to discuss about the fabric of our nation or the ideals of liberty and democracy?",
              })
            }}
          />
        </View>
        <View style={$personContainer}>
          <ListItem
            TextProps={{ style: $text }}
            text="Albert Einstein"
            bottomSeparator
            LeftComponent={
              <View style={$logoContainer}>
                <Image source={albertEinstein} style={$logo} />
              </View>
            }
            onPress={() => {
              // Here's how you can pass dynamic props
              navigation.navigate("Chat", {
                person: "Albert Einstein",
                imgSource: albertEinstein,
                greetingMessage:
                  "Greetings! I am Albert Einstein, a physicist and philosopher of science. It is an honor to converse with you today. What topics interest you? Let us embark on a journey of intellectual exploration together.",
              })
            }}
          />
        </View>
        <View style={$personContainer}>
          <ListItem
            TextProps={{ style: $text }}
            text="Jimi Hendrix"
            bottomSeparator
            LeftComponent={
              <View style={$logoContainer}>
                <Image source={jimmyhendrix} style={$logo} />
              </View>
            }
            onPress={() => {
              // Here's how you can pass dynamic props
              navigation.navigate("Chat", {
                person: "Jimi Hendrix",
                imgSource: jimmyhendrix,
                greetingMessage:
                  "Hello there! I'm Jimi Hendrix, a guitarist and songwriter whose tunes traveled through time. Music is the language of our souls, and I'm thrilled to share my world with you. Which melodies resonate with your spirit?",
              })
            }}
          />
        </View>

        <View style={$personContainer}>
          <ListItem
            TextProps={{ style: $text }}
            text="Mahatma Gandhi"
            bottomSeparator
            LeftComponent={
              <View style={$logoContainer}>
                <Image source={gandhi} style={$logo} />
              </View>
            }
            onPress={() => {
              // Here's how you can pass dynamic props
              navigation.navigate("Chat", {
                person: "Mahatma Gandhi",
                imgSource: gandhi,
                greetingMessage:
                  "Namaste! I am Mahatma Gandhi, a leader and advocate for nonviolent resistance. Peace and perseverance have been the tenets of my life. I look forward to discussing the paths of truth and harmony. What principles guide your life's journey?",
              })
            }}
          />
        </View>
        <View style={$personContainer}>
          <ListItem
            TextProps={{ style: $text }}
            text="Martin Luther King Jr."
            bottomSeparator
            LeftComponent={
              <View style={$logoContainer}>
                <Image source={martinLuther} style={$logo} />
              </View>
            }
            onPress={() => {
              // Here's how you can pass dynamic props
              navigation.navigate("Chat", {
                person: "Martin Luther King Jr.",
                imgSource: martinLuther,
                greetingMessage:
                  "Greetings! I am Martin Luther King Jr., a civil rights leader who dreamt of a world where all are judged by the content of their character. In the pursuit of justice and equality, I have marched many miles. How can we further the dream of unity and peace today?",
              })
            }}
          />
        </View>
        <Text preset="subheading" tx="demoCommunityScreen.joinUsOnSlackTitle" />
        <Text tx="demoCommunityScreen.joinUsOnSlack" style={$description} />
        <ListItem
          tx="demoCommunityScreen.joinSlackLink"
          leftIcon="slack"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          onPress={() => openLinkInBrowser("https://community.infinite.red/")}
        />
        <Text
          preset="subheading"
          tx="demoCommunityScreen.makeIgniteEvenBetterTitle"
          style={$sectionTitle}
        />
        <Text tx="demoCommunityScreen.makeIgniteEvenBetter" style={$description} />
        <ListItem
          tx="demoCommunityScreen.contributeToIgniteLink"
          leftIcon="github"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite")}
        />

        <Text
          preset="subheading"
          tx="demoCommunityScreen.theLatestInReactNativeTitle"
          style={$sectionTitle}
        />
        <Text tx="demoCommunityScreen.theLatestInReactNative" style={$description} />

        <ListItem
          tx="demoCommunityScreen.reactNativeNewsletterLink"
          bottomSeparator
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeNewsletterLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://reactnativenewsletter.com/")}
        />
        <ListItem
          tx="demoCommunityScreen.reactNativeLiveLink"
          bottomSeparator
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={reactNativeLiveLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://rn.live/")}
        />
        <ListItem
          tx="demoCommunityScreen.chainReactConferenceLink"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          LeftComponent={
            <View style={$logoContainer}>
              <Image source={chainReactLogo} style={$logo} />
            </View>
          }
          onPress={() => openLinkInBrowser("https://cr.infinite.red/")}
        />
        <Text preset="subheading" tx="demoCommunityScreen.hireUsTitle" style={$sectionTitle} />
        <Text tx="demoCommunityScreen.hireUs" style={$description} />
        <ListItem
          tx="demoCommunityScreen.hireUsLink"
          leftIcon="clap"
          rightIcon={isRTL ? "caretLeft" : "caretRight"}
          onPress={() => openLinkInBrowser("https://infinite.red/contact")}
        />
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: 20,
  paddingHorizontal: spacing.lg,
}
const $personContainer: ViewStyle = {
  marginBottom: 30
}
const $title: TextStyle = {
  marginBottom: spacing.lg,
}
const $text: TextStyle = {
  fontSize: 20,
}

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
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

const $imageContainer: ViewStyle = {
  alignItems: "center",
}
