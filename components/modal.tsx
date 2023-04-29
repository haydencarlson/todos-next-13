import React from 'react';
import { Modal as FlowBiteModal, Button } from 'flowbite-react';

interface ModalProps {
  header: string;
  children: React.ReactNode;
  submitText: string;
  onClose: () => void;
}

export default function Modal(props: ModalProps) {
  const { header, children, submitText, onClose } = props;
  return (
    <FlowBiteModal show onClose={onClose}>
      <FlowBiteModal.Header>{header}</FlowBiteModal.Header>
      <FlowBiteModal.Body>{children}</FlowBiteModal.Body>
      <FlowBiteModal.Footer>
        <Button>{submitText}</Button>
      </FlowBiteModal.Footer>
    </FlowBiteModal>
  );
}
