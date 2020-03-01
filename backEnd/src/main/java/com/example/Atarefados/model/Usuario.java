package com.example.Atarefados.model;


import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private Long idUsuario;

    @NotNull
    @Size(max = 40, min = 5)
    @Column(name = "nome_usuario")
    private String nomeUsuario;

    @Column(name = "data_nascimento")
    private Date dataNascimento;

    @OneToOne
    @JoinColumn(name = "id_login")
    private UsuarioLogin usuarioLogin;

}
