import React from 'react';
import { Nav, Form } from 'react-bootstrap'
import { VscFilterFilled } from "react-icons/vsc";
import { CgMail, CgBell, CgShoppingCart, CgProfile } from "react-icons/cg";
import logo1 from '../assets/images/shopping-bag1.png'
import { useSelector } from 'react-redux';
import HeaderHome from './HeaderHome';
import DropDownProfile from './DropDownProfile';
import ModalFilter from './ModalFilter';

export default function HeaderProfile() {
    const token = useSelector((state)=>state.auth.token)
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <>
        {token !== null?
            <header className='mw-100 nav-home-height py-3 d-flex justify-content-around align-items-center all-font'>
                <Nav defaultActiveKey="/home" as="ul" className='gap-3'>
                    <Nav.Item as="li" className='logo-color'>
                        <Nav.Link href="/" className='d-flex flex-row'>
                        <div className=''><img src={logo1} alt='Logo' className='fluid align-self-center'/></div>
                        <h4 className='align-self-center mb-0'>Negozio</h4>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center logo-color'>
                        <Nav.Link eventKey="link-1">
                            <Form>
                                <Form.Control size='small' placeholder='Search' type='search' className='nav-search-box'>
                                
                                </Form.Control>
                            </Form>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex align-items-center'>
                    <div className='align-self-center logo-color'>
                            <button className='btn btn-md' onClick={() => setModalShow(true)}>
                            <VscFilterFilled size={24} className='logo-color'/>
                            </button>
                            <ModalFilter
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            </div>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Nav.Link eventKey="link-1" href="/mybag">
                            <div className='align-self-center logo-color'><CgShoppingCart size={24}/></div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Nav.Link eventKey="link-1">
                            <div className='align-self-center logo-color'><CgBell size={24} /></div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                        <Nav.Link eventKey="link-1" href="/chat">
                            <div className='align-self-center logo-color'><CgMail size={24} /></div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='d-flex flex-row align-items-center'>
                            <DropDownProfile />
                    </Nav.Item>
                </Nav>
            </header>
            : <HeaderHome />}
        </>
    )
}