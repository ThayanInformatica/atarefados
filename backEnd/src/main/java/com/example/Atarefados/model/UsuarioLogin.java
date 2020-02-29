package com.example.Atarefados.model;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name = "usuario_login")
public class UsuarioLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_login")
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "senha")
    private String senha;

}
