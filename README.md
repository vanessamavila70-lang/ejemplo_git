# ejemplo_git

Proyecto de ejemplo para aprender a usar Git paso a paso.

## Requisitos

- [Git](https://git-scm.com/downloads) instalado.
- Una terminal (PowerShell, Git Bash, etc.).

Verifica la instalación:

```bash
git --version
```

## Configuración inicial

Solo se hace una vez por equipo:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo.com"
```

## Comandos básicos

| Comando | Para qué sirve |
| --- | --- |
| `git init` | Crea un repositorio nuevo en la carpeta actual |
| `git status` | Muestra el estado de los archivos |
| `git add <archivo>` | Agrega cambios al área de preparación (staging) |
| `git add .` | Agrega todos los cambios |
| `git commit -m "mensaje"` | Guarda los cambios en el historial |
| `git log --oneline` | Muestra el historial resumido |
| `git diff` | Muestra los cambios aún no preparados |

## Flujo de trabajo típico

```bash
# 1. Edita o crea archivos
# 2. Revisa qué cambió
git status

# 3. Prepara los cambios
git add .

# 4. Guarda un commit
git commit -m "Describe lo que hiciste"
```

## Ramas (branches)

```bash
git branch                  # lista las ramas
git switch -c mi-rama       # crea y cambia a una rama nueva
git switch main             # vuelve a la rama principal
git merge mi-rama           # une mi-rama a la rama actual
```

## Repositorio remoto (GitHub)

```bash
git remote add origin <URL-del-repositorio>
git push -u origin main     # sube los cambios por primera vez
git pull                    # descarga cambios del remoto
git clone <URL>             # copia un repositorio existente
```

## Buenas prácticas

- Haz commits pequeños y frecuentes.
- Escribe mensajes claros que expliquen el *qué* y el *porqué*.
- Revisa con `git status` y `git diff` antes de hacer commit.
- Trabaja las funcionalidades nuevas en ramas separadas.
