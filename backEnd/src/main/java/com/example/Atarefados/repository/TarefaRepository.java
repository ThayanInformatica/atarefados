package com.example.Atarefados.repository;

import com.example.Atarefados.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {

    // Recupera todas as tarefas em ordem do ID decrescente
    List<Tarefa> findAllByOrderByDataTarefaDesc();

    @Query("SELECT t FROM Tarefa t Where t.usuario.idUsuario = ?1 and t.dataTarefa = CURRENT_DATE() ")
    List<Tarefa> recuperarTarefasDoUsuarioPorDataDiaria(Long IdUsuario);

    // Recupera todas as tarefas do dia
    @Query("SELECT t FROM Tarefa t Where t.dataTarefa = CURRENT_DATE() ")
    List<Tarefa> recuperarTodasTarefasDoDia();

}
