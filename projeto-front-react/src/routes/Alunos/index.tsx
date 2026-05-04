import { useEffect, useState } from "react";
import type { tipoAluno } from "../../types/tipoaluno";

export default function Alunos() {
  const [alunos, setAlunos] = useState<tipoAluno[]>([]);

  useEffect(() => {
    const callList = async () => {
      try {
        const response = await fetch("http://localhost:3000/alunos");

        if (response.ok) {
          const data: tipoAluno[] = await response.json();

          setAlunos(data);

          console.log(data);
        } else {
          throw new Error("Listagem incompleta!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    callList();
    console.log(alunos);
  }, []);

  return (
    <main>
      <h1>Alunos</h1>

      <div>
        <ul>
          {alunos.map((u, indice) => (
            <li key={indice}>
              {u.id} - {u.rm} - {u.aluno} - {u.nota}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
