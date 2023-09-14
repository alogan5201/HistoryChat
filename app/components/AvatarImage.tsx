import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
const testImage = require("assets/images/AbrahamLincoln.png")

export interface AvatarImageProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const AvatarImage = observer(function AvatarImage(props: AvatarImageProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Image source={{ uri: testImage }} style={styles.avatar} />
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
const $image: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
const styles = StyleSheet.create({
  avatar: {
    width: 100, // Set width
    height: 100, // Set height
    borderRadius: 50, // Half of width and height to make it circular
    borderWidth: 2, // Optional: Add a border
    borderColor: "#fff", // Optional: Border color
  },
})
