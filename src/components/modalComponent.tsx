import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { Dispatch, ReactElement, SetStateAction, useEffect } from 'react';
import { Movie } from '@interfaces/movies.interface';

export interface Props {
  open: boolean;
  title?: ReactElement;
  content?: ReactElement;
  footer?: ReactElement;
  onCloseHandle: Dispatch<SetStateAction<Movie | null>>;
  size:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | 'full';
}

export default function ModalComponent({
  open = false,
  title,
  content,
  footer,
  onCloseHandle,
  size = '4xl',
}: Readonly<Props>) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    if (open) onOpen();
  }, [open]);

  return (
    <Modal
      size={size}
      className=' bg-black relative'
      backdrop='blur'
      isOpen={isOpen}
      onClose={() => {
        onCloseHandle(null);
        onClose();
      }}
    >
      <ModalContent>
        <>
          <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
          <ModalBody>{content}</ModalBody>
          <ModalFooter>{footer}</ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
