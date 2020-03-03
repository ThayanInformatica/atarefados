package com.example.Atarefados.controller;


import com.example.Atarefados.model.Tarefa;
import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import com.example.Atarefados.repository.TarefaRepository;
import com.example.Atarefados.repository.UsuarioLoginRepository;
import com.example.Atarefados.repository.UsuarioRepository;
import com.example.Atarefados.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/tarefas")
public class ControllerTarefa {

    @Autowired
    TarefaRepository tarefaRepository;

    @GetMapping("/todas-tarefas")
    public ResponseEntity<List<Tarefa>> recuperarTodasTarefas(){

        List<Tarefa> tarefas = tarefaRepository.findAll();

        return ResponseEntity.status(HttpStatus.CREATED).body(tarefas);
    }



}
