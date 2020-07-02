package com.example.Atarefados.model.dto;

import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.model.Tarefa;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TarefaEstadoDTO {

    private Tarefa tarefa;
    private EstadoTarefa estadoTarefa;
}
