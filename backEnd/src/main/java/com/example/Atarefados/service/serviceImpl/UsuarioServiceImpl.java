package com.example.Atarefados.service.serviceImpl;

import com.example.Atarefados.exception.ApplicationException;
import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import com.example.Atarefados.model.dto.UsuarioDTO;
import com.example.Atarefados.repository.UsuarioLoginRepository;
import com.example.Atarefados.repository.UsuarioRepository;
import com.example.Atarefados.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioLoginRepository usuarioLoginRepository;

    @Transactional
    @Override
    public Usuario criarUsuario(UsuarioDTO usuarioDTO) {

        UsuarioLogin usuarioLogin = usuarioLoginRepository.findbyLogin(usuarioDTO.getUsuarioLogin().getLogin());
        if (usuarioLogin != null) {
            throw new ApplicationException("Usuario ja esta cadastrado");
        }

        UsuarioLogin usuarioLoginSalvo = usuarioLoginRepository.save(usuarioDTO.getUsuarioLogin());
        usuarioDTO.getUsuario().setUsuarioLogin(usuarioLoginSalvo);
        return usuarioRepository.save(usuarioDTO.getUsuario());

    }

    @Override
    public UsuarioLogin verificarUsuario(UsuarioLogin usuariologin) {

        UsuarioLogin usuarioEncontrado = usuarioLoginRepository.findbyLogin(usuariologin.getLogin());

        if (usuarioEncontrado == null) {
            throw new ApplicationException("Usuario não encontrado");
        } else if (!usuariologin.getSenha().equals(usuarioEncontrado.getSenha())) {
            throw new ApplicationException("Senha incorreta");
        }
        return usuarioEncontrado;
    }
}
