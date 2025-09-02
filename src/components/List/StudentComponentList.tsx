import {
  Box,
  ButtonGroup,
  Card,
  Heading,
  IconButton,
  Pagination,
  SimpleGrid,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import type { StudentModel } from "../../types/StudentModel";

const StudentComponentList = ({ list }: { list: StudentModel[] }) => {
  return (
    <Stack width="full" gap="5">
      <Heading size="xl">Lista de Alunos</Heading>

      {/* Tabela para Telas Grandes (lg e acima) */}
      <Box display={{ base: "none", lg: "block" }}>
        <Table.Root size="sm" variant="outline" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>R.A</Table.ColumnHeader>
              <Table.ColumnHeader>Nome</Table.ColumnHeader>
              <Table.ColumnHeader>E-mail</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Curso</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {list.map((student) => (
              <Table.Row key={student.id}>
                <Table.Cell>{student.ra}</Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.email}</Table.Cell>
                <Table.Cell textAlign="end">{student.course}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      {/* Cards para Telas Pequenas e Médias */}
      <Box display={{ base: "block", lg: "none" }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
          {list.map((student) => (
            <Card.Root key={student.id} variant="outline">
              <Card.Body>
                <Heading size="md" mb={2}>
                  {student.name}
                </Heading>
                <Text fontSize="sm" color="gray.600">
                  <strong>R.A:</strong> {student.ra}
                </Text>
                {/* CORREÇÃO APLICADA AQUI */}
                <Text fontSize="sm" color="gray.600" lineClamp={1}>
                  <strong>Email:</strong> {student.email}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  <strong>Curso:</strong> {student.course}
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>

      {/* Paginação (mantendo sua estrutura original) */}
      <Pagination.Root count={list.length * 5} pageSize={5} page={1}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
};

export default StudentComponentList;