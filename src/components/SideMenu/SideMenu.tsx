import React from 'react'
import './style/style.css'
import { useSearchParams } from 'react-router-dom';

export enum SideMenuPosition {
    LEFT = 'left',
    RIGHT = 'right'
}

export interface ISideMenuButton {
    title: string;
    name: string;
}

interface SideMenuProps {
    position: SideMenuPosition;
    width: string;
    name: string;
    buttons: ISideMenuButton[];
    bg?: string;
}

export default function SideMenu(props: SideMenuProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const firstBtnName = props.buttons[0]?props.buttons[0].name:"";
  const defaultValue = searchParams.get(props.name)?searchParams.get(props.name):firstBtnName;

  const [isOpend, setOpenStatus] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>(defaultValue!);

  const isLeftPos: boolean = (props.position === SideMenuPosition.LEFT);
  const translateX = `calc(${(isLeftPos?"-":"") + props.width + " " + (isLeftPos?"+":"-")} 20px)`;
  const sideMenuStyle = {width: props.width, background: props.bg, transform: `translateX(${!isOpend?translateX:"0px"})`};

  const button = (
    <div className="side-menu-button" onClick={(e) => setOpenStatus(!isOpend)}>
        <span>{ (isOpend && isLeftPos)||(!isOpend&&!isLeftPos)?<>&#9668;</>:<>&#9658;</>}</span>
    </div>);

  return (
    <div className={"side-menu"+(isLeftPos?" left":" right")} style={sideMenuStyle} >
        {!isLeftPos && button}
        <div className="side-menu-content">
            {
                props.buttons.map((btn: ISideMenuButton) => {
                    const isBtnSelected = selected===btn.name;
                    const title = btn.title;
                    const name = btn.name;

                    const clickHandler = (selected_name: string) => {
                        setSelected(selected_name);
                        setOpenStatus(false);
                        setSearchParams({[props.name]: selected_name})
                    }

                    return (<div key={name} className={"menu-button" + (isBtnSelected?" selected":"")} onClick={() => clickHandler(name)} ><span>{title}</span></div>)
                })
            }
        </div>
        {isLeftPos && button}
    </div>
  )
}
