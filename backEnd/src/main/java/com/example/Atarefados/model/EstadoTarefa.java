package com.example.Atarefados.model;


import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

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

    @OneToOne
    @JoinColumn(name = "id_tarefa")
    private Tarefa tarefa;

}
