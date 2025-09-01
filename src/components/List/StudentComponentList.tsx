//import React from "react";
import {
  ButtonGroup,
  Heading,
  IconButton,   
  Pagination,
  Stack,
  Table,
} from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import type { StudentModel } from "../../types/StudentModel";



const StudentComponentList = ({list} : {list: StudentModel[]}) => {

    return (
        <>
        <Stack width="full" gap="5">
            <Heading size="xl">Lista de Alunos</Heading>
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
        </>
    )
}

export default StudentComponentList