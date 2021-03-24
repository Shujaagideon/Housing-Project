import React,{useEffect} from 'react'
import { Container, StartTitle } from '../../styles/common'
import { Avatar, SettingsPage, SettComponent, CheckBox } from '../../styles/setting'
import SmoothScroll from '../SmoothScroll/SmoothScroll'
import { Fdata } from '../UIdata/framerData'
import { useGlobalDispatch, useGlobalState } from '../UIdata/statecontext'

const Settings = () => {
    const dispatch = useGlobalDispatch();
    const {theme} = useGlobalState();
    const { logedin } = useGlobalState();
    let first = window.localStorage.getItem('name') ? window.localStorage.getItem('name')[0] : '';
    let last = window.localStorage.getItem('name') ? window.localStorage.getItem('name')[1] : '';

    const themeToogle = ()=>{
        theme === 'light' ? dispatch({ type: 'theme', theme: 'dark' }) : dispatch({ type: 'theme', theme: 'light' });
    }
    useEffect(() => {
        window.localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <Container>
            <SmoothScroll>
                <StartTitle center>
                    Settings
                </StartTitle>
                <SettingsPage>
                    <Avatar large>
                        {logedin && <img src="" alt="" id='avatar' />}
                    </Avatar>
                    <label htmlFor="avatar">{first} {last}</label>

                    <SettComponent>
                        <div className="ui-settings">
                            <StartTitle>
                                <p> ui settings</p>
                            </StartTitle>
                            <div className="theme-toogle">
                                <p>theme</p>
                                <CheckBox type='checkbox' onClick={themeToogle} transition={Fdata.transition}/>
                            </div>
                            <div className="theme-toogle">
                                <p>fullscreen</p>
                                <CheckBox type='checkbox'/>
                            </div>
                            <div className="theme-toogle">
                                <p>neon</p>
                                <CheckBox type='checkbox'/>
                            </div>
                            
                        </div>
                        <div className="user-settings">
                            <StartTitle>
                                <p>user settings</p>
                            </StartTitle>
                        </div>
                    </SettComponent>
                </SettingsPage>
            </SmoothScroll>
        </Container>
    )
}

export default Settings
