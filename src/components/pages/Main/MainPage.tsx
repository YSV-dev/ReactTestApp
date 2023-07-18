import React from 'react'
import { PageProps } from '../PageProps'
import { Section } from '../../Section'

export default function MainPage(props: PageProps) {
  return (
    <Section title={"Главная страница"}>
        <p>Автор: <a href="https://t.me/qwerty5723">Янишен Сергей Владимирович</a></p>
        <p>Начало разработки: 15.07.2023</p>
    </Section>
  )
}
