package com.example.Atarefados.repository;

import com.example.Atarefados.model.Usuario;
import com.example.Atarefados.model.UsuarioLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioLoginRepository extends JpaRepository<UsuarioLogin, Long> {

    @Query("SELECT u FROM UsuarioLogin u WHERE u.login = ?1 ")
    UsuarioLogin findbyLogin(String login);

    @Query("SELECT u FROM UsuarioLogin u WHERE u.id = ?1 ")
    UsuarioLogin findByOne(Long id);
}
