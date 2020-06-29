package com.example.Atarefados.controller;


import com.example.Atarefados.model.DenunciaTarefa;
import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.model.Tarefa;
import com.example.Atarefados.repository.EstadoTarefaRepository;
import com.example.Atarefados.repository.TarefaRepository;
import com.example.Atarefados.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class ControllerTarefa {

    @Autowired
    private TarefaRepository tarefaRepository;

    @Autowired
    private TarefaService tarefaService;

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

    @PutMapping("/concluir-tarefa/")
    public ResponseEntity<EstadoTarefa> concluirTarefa(@Valid @RequestBody EstadoTarefa estadoTarefa){

        tarefaService.concluirTarefa(estadoTarefa);

        return ResponseEntity.status(HttpStatus.OK).body(estadoTarefa);
    }

    @PostMapping("/denunciar-tarefa")
    private ResponseEntity<?> denunciarTarefa(@RequestBody DenunciaTarefa denunciaTarefa) {
        tarefaService.denunciarTarefa(denunciaTarefa);

        return ResponseEntity.status(HttpStatus.OK).body(denunciaTarefa);
    }

}
