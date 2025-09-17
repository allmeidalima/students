import { 
    Button,
    Flex,
    Input,
    useDisclosure
} from "@chakra-ui/react";
import { 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay 
} from "@chakra-ui/modal";
import type { StudentModel } from "../types/StudentModel";
import { useEffect, useState } from "react";
import { updateStudent } from "../api/studentService";

const EditStudent = ({studentModel}: {studentModel: StudentModel}) => {
    
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [formData, setFormData] = useState(studentModel);

  useEffect(() => {
    setFormData(studentModel);
  }, [studentModel]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateStudent(studentModel.id, formData);
    onClose();
  };

  return (
    <>
      <Button onClick={() => {
        setOverlay(<OverlayOne />);
        onOpen();
      }}>
        Editar
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        isCentered
      >
        {overlay}
        <ModalContent 
          bg="white"
          borderRadius="lg"
          boxShadow="lg"
          maxW="500px"
        >
          <ModalHeader>Editar Dados do Aluno</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={4}>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome"
              />
              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={handleSave} mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditStudent;
