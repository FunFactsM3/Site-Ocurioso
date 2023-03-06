import styled from "styled-components";


export const modalLoginStyled = styled.div`


.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.modal__box {
  position: relative;
  padding: 1rem;
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  z-index: 200;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  width: 400px;
  height: 400px;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
}

.modal__title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.modal__content {
  font-size: 1.25rem;

`