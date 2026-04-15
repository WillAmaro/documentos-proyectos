const MOCK_DATA = {

  user: { name: "Ronnie Paredes", role: "admin", avatar: "RP", team: "Equipo TI" },

  // ============================================================
  // JERARQUÍA: Proyecto → Planos → Fases → Documentos
  // ============================================================
  proyectos: [
    {
      id: "PRY-001",
      nombre: "Overlap Norte Lima",
      tipo: "Overlap",
      descripcion: "Expansión de red fija en zona norte de Lima, sectores 2, 3 y 5",
      contrata: "Tecnocom S.A.",
      responsableLPS: "Carlos Méndez",
      fechaInicio: "2024-10-01",
      fechaFin: "2025-06-30",
      estado: "en_curso",
      totalPlanos: 4,
      planosCerrados: 1,
      alertas: 5,
      planos: [
        {
          id: "PLN-001",
          nombre: "Plano-001 / Sector 3 - Av. Túpac Amaru",
          codigo: "OVL-NL-S3-001",
          contrata: "Tecnocom S.A.",
          responsable: "Pedro Vargas",
          estado: "en_curso",
          progreso: 72,
          faseActual: "Obra Civil",
          alertas: 2,
          fases: [
            {
              id: "F1", nombre: "Diseño", orden: 1, estado: "completado", progreso: 100,
              documentos: [
                { id: "D001", nombre: "Plano Arquitectónico AS-BUILT", requerido: true, estado: "aprobado", version: "v2", fecha: "2024-10-15", subidoPor: "Tecnocom" },
                { id: "D002", nombre: "Memoria Descriptiva", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-10-16", subidoPor: "Tecnocom" },
                { id: "D003", nombre: "Plano de Ubicación", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-10-12", subidoPor: "Tecnocom" },
                { id: "D004", nombre: "Plano de Red Propuesta", requerido: true, estado: "aprobado", version: "v3", fecha: "2024-10-20", subidoPor: "Tecnocom" },
                { id: "D005", nombre: "Estudio de Factibilidad", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-10-18", subidoPor: "LPS" }
              ]
            },
            {
              id: "F2", nombre: "Permisos", orden: 2, estado: "completado", progreso: 100,
              documentos: [
                { id: "D006", nombre: "Licencia Municipal", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-11-05", subidoPor: "LPS" },
                { id: "D007", nombre: "Autorización OSIPTEL", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-11-08", subidoPor: "LPS" },
                { id: "D008", nombre: "Permiso Vía Pública", requerido: true, estado: "aprobado", version: "v2", fecha: "2024-11-12", subidoPor: "Tecnocom" }
              ]
            },
            {
              id: "F3", nombre: "Logística", orden: 3, estado: "completado", progreso: 100,
              documentos: [
                { id: "D009", nombre: "Lista de Materiales", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-11-20", subidoPor: "Tecnocom" },
                { id: "D010", nombre: "Guía de Remisión", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-11-22", subidoPor: "Tecnocom" }
              ]
            },
            {
              id: "F4", nombre: "Obra Civil", orden: 4, estado: "en_curso", progreso: 55,
              documentos: [
                { id: "D011", nombre: "Acta de Inicio de Obra", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-12-01", subidoPor: "Tecnocom" },
                { id: "D012", nombre: "Registro Fotográfico Pre-Obra", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-12-02", subidoPor: "Tecnocom" },
                { id: "D013", nombre: "Plano de Tendido de Cable", requerido: true, estado: "revision", version: "v1", fecha: "2025-01-10", subidoPor: "Tecnocom" },
                { id: "D014", nombre: "Certificado de Empalme", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null },
                { id: "D015", nombre: "Informe de Avance Semanal", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null },
                { id: "D016", nombre: "Control de Calidad Materiales", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            },
            { id: "F5", nombre: "PINT", orden: 5, estado: "pendiente", progreso: 0, documentos: [
                { id: "D017", nombre: "Informe PINT", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null },
                { id: "D018", nombre: "Certificado de Instalación Interna", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            },
            { id: "F6", nombre: "PEXT", orden: 6, estado: "pendiente", progreso: 0, documentos: [
                { id: "D019", nombre: "Informe PEXT", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null },
                { id: "D020", nombre: "Registro Fotográfico Post-Obra", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            }
          ]
        },
        {
          id: "PLN-002",
          nombre: "Plano-002 / Sector 3 - Jr. Los Pinos",
          codigo: "OVL-NL-S3-002",
          contrata: "Tecnocom S.A.",
          responsable: "Pedro Vargas",
          estado: "en_curso",
          progreso: 45,
          faseActual: "Permisos",
          alertas: 3,
          fases: [
            { id: "F1", nombre: "Diseño", orden: 1, estado: "completado", progreso: 100,
              documentos: [
                { id: "D001", nombre: "Plano Arquitectónico AS-BUILT", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-11-01", subidoPor: "Tecnocom" },
                { id: "D002", nombre: "Memoria Descriptiva", requerido: true, estado: "aprobado", version: "v1", fecha: "2024-11-02", subidoPor: "Tecnocom" }
              ]
            },
            { id: "F2", nombre: "Permisos", orden: 2, estado: "en_curso", progreso: 40,
              documentos: [
                { id: "D006", nombre: "Licencia Municipal", requerido: true, estado: "revision", version: "v1", fecha: "2024-12-05", subidoPor: "LPS" },
                { id: "D007", nombre: "Autorización OSIPTEL", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null },
                { id: "D008", nombre: "Permiso Vía Pública", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            },
            { id: "F3", nombre: "Logística", orden: 3, estado: "pendiente", progreso: 0, documentos: [] },
            { id: "F4", nombre: "Obra Civil", orden: 4, estado: "pendiente", progreso: 0, documentos: [] },
            { id: "F5", nombre: "PINT", orden: 5, estado: "pendiente", progreso: 0, documentos: [] },
            { id: "F6", nombre: "PEXT", orden: 6, estado: "pendiente", progreso: 0, documentos: [] }
          ]
        },
        {
          id: "PLN-003",
          nombre: "Plano-003 / Sector 5 - Av. Colonial",
          codigo: "OVL-NL-S5-001",
          contrata: "Tecnocom S.A.",
          responsable: "Rosa Chávez",
          estado: "atrasado",
          progreso: 88,
          faseActual: "PEXT",
          alertas: 2,
          fases: [
            { id: "F1", nombre: "Diseño", orden: 1, estado: "completado", progreso: 100, documentos: [] },
            { id: "F2", nombre: "Permisos", orden: 2, estado: "completado", progreso: 100, documentos: [] },
            { id: "F3", nombre: "Logística", orden: 3, estado: "completado", progreso: 100, documentos: [] },
            { id: "F4", nombre: "Obra Civil", orden: 4, estado: "completado", progreso: 100, documentos: [] },
            { id: "F5", nombre: "PINT", orden: 5, estado: "completado", progreso: 100, documentos: [] },
            { id: "F6", nombre: "PEXT", orden: 6, estado: "en_curso", progreso: 60,
              documentos: [
                { id: "D019", nombre: "Informe PEXT", requerido: true, estado: "revision", version: "v1", fecha: "2025-01-15", subidoPor: "Tecnocom" },
                { id: "D020", nombre: "Registro Fotográfico Post-Obra", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null },
                { id: "D021", nombre: "Acta de Conformidad", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            }
          ]
        },
        {
          id: "PLN-004",
          nombre: "Plano-004 / Sector 2 - Urb. Palmas",
          codigo: "OVL-NL-S2-001",
          contrata: "Tecnocom S.A.",
          responsable: "Pedro Vargas",
          estado: "completado",
          progreso: 100,
          faseActual: "Completado",
          alertas: 0,
          fases: []
        }
      ]
    },
    {
      id: "PRY-002",
      nombre: "Saturación Miraflores",
      tipo: "Saturación",
      descripcion: "Refuerzo de capacidad de red en zonas saturadas de Miraflores",
      contrata: "Infratel Peru",
      responsableLPS: "Ana Torres",
      fechaInicio: "2024-11-15",
      fechaFin: "2025-05-15",
      estado: "en_curso",
      totalPlanos: 3,
      planosCerrados: 0,
      alertas: 6,
      planos: [
        {
          id: "PLN-005",
          nombre: "Plano-001 / Zona A - Av. Larco",
          codigo: "SAT-MF-ZA-001",
          contrata: "Infratel Peru",
          responsable: "Sandra López",
          estado: "en_curso",
          progreso: 38,
          faseActual: "Permisos",
          alertas: 4,
          fases: [
            { id: "F1", nombre: "Diseño", orden: 1, estado: "completado", progreso: 100, documentos: [] },
            { id: "F2", nombre: "Permisos", orden: 2, estado: "en_curso", progreso: 33,
              documentos: [
                { id: "D030", nombre: "Licencia Municipal Miraflores", requerido: true, estado: "revision", version: "v2", fecha: "2025-01-10", subidoPor: "LPS" },
                { id: "D031", nombre: "Autorización OSIPTEL", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null },
                { id: "D032", nombre: "Permiso Vía Pública", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            },
            { id: "F3", nombre: "Logística", orden: 3, estado: "pendiente", progreso: 0, documentos: [] },
            { id: "F4", nombre: "Obra Civil", orden: 4, estado: "pendiente", progreso: 0, documentos: [] },
            { id: "F5", nombre: "PINT", orden: 5, estado: "pendiente", progreso: 0, documentos: [] }
          ]
        },
        {
          id: "PLN-006",
          nombre: "Plano-002 / Zona A - Calle Schell",
          codigo: "SAT-MF-ZA-002",
          contrata: "Infratel Peru",
          responsable: "Sandra López",
          estado: "nuevo",
          progreso: 5,
          faseActual: "Diseño",
          alertas: 2,
          fases: [
            { id: "F1", nombre: "Diseño", orden: 1, estado: "en_curso", progreso: 10,
              documentos: [
                { id: "D033", nombre: "Plano Arquitectónico AS-BUILT", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            },
            { id: "F2", nombre: "Permisos", orden: 2, estado: "pendiente", progreso: 0, documentos: [] },
            { id: "F3", nombre: "Logística", orden: 3, estado: "pendiente", progreso: 0, documentos: [] },
            { id: "F4", nombre: "Obra Civil", orden: 4, estado: "pendiente", progreso: 0, documentos: [] }
          ]
        },
        {
          id: "PLN-007",
          nombre: "Plano-003 / Zona B - Av. Benavides",
          codigo: "SAT-MF-ZB-001",
          contrata: "Infratel Peru",
          responsable: "Carlos Ruiz",
          estado: "nuevo",
          progreso: 0,
          faseActual: "Sin iniciar",
          alertas: 0,
          fases: []
        }
      ]
    },
    {
      id: "PRY-003",
      nombre: "Verticales San Isidro",
      tipo: "Verticales",
      descripcion: "Instalación en edificios verticales del distrito de San Isidro",
      contrata: "RedMax Perú",
      responsableLPS: "Luis Castillo",
      fechaInicio: "2024-09-01",
      fechaFin: "2025-01-31",
      estado: "atrasado",
      totalPlanos: 2,
      planosCerrados: 1,
      alertas: 2,
      planos: [
        {
          id: "PLN-008",
          nombre: "Plano-001 / Torre Empresarial B",
          codigo: "VRT-SI-TB-001",
          contrata: "RedMax Perú",
          responsable: "Hugo Flores",
          estado: "atrasado",
          progreso: 82,
          faseActual: "PEXT",
          alertas: 2,
          fases: [
            { id: "F1", nombre: "Diseño", orden: 1, estado: "completado", progreso: 100, documentos: [] },
            { id: "F2", nombre: "Permisos", orden: 2, estado: "completado", progreso: 100, documentos: [] },
            { id: "F3", nombre: "Obra Civil", orden: 3, estado: "completado", progreso: 100, documentos: [] },
            { id: "F4", nombre: "PINT", orden: 4, estado: "completado", progreso: 100, documentos: [] },
            { id: "F5", nombre: "PEXT", orden: 5, estado: "en_curso", progreso: 60,
              documentos: [
                { id: "D040", nombre: "Informe PEXT Torre B", requerido: true, estado: "revision", version: "v1", fecha: "2025-01-15", subidoPor: "RedMax" },
                { id: "D041", nombre: "Acta de Conformidad Edificio", requerido: true, estado: "pendiente", version: null, fecha: null, subidoPor: null }
              ]
            }
          ]
        },
        {
          id: "PLN-009",
          nombre: "Plano-002 / Centro Empresarial Camino Real",
          codigo: "VRT-SI-CR-001",
          contrata: "RedMax Perú",
          responsable: "Hugo Flores",
          estado: "completado",
          progreso: 100,
          faseActual: "Completado",
          alertas: 0,
          fases: []
        }
      ]
    }
  ],

  contratas: [
    { id: "C001", nombre: "Tecnocom S.A.", contacto: "Pedro Vargas", email: "p.vargas@tecnocom.pe", planos: 14, activo: true },
    { id: "C002", nombre: "Infratel Peru", contacto: "Sandra López", email: "s.lopez@infratel.pe", planos: 8, activo: true },
    { id: "C003", nombre: "RedMax Perú", contacto: "Hugo Flores", email: "h.flores@redmax.pe", planos: 5, activo: true },
    { id: "C004", nombre: "Constructora Andes", contacto: "Rosa Mamani", email: "r.mamani@andes.pe", planos: 0, activo: false }
  ],

  alertas: [
    { id: 1, proyecto: "PRY-002", plano: "PLN-005", tipo: "vencimiento", mensaje: "Licencia Municipal vence en 5 días", prioridad: "alta", fecha: "2025-01-25" },
    { id: 2, proyecto: "PRY-003", plano: "PLN-008", tipo: "pendiente", mensaje: "Acta de Conformidad sin subir — 7 días retraso", prioridad: "alta", fecha: "2025-01-23" },
    { id: 3, proyecto: "PRY-001", plano: "PLN-001", tipo: "revision", mensaje: "Plano de Tendido esperando revisión LPS", prioridad: "media", fecha: "2025-01-22" },
    { id: 4, proyecto: "PRY-001", plano: "PLN-002", tipo: "pendiente", mensaje: "Autorización OSIPTEL pendiente", prioridad: "media", fecha: "2025-01-20" },
    { id: 5, proyecto: "PRY-002", plano: "PLN-006", tipo: "inicio", mensaje: "Plano nuevo asignado sin iniciar", prioridad: "baja", fecha: "2025-01-18" }
  ],

  actividadReciente: [
    { accion: "Documento aprobado", detalle: "Acta de Inicio · PLN-001", usuario: "Carlos Méndez LPS", tiempo: "hace 30 min", tipo: "success" },
    { accion: "Documento subido", detalle: "Informe PEXT v1 · PLN-008", usuario: "RedMax Perú", tiempo: "hace 1h", tipo: "info" },
    { accion: "Alerta enviada", detalle: "Vencimiento permiso · PLN-005", usuario: "Sistema", tiempo: "hace 2h", tipo: "warning" },
    { accion: "Plano creado", detalle: "PLN-007 en Saturación Miraflores", usuario: "Ronnie P.", tiempo: "hace 3h", tipo: "info" },
    { accion: "Documento rechazado", detalle: "Licencia v1 · PLN-005", usuario: "Ana Torres LPS", tiempo: "hace 5h", tipo: "danger" }
  ],

  tiposFases: {
    "Overlap": ["Diseño", "Permisos", "Logística", "Obra Civil", "PINT", "PEXT"],
    "Saturación": ["Diseño", "Permisos", "Logística", "Obra Civil", "PINT"],
    "Verticales": ["Diseño", "Permisos", "Obra Civil", "PINT", "PEXT"]
  },

  documentosPorFase: {
    "Diseño": ["Plano Arquitectónico AS-BUILT", "Memoria Descriptiva", "Plano de Ubicación y Localización", "Plano de Red Propuesta", "Estudio de Factibilidad", "Cronograma de Trabajo", "Presupuesto Detallado", "Especificaciones Técnicas"],
    "Permisos": ["Licencia Municipal", "Autorización OSIPTEL", "Permiso de Uso de Vía Pública", "Certificado de Compatibilidad de Uso", "Autorización SERNANP"],
    "Logística": ["Lista de Materiales", "Guía de Remisión", "Orden de Compra", "Certificado de Calidad Materiales"],
    "Obra Civil": ["Acta de Inicio de Obra", "Registro Fotográfico Pre-Obra", "Plano de Tendido de Cable", "Certificado de Empalme", "Informe de Avance Semanal", "Control de Calidad de Materiales", "Registro Fotográfico Durante Obra"],
    "PINT": ["Informe PINT", "Certificado de Instalación Interna", "Plano As-Built Interno", "Prueba de Conectividad"],
    "PEXT": ["Informe PEXT", "Registro Fotográfico Post-Obra", "Acta de Conformidad", "Plano As-Built Externo", "Certificado Final de Obra"]
  }
};
