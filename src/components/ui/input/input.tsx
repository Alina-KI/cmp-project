import React, { InputHTMLAttributes } from 'react'
import s from './input.module.sass'
import { useController, UseControllerProps } from 'react-hook-form'

type Props = UseControllerProps<any, any> & InputHTMLAttributes<HTMLInputElement> & {
  normalize?: (value: string) => any
}

export const Input = ({ normalize = (v: string) => v, control, name, ...props }: Props) => {
  const { field } = useController({ control, name })
  return (
    <input
      className={s.inputElement} {...props}
      {...field} onChange={(e) => field.onChange(normalize(e.target.value))}/>
  )
}