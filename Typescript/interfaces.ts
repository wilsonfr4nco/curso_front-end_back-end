// interfaces é algo que existe só no typescript
// tem uma função semelhante aos dos types, mas são mais recomendadas de serem utilizadas.
// ela é bem utilizada em conjunto com as classes

interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Wilson',
        email: 'wilson@meuemail.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}