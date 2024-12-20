import React from 'react'
import AuthForm from 'components/AuthForm'

export default function Signup() {
  return (
    <AuthForm
      title='Create an account'
      buttonText='Sign up'
      linkText='Sign in'
      linkHref='/signin'
      linkDescription='Already have an account?'
      inputFields={[
        {
          label: 'Email',
          placeholder: 'email@example.com',
          keyboardType: 'email-address',
        },
        { label: 'Password', placeholder: 'password', secureTextEntry: true },
        {
          label: 'Confirm Password',
          placeholder: 're-enter password',
          secureTextEntry: true,
        },
      ]}
    />
  )
}
