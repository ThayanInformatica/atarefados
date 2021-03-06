package com.example.Atarefados.controller;


import com.example.Atarefados.model.Tarefa;
import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import com.example.Atarefados.model.dto.UsuarioDTO;
import com.example.Atarefados.repository.UsuarioLoginRepository;
import com.example.Atarefados.repository.UsuarioRepository;
import com.example.Atarefados.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.ws.Response;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class ControllerUsuarioLogin {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    UsuarioLoginRepository usuarioLoginRepository;

    @Autowired
    ApplicationEventPublisher publisher;

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping
    public ResponseEntity<Usuario> criaUsuario(@RequestBody UsuarioDTO usuarioDTO){

        Usuario usuarioSalvo = usuarioService.criarUsuario(usuarioDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioSalvo);
    }

    @PostMapping("/verificar-usuario")
    public ResponseEntity<Usuario> verificarUsuario(@Valid @RequestBody  UsuarioLogin usuario){

        UsuarioLogin usuarioEncontrado = usuarioService.verificarUsuario(usuario);

        Usuario usuarioLogado = usuarioRepository.findByUsuarioLoginId(usuarioEncontrado.getId());

        return ResponseEntity.status(HttpStatus.OK).body(usuarioLogado);
    }

    @GetMapping
    private ResponseEntity<List<Usuario>> listarUsuarios(){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioRepository.findAll());
    }
}
