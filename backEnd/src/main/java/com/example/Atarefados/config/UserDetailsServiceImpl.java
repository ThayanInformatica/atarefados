package com.example.Atarefados.config;

import com.example.Atarefados.model.UsuarioLogin;
import com.example.Atarefados.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    // Criar repository spring para Usuario
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        // Criar classe de entidade para Usuario
        UsuarioLogin usuario = usuarioRepository.findbyLogin(login);

        if (usuario != null) {
            return User.withUsername(usuario.getLogin()).password(passwordEncoder.encode(usuario.getSenha())).roles("CLIENT").build();
        } else {
            throw new UsernameNotFoundException("Não foi possível encontrar o usuário " + login);
        }
    }
}