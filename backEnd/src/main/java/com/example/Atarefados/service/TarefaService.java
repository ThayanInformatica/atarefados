package com.example.Atarefados.service;

import com.example.Atarefados.model.DenunciaTarefa;
import com.example.Atarefados.model.EstadoTarefa;

public interface TarefaService {

    void concluirTarefa(EstadoTarefa estadoTarefa);

    void denunciarTarefa(DenunciaTarefa denunciaTarefa);
}
