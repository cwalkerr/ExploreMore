import React from 'react'
import AuthForm from 'components/AuthForm'

export default function Signin() {
  return (
    <AuthForm
      title='Sign in to your account'
      buttonText='Sign in'
      linkText='Sign up'
      linkHref='/signup'
      linkDescription="Don't have an account?"
      inputFields={[
        {
          label: 'Email',
          placeholder: 'email@example.com',
          keyboardType: 'email-address',
        },
        { label: 'Password', placeholder: 'password', secureTextEntry: true },
      ]}
      forgotPasswordLink={{ text: 'Forgot password?', href: '/forgotPassword' }}
    />
  )
}
