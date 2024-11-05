"use client"

import Link from 'next/link'
import React from 'react'

type LinkProps = {
  title: string;
  href: string;
}

export default function LinkButton({ title, href }: LinkProps) {
  return (
    <Link 
    className='flex justify-center items-center w-32 h-12 border'
    href={href}>{title}</Link>
  )
}
