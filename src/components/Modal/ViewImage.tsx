import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        my="auto"
        maxW="900px"
        maxH="600px"
        bgColor="pGray.800"
      >
        <ModalBody p={0}>
          <Image src={imgUrl} maxW="900px" maxH="600px" />
        </ModalBody>

        <ModalFooter
          h="2rem"
          bgColor="pGray.800"
          borderBottomRadius="5px"
          justifyContent="start"
        >
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
