package com.example.Atarefados.repository;

import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstadoTarefaRepository extends JpaRepository<EstadoTarefa, Long> {

    EstadoTarefa findByTarefa(Tarefa tarefa);
}
