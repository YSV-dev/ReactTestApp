import { useAppSelector } from './store/hooks/redux';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Route, useLocation, Routes} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { AboutPage, MainPage, SectionOnePage, SectionThreePage, SectionTwoPage } from './components/pages';
import "./components/style/general.css"

function App() {
  const {} = useAppSelector(state => state.todoReducer.todos)
  const location = useLocation();

  const pageTransitions = useTransition(location, {
    from: { opacity: 0, position: 'absolute' as const, config: {duration: 250}},
    enter: { opacity: 1, position: 'relative' as const, config: {duration: 250}},
    leave: { opacity: 0, position: 'absolute' as const, config: {duration: 250}}
  });

  return (
      <div className="App">
        <div className="content">
          <NavBar/>
          <div className='container'>
          {
            pageTransitions((style, item) => (
              <animated.div style={{...style}} className="wraper">
                <Routes location={item}>
                  <Route path="" element={<MainPage/>}></Route>
                  <Route path="/section_one" element={<SectionOnePage/>}></Route>
                  <Route path="/section_two" element={<SectionTwoPage/>}></Route>
                  <Route path="/section_three" element={<SectionThreePage/>}></Route>
                  <Route path="about" element={<AboutPage/>}></Route>
                </Routes>
              </animated.div>
            ))
          }
          </div>
        </div>
      </div>
  )
}

export default App;
