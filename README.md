# Kanji Trainer

Aplicación de estudio de japonés. Este README inicia la documentación de necesidades y decisiones pendientes; **no certifica el estado de implementación ni sustituye una revisión del código**.

## Feedback de usuario — Álvaro (13/10/2026)

### Prioridad principal: confianza y cobertura

> «Prefiero tener una cosa, como la de los kanjis pero q funcione bien y me pueda fiar a tener muchas cosas y no estar seguro».

- Priorizar **precisión, estabilidad y cobertura verificable** sobre nuevas funciones.
- Necesidad principal: practicar **todas las palabras de vocabulario de nivel N5 y N4 que utilicen los kanjis incluidos en esos niveles**, no únicamente un subconjunto de ejemplos.
- Esta cobertura debe poder **auditarse contra una fuente o corpus de referencia definido**. «Todas» requiere concretar el conjunto de vocabulario y sus criterios de inclusión: el JLPT no proporciona una lista oficial exhaustiva y cerrada de vocabulario por nivel. No prometer exhaustividad sin fijar primero un inventario verificable.
- Registrar por entrada, cuando proceda: kanji, palabra, lectura en hiragana, significado en español, nivel atribuido y fuente. Evitar duplicados, lecturas incorrectas y palabras fuera del alcance sin identificar.
- La aplicación debe ayudar a revisar sistemáticamente el inventario y detectar contenidos no practicados; verificar que el progreso y la persistencia de sesión funcionen de forma fiable.

### Solicitudes y mejoras que requieren validación

- Separar una **lista completa de vocabulario formado con los kanjis** del entrenamiento de reconocimiento de kanjis individuales.
- Mostrar **lectura en hiragana entre paréntesis**, traducción al español y una frase de ejemplo al corregir.
- Para verbos: incluir forma diccionario, forma ます y grupo verbal cuando sea útil en la explicación o solución.
- Mantener explicaciones breves y claras.
- Revisar la organización de la gramática, con preferencia del usuario por una agrupación sencilla, sin añadir complejidad innecesaria a la aplicación estable.
- **Estado:** feedback registrado, no equivale a implementación ni a autorización para modificar el código.

## Propuesta separada — entrenador de gramática JLPT N5 + N4

Álvaro propone abordar la gramática **después de consolidar Kanji Trainer**. La especificación siguiente es una propuesta de alcance y comportamiento, no una función existente ni una nueva prioridad aprobada.

### Objetivo y modos

- Examinador de gramática japonesa que responde **siempre en español**.
- **Modo predeterminado:** gramática pura, bloques 1–5. Sin preguntas de partículas ni conectores salvo petición explícita.
- **Modo aparte:** partículas y conectores, bloque 6, activado únicamente cuando el estudiante lo solicite.
- Nivel solicitado: N5 completo + N4, con referencia adicional del usuario a A2.2 hasta el capítulo 9. Comprobar correspondencia exacta con materiales de estudio antes de dar cobertura por garantizada.

### Dinámica de preguntas y corrección

- **Una pregunta por turno**, sin pistas, lectura de la respuesta, grupo verbal ni ejemplos parciales antes de contestar.
- Formato: **[forma ます / diccionario o base] — significado en español → conjuga a: [forma + tiempo + polaridad + registro]**.
- Rotar tipos de palabra y construcciones, con combinaciones reales y naturales; incorporar preguntas inversas ocasionales.
- Reintroducir más adelante, mezclados con otros ejercicios, los contenidos fallados.
- Respuesta correcta: confirmación breve + ejemplo japonés con traducción. Respuesta incorrecta: solución correcta + ejemplo; evitar explicaciones extensas o ejercicios extra no pedidos.
- Tras la corrección, **continuar directamente con otra pregunta** sin pedir confirmación.

### Temario solicitado (estructura original)

**Bloque 1 — Formas base:** formas です/ます, equivalentes informales, afirmación/negación y pasado; diccionario, て, た, ない, なかった; ～ています (progreso, hábito y estado) y sus variaciones.

**Bloque 2 — Formas verbales principales:** potencial, pasiva, causativa, causativa-pasiva natural, ～たい/～たがる, ～てみる, condicionales ～たら/～ば/～なら/～と, relativas, ～たほうがいい, obligación y prohibición, permiso, experiencia ～ことがある, nominalización ～こと/～の, cambios ～になる/～くなる/～ようになる, ～ように, ～んです, discurso indirecto ～と言う, ～てから/～たり/～ながら, volitiva e intención, imperativa/prohibitiva/～なさい, ～ないで/～ずに, capacidad ～ことができる, decisiones ～ことにする/～ことになる, hábitos ～ようにする y concesivas/arrepentimiento.

**Bloque 3 — Aspecto, secuencia, estado y suposición:** ～ておく/～てしまう/～てある/～ていく/～てくる, inicio/fin/continuidad, ～ところ/～たばかり, relaciones temporales, ～そう (apariencia y oído), ～よう/～みたい/～らしい/～はず/～かもしれない, exceso/facilidad/dificultad/～方, ～かどうか/～という/～のに/～ので/～し.

**Bloque 4 — Dar y recibir, peticiones y keigo básico:** ～てあげる/～てくれる/～てもらう y corteses, ～てほしい, peticiones corteses, permiso ～させてください, honoríficos y humildes básicos (いらっしゃる、おっしゃる、なさる、召し上がる、ご覧になる、申す、伺う、拝見する、いただく, etc.).

**Bloque 5 — Adjetivos y sustantivos:** adjetivos い/な y sustantivos con です/だ, tiempos, polaridad, registro, forma て, cambio, exceso, apariencia, ～のです/～なんです y nominalización ～さ/～み.

**Bloque 6 — Partículas y conectores (solo bajo petición):** completar una frase con hueco y traducción al español, sin pistas, una por turno; partículas は、が、を、に、で、へ、と、から、まで、も、の、や、か、よ、ね、より、だけ、しか、ばかり、ずつ、くらい/ぐらい、でも、など、って y sus contrastes; conectores から、ので、のに、けど/けれども、が、し、そして、それから、それで、だから、でも、しかし、ですから、ところが、それに、また、ただし、すると、だけど y conectores de formas verbales. Incluir contrastes entre dos o tres candidatos cuando sean pertinentes.

### Alcance lingüístico y validaciones pendientes

- Contemplar verbos de grupos 1 y 2, irregulares する/来る y particularidades como 行く、ある、いい; adjetivos い/な, sustantivos, nominalización y sustantivización (～こと/～の, base ます nominal, ～さ/～み, ～方).
- Variar presente/no pasado, pasado, afirmación/negación y registro cuando la construcción lo permita; **no forzar un futuro morfológico japonés separado ni combinaciones antinaturales**.
- Revisar con fuentes docentes fiables qué estructuras pertenecen estrictamente a N5/N4 y cuáles son ampliaciones del temario solicitado; no etiquetar todo automáticamente como N4.
- Validar lecturas, conjugaciones, naturalidad y ejemplos antes de usarlos para calificar al estudiante.

## Próximos pasos documentales (sin cambios de código)

1. Revisar el inventario actual de kanjis y vocabulario y contrastarlo con un corpus N5/N4 acordado.
2. Registrar ausencias, errores, duplicados y cobertura; priorizar correcciones y estabilidad.
3. Comprobar el estado real de las funcionalidades existentes mediante revisión de código y pruebas QA.
4. Mantener el entrenador de gramática como **propuesta independiente** hasta acordar alcance, contenidos, fuente y criterios de aceptación.
5. No introducir funcionalidades nuevas ni declarar el proyecto completo sin validación y autorización.
