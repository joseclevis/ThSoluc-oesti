/* Estilos gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #101010;
    color: #f4f4f4;
    line-height: 1.6;
    overflow-x: hidden;
}

/* Cabeçalho */
.header {
    background: #1c1c1c;
    padding: 20px 0;
    border-bottom: 2px solid #00ffcc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header .logo {
    font-size: 2rem;
    color: #00ffcc;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 20px;
}

.navbar ul {
    display: flex;
    list-style: none;
    margin-right: 20px;
}

.navbar ul li {
    margin: 0 10px;
}

.navbar ul li a {
    text-decoration: none;
    color: #f4f4f4;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 5px 15px;
    transition: all 0.3s ease;
}

.navbar ul li a:hover, .navbar ul li a.active {
    background: #00ffcc;
    color: #101010;
    border-radius: 5px;
}

/* Seção de Serviços */
.section {
    padding: 50px 20px;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    color: #00ffcc;
    margin-bottom: 30px;
}

.section-description {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 50px;
    color: #bbb;
}

.feature {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-in-out;
}

.feature.visible {
    opacity: 1;
    transform: translateY(0);
}

.features {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
}

.feature {
    background: #222;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    flex: 1 1 calc(33.333% - 20px);
    margin-bottom: 20px;
}

.feature:hover {
    transform: translateY(-10px);
}

.feature h3 {
    font-size: 1.5rem;
    color: #00ffcc;
    margin-bottom: 10px;
}

.feature p {
    font-size: 1rem;
    color: #bbb;
}

/* Rodapé */
.footer {
    background: #1c1c1c;
    padding: 20px 0;
    text-align: center;
    color: #aaa;
}

/* Responsividade */
@media (max-width: 1024px) {
    .features {
        justify-content: space-evenly;
    }

    .feature {
        flex: 1 1 45%;
    }
}

@media (max-width: 768px) {
    .features {
        flex-direction: column;
        align-items: center;
    }

    .feature {
        flex: 1 1 100%;
        margin-bottom: 20px;
    }

    .navbar ul {
        flex-direction: column;
        align-items: center;
    }

    .navbar ul li {
        margin: 10px 0;
    }

    .header .logo {
        font-size: 1.8rem;
    }

    .navbar ul li a {
        font-size: 0.9rem;
        padding: 10px 15px;
    }
}

@media (max-width: 480px) {
    .header .logo {
        font-size: 1.6rem;
    }

    .navbar ul li a {
        font-size: 0.8rem;
        padding: 8px 12px;
    }

    .section-title {
        font-size: 1.6rem;
    }

    .section-description {
        font-size: 1rem;
    }
}
