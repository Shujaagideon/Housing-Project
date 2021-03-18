import React from 'react'
import { Container, Wrapp, StartTitle, CustomBtn } from '../../styles/common'
import { LogWrapper, Form, Input } from '../../styles/login'

const Login = () => {
    return (
        <Container>
            <Wrapp center>
                <LogWrapper>
                    <StartTitle center>
                        Login
                    </StartTitle>
                        <Form login action="">
                        <div className="input-holder">
                            <Input type="email" placeholder='e-mail' id='email' required/>
                            <label htmlFor="email">e-mail</label>
                        </div>
                        <div className="input-holder">
                            <Input type="password" placeholder='password' id='pass' required/>
                            <label htmlFor="pass">password</label>
                        </div>

                            <CustomBtn login>
                                Login
                            </CustomBtn>
                        </Form>

                </LogWrapper>
            </Wrapp>
        </Container>
    )
}

export default Login
