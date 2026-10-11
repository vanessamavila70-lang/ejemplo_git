import styles from "./page.module.css";

const comandos = [
  { comando: "git init", descripcion: "Crea un repositorio nuevo en la carpeta actual." },
  { comando: "git add .", descripcion: "Prepara todos los cambios para guardarlos." },
  { comando: "git commit -m \"mensaje\"", descripcion: "Guarda los cambios en el historial." },
  { comando: "git switch -c rama", descripcion: "Crea una rama nueva y se cambia a ella." },
  { comando: "git merge rama", descripcion: "Une una rama con la rama actual." },
  { comando: "git push", descripcion: "Sube tus commits a GitHub." },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1>Git y GitHub</h1>
          <p>
            Guía rápida para entender cómo guardar la historia de tu código y
            trabajar en equipo.
          </p>
        </header>

        <section className={styles.cards}>
          <article className={styles.card}>
            <h2>¿Qué es Git?</h2>
            <p>
              Git es un <strong>sistema de control de versiones</strong> que
              funciona en tu computadora. Registra cada cambio que haces en tus
              archivos para que puedas volver a una versión anterior, comparar
              cambios y trabajar en varias ideas a la vez sin romper nada.
            </p>
            <ul>
              <li>Guarda el historial completo del proyecto.</li>
              <li>Permite trabajar en ramas independientes.</li>
              <li>Funciona sin conexión a internet.</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2>¿Qué es GitHub?</h2>
            <p>
              GitHub es una <strong>plataforma en la nube</strong> donde se
              alojan repositorios de Git. Sirve para respaldar tu código,
              compartirlo y colaborar con otras personas.
            </p>
            <ul>
              <li>Respalda tu proyecto en línea.</li>
              <li>Facilita la colaboración con pull requests.</li>
              <li>Permite revisar código y reportar incidencias.</li>
            </ul>
          </article>
        </section>

        <section className={styles.difference}>
          <h2>¿Cuál es la diferencia?</h2>
          <p>
            <strong>Git</strong> es la herramienta que controla las versiones de
            tu código. <strong>GitHub</strong> es un servicio web que guarda
            repositorios de Git en internet. Puedes usar Git sin GitHub, pero no
            GitHub sin Git.
          </p>
        </section>

        <section className={styles.commands}>
          <h2>Comandos básicos</h2>
          <ul>
            {comandos.map(({ comando, descripcion }) => (
              <li key={comando}>
                <code>{comando}</code>
                <span>{descripcion}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className={styles.footer}>
          <a
            href="https://git-scm.com/doc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación de Git
          </a>
          <a
            href="https://docs.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación de GitHub
          </a>
        </footer>
      </main>
    </div>
  );
}
