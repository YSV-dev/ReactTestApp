import React from 'react'
import { PageProps } from '../PageProps'
import { Section } from '../../Section'
import { TabContainer, Tab } from '../../tabs'
import { Block1, Block2, Block3 } from './blocks'

export default function SectionTwoPage(props: PageProps) {

  const firstBlockTab = new Tab("block_1", "Блок 1", (<Block1/>));
  const secondBlockTab = new Tab("block_2", "Блок 2", (<Block2/>))
  const thirdBlockTab = new Tab("block_3", "Блок 3", (<Block3/>))

  return (
    <Section title="Раздел 2">
        <TabContainer name="test_tab_container" tabs={[firstBlockTab, secondBlockTab, thirdBlockTab]}/>
    </Section>
  )
}
