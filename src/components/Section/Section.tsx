import React from 'react'
import "./style/style.css"

export interface SectionProps {
    children?: React.ReactNode;
    title?: string;
}

export default function Section(props: SectionProps) {
  return (
    <section>
      <h1>{props.title}</h1>
        {props.children}
    </section>
  )
}
