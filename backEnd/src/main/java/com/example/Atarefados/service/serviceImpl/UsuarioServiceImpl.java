package com.example.Atarefados.service.serviceImpl;

import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import com.example.Atarefados.repository.UsuarioLoginRepository;
import com.example.Atarefados.repository.UsuarioRepository;
import com.example.Atarefados.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioLoginRepository usuarioLoginRepository;

    @Transactional
    @Override
    public Usuario criarUsuario(Usuario usuario) {

        usuarioLoginRepository.save(usuario.getUsuarioLogin());

        usuarioRepository.save(usuario);

        return usuario;
    }
}
