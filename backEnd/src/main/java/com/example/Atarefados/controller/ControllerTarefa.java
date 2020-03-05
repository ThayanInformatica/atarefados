package com.example.Atarefados.controller;


import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.model.Tarefa;
import com.example.Atarefados.repository.EstadoTarefaRepository;
import com.example.Atarefados.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class ControllerTarefa {

    @Autowired
    TarefaRepository tarefaRepository;

    @Autowired
    EstadoTarefaRepository estadoTarefaRepository;

    @GetMapping("/todas-tarefas")
    public ResponseEntity<List<Tarefa>> recuperarTodasTarefas(){

        List<Tarefa> tarefas = tarefaRepository.findAllByOrderByDataTarefaDesc();

        return ResponseEntity.status(HttpStatus.OK).body(tarefas);
    }

    @GetMapping("/minhas-tarafas/{idUsuario}")
    public ResponseEntity<List<Tarefa>> recuperarTodasTarefas(@PathVariable Long idUsuario){

        List<Tarefa> minhasTarefas = tarefaRepository.recuperarTarefasDoUsuarioPorDataDiaria(idUsuario);

        return ResponseEntity.status(HttpStatus.OK).body(minhasTarefas);
    }

    @GetMapping("/todas-tarefas-do-dia")
    public ResponseEntity<List<Tarefa>> recuperarTodasTarefasDoDia(){

        List<Tarefa> tarefas = tarefaRepository.recuperarTodasTarefasDoDia();

        return ResponseEntity.status(HttpStatus.OK).body(tarefas);
    }

}
