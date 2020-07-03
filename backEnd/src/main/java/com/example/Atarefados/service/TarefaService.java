package com.example.Atarefados.service;

import com.example.Atarefados.model.DenunciaTarefa;
import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.model.Tarefa;
import com.example.Atarefados.model.dto.TarefaEstadoDTO;

import java.util.List;
import java.util.Optional;

public interface TarefaService {

    EstadoTarefa concluirTarefa(Tarefa tarefa);

    void denunciarTarefa(DenunciaTarefa denunciaTarefa);

    List<TarefaEstadoDTO> recuperarTarefasDoUsuarioPorDataDiaria(Optional<String> idUsuario);
}
