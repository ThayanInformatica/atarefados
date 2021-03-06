package com.example.Atarefados.service.serviceImpl;

import com.example.Atarefados.exception.ApplicationException;
import com.example.Atarefados.model.DenunciaTarefa;
import com.example.Atarefados.model.EstadoTarefa;
import com.example.Atarefados.model.Tarefa;
import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.repository.DenunciaTarefaRepository;
import com.example.Atarefados.repository.EstadoTarefaRepository;
import com.example.Atarefados.repository.TarefaRepository;
import com.example.Atarefados.repository.UsuarioRepository;
import com.example.Atarefados.service.TarefaService;
import net.bytebuddy.implementation.bytecode.Throw;
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

    @Autowired
    private DenunciaTarefaRepository denunciaTarefaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;


    @Transactional
    @Override
    public void concluirTarefa(EstadoTarefa estadoTarefa) {
        estadoTarefa.setConcluida(true);
        estadoTarefa.setPendente(false);
        estadoTarefa.setDataConclusao(LocalDateTime.now());
        estadoTarefaRepository.save(estadoTarefa);
    }

    @Override
    public void denunciarTarefa(DenunciaTarefa denunciaTarefa) {

        DenunciaTarefa denunciaTarefaSearch = denunciaTarefaRepository.findAllByUsuarioIdUsuarioAndTarefaIdTarefa(denunciaTarefa.getUsuario().getIdUsuario(), denunciaTarefa.getTarefa().getIdTarefa());

        if (denunciaTarefaSearch != null) {
            throw new ApplicationException("Usuario já denunciou essa tarefa");
        }

        denunciaTarefaRepository.save(denunciaTarefa);
    }
}
