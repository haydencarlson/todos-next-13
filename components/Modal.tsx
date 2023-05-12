import React from 'react';
import { Modal as FlowBiteModal, Button } from 'flowbite-react';
import { FaSpinner } from 'react-icons/fa';
interface ModalProps {
  header: string;
  children: React.ReactNode;
  submitText: string;
  isLoading: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function Modal(props: ModalProps) {
  const { header, children, submitText, onClose, onSubmit, isLoading } = props;

  return (
    <FlowBiteModal show onClose={onClose} root={document.body}>
      <FlowBiteModal.Header>{header}</FlowBiteModal.Header>
      <FlowBiteModal.Body>{children}</FlowBiteModal.Body>
      <FlowBiteModal.Footer>
        <Button onClick={onSubmit}>
          {isLoading ? <FaSpinner className='animate-spin' /> : submitText}
        </Button>
      </FlowBiteModal.Footer>
    </FlowBiteModal>
  );
}
