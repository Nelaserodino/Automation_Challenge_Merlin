# Challenge de Automatización para Merlin Software

Este proyecto presenta una solución al challenge propuesto por Merlin Software, enfocado en demostrar habilidades avanzadas en automatización de pruebas y tareas sobre búsquedas web y llamadas API. Se aborda el reto a través de dos principales frentes:

1. **Automatización de Búsqueda Web**: Implementación de scripts con Cypress para automatizar la navegación y búsqueda dentro de un sitio web específico. Se extrae información relevante de forma eficiente y se almacena estructuradamente.

2. **Automatización de Llamadas API**: Desarrollo de pruebas automáticas para realizar y validar llamadas a APIs, utilizando Cypress para gestionar tanto las solicitudes como las respuestas esperadas.

## Características Principales

- **Uso de Cypress**: Se emplea Cypress como herramienta principal de automatización, aprovechando su capacidad para realizar tanto pruebas de front-end como de back-end en un solo framework.
- **Patrón Page Object Model (POM)**: Implementación del patrón de diseño Page Object Model para mejorar la mantenibilidad del código y reducir la duplicación, facilitando así la gestión de los elementos de la UI y las interacciones con la página.
- **Uso de Fixtures para Data Estática**: Empleo de fixtures en Cypress para manejar data estática, lo que permite simular respuestas de API y datos de entrada para las pruebas de manera eficaz y organizada.

## Tecnologías Utilizadas

- **Cypress**: Utilizado para todas las pruebas automatizadas, tanto de UI como de API.
- **Page Object Model (POM)**: Patrón de diseño aplicado para estructurar el código de pruebas de manera más eficiente.
- **JavaScript**: Lenguajes utilizados en conjunto con Cypress.

## Configuración del Proyecto

### Requisitos

- Node.js (Versión recomendada: 12.x o superior)
- Cypress

### Instalación

1. Clona este repositorio a tu máquina local:
   ```sh
   git clone https://github.com/tu-usuario/merlin-software-challenge.git

2. Navega al directorio del proyecto:
   ```sh
   cd merlin-software-challenge

3. Instala las dependencias del proyecto (incluyendo Cypress):
   ```sh
   npm install

Uso
Para abrir Cypress y ejecutar los scripts de pruebas interactivamente:
   ```sh
   npm test

