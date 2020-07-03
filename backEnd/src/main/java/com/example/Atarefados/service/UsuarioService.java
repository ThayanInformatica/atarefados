package com.example.Atarefados.service;

import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import com.example.Atarefados.model.dto.UsuarioDTO;

public interface UsuarioService {

    Usuario criarUsuario(UsuarioDTO usuarioDTO);

    UsuarioLogin verificarUsuario(UsuarioLogin usuario);

}
