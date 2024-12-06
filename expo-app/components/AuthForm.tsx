/* resuable component for auth forms, such as login and register
allows for dynamic input fields, title, button text, and links */

import React from 'react'
import { YStack, XStack, Text, Input, Button, H3 } from 'tamagui'
import { Link } from 'expo-router'
import { KeyboardTypeOptions } from 'react-native'

interface InputField {
  label: string
  placeholder: string
  keyboardType?: KeyboardTypeOptions
  secureTextEntry?: boolean
}

interface AuthFormProps {
  title: string
  buttonText: string
  linkText: string
  linkHref: string
  linkDescription: string
  inputFields: InputField[]
  forgotPasswordLink?: { text: string; href: string }
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  linkText,
  linkHref,
  linkDescription,
  inputFields,
  forgotPasswordLink,
}) => {
  return (
    <YStack f={1} ai='center' jc='center' gap='$3'>
      <H3 mb='$6' mt='$-6'>
        {title}
      </H3>
      {inputFields.map((field, index) => (
        <YStack key={index} width='75%'>
          <Text ta='left' mb='$2.5' ml='$3.5'>
            {field.label}
          </Text>
          <Input
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
            secureTextEntry={field.secureTextEntry}
          />
        </YStack>
      ))}
      {forgotPasswordLink && (
        <Link
          href={forgotPasswordLink.href}
          style={{
            color: 'blue',
            textDecorationLine: 'underline',
            marginTop: 10,
          }}
        >
          {forgotPasswordLink.text}
        </Link>
      )}
      <Button variant='outlined' width='75%' mt='$6'>
        {buttonText}
      </Button>
      <XStack mt='$3'>
        <Text>{linkDescription}</Text>
        <Link
          href={linkHref}
          style={{
            textDecorationLine: 'underline',
            color: 'blue',
            marginLeft: 5,
          }}
        >
          {linkText}
        </Link>
      </XStack>
    </YStack>
  )
}

export default AuthForm
