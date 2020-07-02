package com.example.Atarefados.model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "tarefas")
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_tarefa")
    private Long idTarefa;

    @Column(name = "desricao")
    private String descricao;

    @Column(name = "nome_tarefa")
    private String nomeTarefa;

    @Column(name = "data")
    private LocalDateTime dataTarefa;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

}
