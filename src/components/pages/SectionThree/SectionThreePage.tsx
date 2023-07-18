import React from 'react'
import { Section } from '../../Section'
import { SideMenu } from '../../SideMenu'
import { ISideMenuButton, SideMenuPosition } from '../../SideMenu/SideMenu'
import { useSearchParams } from 'react-router-dom'
import { Block1, Block2, Block3 } from './blocks'
import { useAppSelector } from '../../../store'

export default function SectionThreePage() {
  const buttons = [
    {
      title: "Подменю 1",
      name: "menu_1",
      body: (<Block1 key="menu_1"/>)
    },
    {
      title: "Подменю 2",
      name: "menu_2",
      body: (<Block2 key="menu_2"/>)
    },
    {
      title: "Подменю 3",
      name: "menu_3",
      body: (<Block3 key="menu_3"/>)
    }
  ]
  const sideMenuName: string = "side1";

  const [searchParams, setSearchParams] = useSearchParams();
  const opendMenuName = searchParams.get(sideMenuName)?searchParams.get(sideMenuName):"menu_1";

  const color = useAppSelector<string>(state => state.colorReducer.color)

  return (
    <>
      <SideMenu bg={color} buttons={buttons}name={sideMenuName} width="200px" position={SideMenuPosition.LEFT}/>
      <Section title="Раздел 3">
          {
            buttons.map((btn) => {
              { 
                if (opendMenuName === btn.name)
                  return btn.body;
              }
            })
          }
      </Section>
    </>
  )
}
