# Datos pendientes de confirmación — Gerencia / Área de información

Documento de trabajo para **recopilar la información real de la empresa** que hoy está
incompleta o es estimada en la web. El objetivo es actualizar especialmente el **mapa
interactivo de zonas atendidas** (hoy funciona visualmente pero muestra datos parciales) y
otros apartados que dependen de cifras y direcciones verificadas.

> Uso: responder cada pregunta marcando `[x]` y escribiendo la respuesta en la columna
> "Respuesta". Las respuestas con `[?]` son las que hoy **no tenemos confirmadas**.
> Fuente en código: `src/data/content.ts` (`STATS`, `CONTACT`), `src/lib/peru-map.ts`,
> `src/components/inicio/PresenceMap.tsx`, `src/data/programas.ts`.

---

## 1. Zonas atendidas y mapa interactivo (PRIORIDAD ALTA)

El mapa colorea departamentos donde la empresa ha tenido actividad. Hoy solo tenemos datos
parciales de 3 regiones + 2 oficinas. Necesitamos la cobertura real.

1.1. ¿En cuántos **departamentos del Perú** ha construido o entregado viviendas la empresa?
     - Respuesta: ______________________

1.2. **Listado completo por departamento** con el número de viviendas entregadas:
     | Departamento / Región | N° de viviendas entregadas | Años / proyecto | ¿Sede u oficina? |
     |---|---|---|---|
     | | | | |
     | | | | |
     | | | | |
     | | | | |
     | | | | |
     | | | | |
     | | | | |
     | | | | |
     | | | | |
     | | | | |

1.3. ¿El total de **viviendas construidas/edificadas** es de **3,367**? `[?]`
     - ¿Existe una cifra más actualizada? (en publicaciones de Facebook aparece "2,944") `[?]`
     - Respuesta: ______________________

1.4. **Ranking de regiones** por número de bonos entregados. Hoy mostramos:
     - Arequipa — 1,119 bonos — "1er lugar nacional" `[?]`
     - La Libertad — 746 bonos — "2do lugar nacional" `[?]`
     - Ica — 737 bonos — "3er lugar nacional" `[?]`
     - ¿Estos números y el orden son correctos? ¿Alguna otra región entra al ranking?
     - Respuesta: ______________________

1.5. **Diferenciar** claramente en el mapa:
     - Departamentos donde **se ha construido** (viviendas entregadas).
     - Departamentos donde solo hay **oficina/sede de atención**.
     - Departamentos con **ambos**.
     - Respuesta: ______________________

1.6. ¿El mapa debe mostrar solo los 3 departamentos con más bonos o **todos** los
     departamentos con actividad? `[?]` (hoy solo 5 están coloreados)
     - Respuesta: ______________________

---

## 2. Sedes y oficinas de atención (PRIORIDAD ALTA)

Hay 3 sedes cargadas, pero hay que confirmar vigencia, dirección exacta y enlace de mapas.

2.1. Confirmar / corregir las sedes actuales en `CONTACT.sedes`:
     | Ciudad | Dirección registrada hoy | ¿Correcta? | Dirección corregida | Google Maps |
     |---|---|---|---|---|
     | Lima | Av. Próceres de Huandoy Mz. C Lt. 13, 3er Piso, Los Olivos | [ ] Sí [ ] No | | |
     | Ica | Calle 20 Mz M, Lotes 19, 20 y 21, Urb. Valle Esmeralda, Pueblo Nuevo | [ ] Sí [ ] No | | |
     | Lambayeque | Av. Augusto B. Leguía N° 190, Olmos | [ ] Sí [ ] No | | |

2.2. ¿Existen **otras sedes u oficinas** (showroom, almacén, oficina comercial) no listadas?
     - Respuesta: ______________________

2.3. Para cada sede, confirmar:
     - Horario de atención: ______________________
     - Teléfono / WhatsApp de esa sede: ______________________
     - Persona o área de contacto: ______________________
     - ¿Tiene showroom / casa modelo visitable? ______________________

2.4. ¿Alguna sede ya **no está operativa** o cambió de dirección próximamente?
     - Respuesta: ______________________

---

## 3. Cifras e indicadores institucionales (PRIORIDAD MEDIA)

Aparecen en el Hero y otras secciones (`STATS` en `src/data/content.ts`).

3.1. **Viviendas construidas a nivel nacional**: 3,367 `[?]` → valor correcto: __________

3.2. **Departamentos atendidos**: hoy "11" `[?]` → valor correcto: __________

3.3. **Años de experiencia**: hoy "+10" `[?]` → valor correcto: __________
     - Año de fundación de la empresa: __________

3.4. ¿La afirmación **"1ª empresa en entregar viviendas tras el Niño Costero"** se mantiene?
     `[?]` ¿Con qué respaldo/fecha? __________

3.5. Otros indicadores que quieran destacar (familias beneficiadas, bonos gestionados,
     proyectos por año, etc.):
     - ______________________________________

---

## 4. Programas y requisitos (PRIORIDAD MEDIA)

Cifras y condiciones en `src/data/programas.ts` deben validarse antes de publicar.

4.1. ¿Los **montos de bono / ahorro mínimo / FSV** que mostramos están vigentes?
     (revisar contra fuentes oficiales MVCS / Fondo MiVivienda) `[?]`
     - Respuesta: ______________________

4.2. ¿Los **plazos de trámite** que indicamos son realistas y actuales? `[?]`
     - Respuesta: ______________________

4.3. ¿Hay programas nuevos o descontinuados que debamos añadir/quitar?
     - Respuesta: ______________________

---

## 5. Contacto y redes (PRIORIDAD MEDIA)

5.1. Confirmar teléfonos / WhatsApp vigentes:
     - 993 611 523 — [ ] Sí [ ] No → __________
     - 937 202 783 — [ ] Sí [ ] No → __________
     - 960 989 470 — [ ] Sí [ ] No → __________
     - ¿Número principal para WhatsApp? __________

5.2. Correo oficial: `consorcioconstructormkt@gmail.com` — [ ] Correcto [ ] Otro: __________

5.3. Redes oficiales (Facebook / TikTok / Instagram / YouTube): __________

---

## 6. Testimonios e imágenes (PRIORIDAD BAJA)

6.1. ¿Los testimonios actuales (`TESTIMONIALS`) son reales y tienen autorización de uso?
     `[?]` ¿Hay testimonios nuevos con foto y ciudad? __________

6.2. ¿Autorizan el uso de fotos de clientes y obras? ¿Hay material fotográfico nuevo
     (obras terminadas por región) para reforzar cada zona del mapa? __________

---

## 7. Legal / confianza (PRIORIDAD BAJA)

7.1. Registro como **Entidad Técnica ante Fondo MiVivienda**: número / vigencia. __________

7.2. RUC / razón social para footer u aviso legal. __________

7.3. ¿Años de garantía reales y condiciones de la construcción llave en mano? __________

---

## Resumen de campos bloqueantes para el mapa

Estos son los que, **si se responden, permiten dejar el mapa 100% funcional**:

- [ ] Listado completo de departamentos con N° de viviendas (1.2)
- [ ] Cifra total de viviendas confirmada (1.3)
- [ ] Ranking real de regiones por bonos (1.4)
- [ ] Sedes/ oficinas correctas + enlaces de Maps (2.1–2.3)

---

*Creado para coordinación interna. Una vez respondido, actualizar: `src/data/content.ts`
(`STATS`, `CONTACT`) y `src/components/inicio/PresenceMap.tsx` (`ZONES`, `OFFICES`,
`REGION_LEGEND`) según corresponda.*
