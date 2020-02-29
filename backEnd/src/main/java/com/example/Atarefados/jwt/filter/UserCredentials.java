package com.example.Atarefados.jwt.filter;

import lombok.*;

@Data
@Getter
@Setter
public class UserCredentials {

    private String login;
    private String senha;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}