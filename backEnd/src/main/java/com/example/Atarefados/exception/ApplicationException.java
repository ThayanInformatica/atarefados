package com.example.Atarefados.exception;

public class ApplicationException extends RuntimeException {
    private String msg;

    public ApplicationException(String msg) {
        super(msg);
        this.msg = msg;
    }

    public String getMessage() {
        return msg;
    }
}
