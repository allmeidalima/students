import { useEffect, useState } from "react"
import StudentComponentList from "../components/List/StudentComponentList"
import type { StudentModel } from "../types/StudentModel"
import { getStudents } from "../api/studentService";

const studentList : StudentModel[] = [];

const StudentList = () => {

  const [students, setStudents] = useState<StudentModel[]>(studentList);
  const [error, setError] = useState("");


  // funcao que aceita dois argumentos
  useEffect(() => {
    //1. O que ele vai fazer
    getStudents()
    .then(
      data => setStudents(data)
    )
    .catch(
      ex => {
        const erro = ex.response.status == 404
        ? "Resource Not found"
        : "An unexpected error has occurred";
        setError(erro);
      }
    )
  }, [/** 2. Quando fazer (as dependencias) */]);

  useEffect(() => {
    //1. O que ele vai fazer
    console.log('Componente renderizado')!
  });


  console.log("Alunos: ", students);

  return (
    <>
       <div>
        <StudentComponentList
        list={students}
        />
        {error && <p className="error">{error}</p>}
       </div>
    </>
  )
}

export default StudentList