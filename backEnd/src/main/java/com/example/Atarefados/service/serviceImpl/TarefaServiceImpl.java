package com.example.Atarefados.service.serviceImpl;

import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.repository.EstadoTarefaRepository;
import com.example.Atarefados.repository.TarefaRepository;
import com.example.Atarefados.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class TarefaServiceImpl implements TarefaService {

    @Autowired
    private TarefaRepository tarefaRepository;

    @Autowired
    private EstadoTarefaRepository estadoTarefaRepository;


    @Transactional
    @Override
    public void concluirTarefa(EstadoTarefa estadoTarefa) {
        estadoTarefa.setConcluida(true);
        estadoTarefa.setDataConclusao(LocalDateTime.now());
        estadoTarefaRepository.save(estadoTarefa);
    }
}
