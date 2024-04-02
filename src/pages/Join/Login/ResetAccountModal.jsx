import React, { useState } from 'react';
import { styled } from 'styled-components';

// components
import { Label } from './../../../components/form/Label';
import { Input } from './../../../components/form/Input';

// bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ResetAccountModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <span>아이디 찾기</span>
          <span>비밀번호 찾기</span>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Label htmlFor="email" text="이메일" />
            <Input type="email" id="email" />
          </div>
          <div>
            <Label htmlFor="password" text="비밀번호" />
            <Input type="password" id="password" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">아이디 찾기</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
