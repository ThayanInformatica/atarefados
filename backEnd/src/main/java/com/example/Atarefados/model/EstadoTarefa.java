package com.example.Atarefados.model;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "estado_tarefa")
public class EstadoTarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estado_tarefa")
    private Long idEstado;

    @Column(name = "concluida")
    private Boolean concluida;

    @Column(name = "pendente")
    private Boolean pendente;

    @Column(name = "nao_feita")
    private Boolean naoFeita;

    @Column(name = "denuncia")
    private Boolean denuncia;

    @Column(name = "data_conclusao")
    private LocalDateTime dataConclusao;
}
