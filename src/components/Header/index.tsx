import { motion } from 'framer-motion';
import React from 'react'
import { ModalLogin } from '../ModalLogin';
import { ModalRegister } from '../ModalRegister';

const Header = () => {
  const [isModalLoginOpen, setModalStateLogin] = React.useState(false);
  const toggleModalLogin = () => setModalStateLogin(!isModalLoginOpen);
  const [isModalRegisterOpen, setModalStateRegister] = React.useState(false);
  const toggleModalRegister = () => setModalStateRegister(!isModalRegisterOpen);

  
  return (
    <>
    <motion.div/>
<header>
  <div className={"app"}>
    <button className={"app__btn"} onClick={toggleModalLogin}>
      Login
    </button>
    <ModalLogin
      title={"Login"}
      isOpen={isModalLoginOpen}
      onClose={toggleModalLogin}
    >
      Descrição
    </ModalLogin>
  </div>
  <div className={"app"}>
    <button className={"app__btn"} onClick={toggleModalRegister}>
      Register
    </button>
    <ModalRegister
      title={"Register"}
      isOpen={isModalRegisterOpen}
      onClose={toggleModalRegister}
    >
      Descrição
    </ModalRegister>
  </div>
</header>
</>
  )
}

export default Header