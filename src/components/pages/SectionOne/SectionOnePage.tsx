import { Section } from '../../Section'
import { PageProps } from '../PageProps'
import { useAppDispatch, useAppSelector } from '../../../store'
import { colorSlice } from '../../../store/reducers/ColorSlice'
import { textSlice } from '../../../store/reducers/TextSlice'
import './style/style.css'

enum Colors {
    red = "#a00",
    blue = "#0a0",
    green = "#00a",
}

export default function SectionOnePage(props: PageProps) {
  const {color} = useAppSelector(state => state.colorReducer)
  const changeColor = colorSlice.actions.change;

  const {text} = useAppSelector(state => state.textReducer)
  const changeText = textSlice.actions.change;
  
  const dispatch = useAppDispatch();

  return (
    <Section title={"Раздел 1"}>
        <div className="btn-container">
            <button onClick={() => dispatch(changeColor(Colors.red))} className={'red' + (color===Colors.red?" selected":"")}>Красный</button>
            <button onClick={() => dispatch(changeColor(Colors.green))} className={'blue' + (color===Colors.green?" selected":"")}>Зелёный</button>
            <button onClick={() => dispatch(changeColor(Colors.blue))} className={'green' + (color===Colors.blue?" selected":"")}>Синий</button>
        </div>
        <br/>

        <input onInput={(e) => dispatch(changeText(e.currentTarget.value))} type="text" style={{width: "100%"}} defaultValue={text}/>
    </Section>
  )
}
