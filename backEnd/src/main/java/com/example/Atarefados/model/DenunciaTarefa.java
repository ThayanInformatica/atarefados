package com.example.Atarefados.model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "denuncia_tarefa")
public class DenunciaTarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_denuncia")
    private Long idDenuncia;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "data_denuncia")
    private LocalDateTime dataDenuncia;

    @ManyToOne
    @JoinColumn(name = "id_tarefa")
    private Tarefa tarefa;

    @OneToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

}
