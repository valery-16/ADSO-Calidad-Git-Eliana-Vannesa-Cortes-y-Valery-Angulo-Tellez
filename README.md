# 🚀 ADSO - Aseguramiento de Calidad mediante Git y GitHub

Repositorio colaborativo desarrollado como parte del taller práctico de control de versiones, flujos de trabajo en equipo y estándares de calidad de software (SQA).

## 👥 Equipo de Trabajo y Roles
* **Valery Angulo Téllez** — Desarrolladora A (Módulo de Registro / Feature Branch)
* **Eliana Vannesa Cortés** — Desarrolladora B / Líder SQA (Módulo de Reportes / Code Review)

## 📂 Estructura del Proyecto
* `.gitignore`: Configuración estricta para excluir archivos temporales, logs, binarios y entornos virtuales.
* `registro.js`: Módulo funcional para el registro y validación de usuarios (*Desarrollador A*).
* `reportes.js`: Módulo funcional para la generación y control de reportes del sistema (*Desarrollador B*).

## 🛡️ Reglas y Estándares de Calidad (SQA) Aplicados
1. **Commits Atómicos y Convencionales:** Cada cambio significativo se documenta siguiendo el estándar (`feat:`, `fix:`, `docs:`, `chore:`).
2. **Feature Branches:** Ningún desarrollo se realiza directamente sobre la rama principal `main`; se aísla el código en ramas de características (`feature/`).
3. **Pull Requests obligatorios:** Todo código integrado a `main` pasa por un proceso formal de revisión cruzada, comentarios SQA y aprobación mediante *Pull Request*.
4. **Gestión de Conflictos:** Resolución de colisiones de código de forma colaborativa y documentada en el historial de Git.
