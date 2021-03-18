import React from 'react'
import { Container, Wrapp, StartTitle, CustomBtn } from '../../styles/common'
import { Form, Input, LogWrapper } from '../../styles/login'

const Signup = () => {
    return (
        <Container>
            <Wrapp center>
                <LogWrapper login>
                    <StartTitle center>
                        SignUp
                </StartTitle>
                    <Form action="">
                        <div className="input-holder">
                            <Input type="text" placeholder='First Name' id='first' required />
                            <label htmlFor="first">First Name</label>
                        </div>
                        <div className="input-holder">
                            <Input type="text" placeholder='Last Name' id='last' required />
                            <label htmlFor="last">Last Name</label>
                        </div>
                        <div className="input-holder">
                            <Input type="email" placeholder='e-mail' id='email' required />
                            <label htmlFor="email">e-mail</label>
                        </div>
                        <div className="input-holder">
                            <Input type="password" placeholder='password' id='pass' required />
                            <label htmlFor="pass">password</label>
                        </div>

                        <CustomBtn>
                            SignUp
                        </CustomBtn>
                    </Form>

                </LogWrapper>
            </Wrapp>
        </Container>
    )
}

export default Signup
