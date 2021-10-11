import MainLayout from "../layouts/MainLayout";
import {useState} from 'react';
import {Col, Row, Button, Form, Card} from 'react-bootstrap'
import {signIn} from '../api'
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClick = () => {
        signIn(username, password)
    }

    return (
        <MainLayout>
            <Row className="justify-content-center">
                <Col lg={6} md={8}>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center"><b>LOGIN</b></h3>

                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>

                        <Button variant="standard" className="d-block mt-3" size="md"  onClick={onClick}>Sign In</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </MainLayout>
    )
}

export default Login;