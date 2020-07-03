package com.example.Atarefados.model.dto;

import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDTO {

    private Usuario usuario;
    private UsuarioLogin usuarioLogin;
}
