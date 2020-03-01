package com.example.Atarefados.controller;


import com.example.Atarefados.controller.eventos.CriadorDeEventos;
import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import com.example.Atarefados.repository.UsuarioLoginRepository;
import com.example.Atarefados.repository.UsuarioRepository;
import com.example.Atarefados.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import javax.validation.Valid;
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
    public ResponseEntity<Usuario> criaUsuario(@Valid @RequestBody  Usuario usuario){

        Usuario usuarioSalvo = usuarioService.criarUsuario(usuario);

        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioSalvo);

    }


}
