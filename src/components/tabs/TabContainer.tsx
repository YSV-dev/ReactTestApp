import React, { useState } from 'react';
import Tab from './Tab';
import "./style/style.css"
import { useSearchParams } from 'react-router-dom';

interface TabContainerProps {
    tabs: Tab[];
    name: string;
}

export default function TabContainer(props: TabContainerProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const firstTabName = props.tabs[0]?props.tabs[0].getName():"";

  const defaultValue = searchParams.get(props.name)?searchParams.get(props.name):firstTabName;

  const [curTab, setTab] = useState(defaultValue);
  
  function onSelect(selected_name: string) {
    setTab(selected_name);
    searchParams.set(props.name, selected_name);
    setSearchParams(searchParams);
  }

  return (
    <div className="tab-container">
        <div className="tab-container-nav">
        {
            props.tabs.map((tab: Tab) => 
                {
                    const name = tab.getName();
                    const title = tab.getTitle();
                    const clickEvent = () => onSelect(name);
                    const className = ("tab-header" + (name === curTab?" selected":""));
                    return <div key={name} onClick={clickEvent} className={className}><span>{title}</span></div>;
                }
            )
        }
        </div>
        <div className="tab-container-content">
        {
            props.tabs.map((tab: Tab) => 
                {
                    const name = tab.getName();
                    if (name === curTab)
                        return <div key={name} className='tab-content'>{tab.getContent()}</div>
                }
            )
        }
        </div>
    </div>
  )
}
