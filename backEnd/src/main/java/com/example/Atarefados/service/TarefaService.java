package com.example.Atarefados.service;

import com.example.Atarefados.model.DenunciaTarefa;
import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.model.Tarefa;
import com.example.Atarefados.model.dto.TarefaEstadoDTO;

import java.util.List;

public interface TarefaService {

    EstadoTarefa concluirTarefa(Tarefa tarefa);

    void denunciarTarefa(DenunciaTarefa denunciaTarefa);

    List<TarefaEstadoDTO> recuperarTarefasDoUsuarioPorDataDiaria(Long idUsuario);
}
