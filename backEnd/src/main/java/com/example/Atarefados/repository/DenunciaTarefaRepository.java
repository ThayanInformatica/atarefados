package com.example.Atarefados.repository;

import com.example.Atarefados.model.DenunciaTarefa;
import com.example.Atarefados.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface DenunciaTarefaRepository extends JpaRepository<DenunciaTarefa, Long> {

    @Query("select d from DenunciaTarefa d where d.tarefa.idTarefa = :idTarefa " +
            "and d.usuario.idUsuario = :idUsuario")
    DenunciaTarefa findAllByUsuarioIdUsuarioAndTarefaIdTarefa(Long idUsuario, Long idTarefa);

}

