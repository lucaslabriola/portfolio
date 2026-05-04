import { Building2, FileText, LayoutTemplate, ShoppingBag } from "lucide-react";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";
import povstoreImage from "../assets/projects/povstore.jpg";
import sifecImage from "../assets/projects/sifec.jpg";
import sisepImage from "../assets/projects/sisep.jpg";
import almediaImage from "../assets/projects/almedia.png";
import hotelParaisoImage from "../assets/projects/hotel-paraiso.png";

const buildGallery = (modules) =>
  Object.entries(modules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, src]) => src);

const sifecGalleryImages = buildGallery(
  import.meta.glob("../assets/projects/sifec/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const sisepGalleryImages = buildGallery(
  import.meta.glob("../assets/projects/sisep/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const hotelParaisoGalleryImages = buildGallery(
  import.meta.glob("../assets/projects/hotel-paraiso/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);

const projects = [
  {
    id: 1,
    title: "SIFEC",
    category: "Sistema de Información y Estadística de Contrataciones",
    description:
      "Sistema de escritorio del Servicio Penitenciario Federal que concentra el seguimiento de contrataciones, expedientes, órdenes de compra y stock a nivel nacional.",
    details: [
      "SIFEC es una iniciativa propia diseñada y desarrollada para centralizar procesos que previamente se gestionaban de forma dispersa entre planillas, carpetas compartidas y consultas manuales. El sistema permitió ordenar los circuitos internos, reducir la carga operativa y mejorar la trazabilidad de cada trámite.",
      "Brinda control a nivel nacional del stock de compras y mobiliario, consolidando información clave para la gestión patrimonial y la toma de decisiones operativas.",
      "Su valor principal radica en que no solo centraliza la información, sino que organiza el trabajo diario con permisos por rol, trazabilidad e integración, facilitando su adopción en múltiples sectores.",
      "Áreas intervinientes: Contrataciones, Contaduría y Finanzas, Auditoría Contable, Presupuesto y Contabilidad Patrimonial.",
    ],
    detailStack: ["C#", ".NET Framework", "Windows Forms", "SQL Server", "LiveCharts", "ClosedXML"],
    galleryImages: sifecGalleryImages,
    image: sifecImage,
    imagePosition: "center center",
    accent: "blue",
    status: "En producción",
    icon: FileText,
    stack: ["Contrataciones", "Expedientes", "Stock", "Dashboards", "Automatización"],
    codeLabel: "Proyecto privado",
    github: "#",
    preview: "#",
  },
  {
    id: 2,
    title: "SISEP",
    category: "Sistema de Información de Secretaría y Personal",
    description:
      "Sistema de escritorio de la División Secretaría del Servicio Penitenciario Federal para centralizar agentes, licencias y documentación en un único entorno administrativo.",
    details: [
      "SISEP es un sistema de escritorio para gestión de secretaría y personal desarrollado para la División Secretaría del Servicio Penitenciario Federal y actualmente utilizado en producción.",
      "Centraliza agentes, licencias, usuarios, dependencias y documentación operativa en una única interfaz, reemplazando información dispersa por un entorno ordenado, confiable y pensado para el trabajo administrativo diario.",
      "Organiza el acceso por roles y permite consultar información, registrar licencias, abrir expedientes GDE, reutilizar modelos documentales y exportar datos. Su enfoque combina validaciones de negocio, trazabilidad y una estructura pensada para volver más ágiles, consistentes y sostenibles las tareas administrativas.",
    ],
    detailStack: ["C#", ".NET Framework 4.7.2", "Windows Forms", "ClosedXML", "Control por roles"],
    galleryImages: sisepGalleryImages,
    image: sisepImage,
    imagePosition: "24% center",
    accent: "emerald",
    status: "En producción",
    icon: FileText,
    stack: ["Administración", "Personal", "Licencias", "Recursos humanos", "Reportes"],
    codeLabel: "Proyecto privado",
    github: "#",
    preview: "#",
  },
  {
    id: 3,
    title: "Almedia studio",
    category: "Agencia web propia",
    description:
      "Sitio comercial de agencia propia de diseño web y marketing digital, pensado para presentar servicios, planes y canales de contacto de forma clara y profesional.",
    details: [
      "Almedia es nuestra agencia de diseño web y marketing digital fundada junto a mi hermana y socia, Antonella. El sitio presenta la marca, muestra los planes y servicios disponibles, y lleva al usuario al contacto comercial de forma directa.",
      "Desarrollado como SPA con React 19 y Vite, sin backend propio. El flujo es simple: el usuario entiende la propuesta, revisa los planes y contacta por WhatsApp desde un formulario o botón flotante.",
      "Proyecto real, en línea y en actividad comercial.",
    ],
    detailStack: ["React 19", "Vite", "JavaScript", "WhatsApp", "SPA", "Responsive"],
    image: almediaImage,
    imagePosition: "center center",
    accent: "amber",
    status: "En línea",
    icon: LayoutTemplate,
    stack: ["Agencia propia", "Planes comerciales", "Identidad de marca", "Branding"],
    github: "https://github.com/lucaslabriola/al-media",
    preview: "https://al-media.netlify.app/",
  },
  {
    id: 4,
    title: "Hotel Paraíso",
    category: "Sistema hotelero",
    description:
      "Sistema de escritorio para la gestión integral de un hotel: reservas, huéspedes, servicios a la habitación, pagos y reportes de ocupación.",
    details: [
      "Hotel Paraíso centraliza los procesos operativos de un hotel en una única interfaz: check-in y check-out, disponibilidad y estado de habitaciones, registro de clientes con historial, extras y consumos, y asignación según tipo, capacidad o fechas.",
      "Incluye un módulo de pagos y facturación para el control de ingresos, y reportes administrativos para el seguimiento de ocupación y rendimiento del establecimiento.",
      "Patrones utilizados: composite, decorator, observer y singleton.",
    ],
    detailStack: ["C#", ".NET Framework", "Windows Forms", "SQL", "Reportes", "Desktop app"],
    galleryImages: hotelParaisoGalleryImages,
    image: hotelParaisoImage,
    imagePosition: "center 34%",
    accent: "teal",
    status: "Proyecto universitario",
    icon: Building2,
    stack: ["Reservas", "Huéspedes", "Facturación", "Consumos", "Habitaciones", "Caja"],
    github: "https://github.com/lucaslabriola/hotel-paraiso",
    preview: "#",
  },
  {
    id: 5,
    title: "Povstore",
    category: "Online shop",
    description:
      "Tienda online de indumentaria con carrito persistente, catálogo filtrable y cierre de compra por WhatsApp.",
    details: [
      "PovStore es una tienda online de indumentaria pensada para mostrar productos, destacar ofertas y facilitar el contacto con la marca sin depender de una plataforma e-commerce pesada.",
      "El usuario explora el catálogo, agrega productos al carrito, ajusta cantidades y cierra la compra enviando el pedido por WhatsApp. El carrito persiste entre sesiones y los productos se pueden ordenar y filtrar.",
      "Además de la experiencia de compra, el sitio incorpora secciones de preguntas frecuentes, contacto y referencias visuales que ayudan a resolver dudas, reforzar la confianza y acompañar mejor el recorrido del usuario.",
    ],
    detailStack: ["HTML", "CSS", "JavaScript", "Axios", "OpenWeather", "WhatsApp"],
    image: povstoreImage,
    imagePosition: "center center",
    accent: "rose",
    status: "Disponible online",
    icon: ShoppingBag,
    stack: ["E-commerce", "Catálogo digital", "Moda", "Carrito de compras", "Productos"],
    github: "https://github.com/lucaslabriola/pov-store",
    preview: "https://pov-store.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title-about">
          Mis <span className="title-highlight">proyectos</span>
        </h2>
        <div className="section-divider"></div>

        <div className="projects-heading">
          <p className="projects-intro">
            Una selección de trabajos con enfoque en producto, sistemas internos y experiencias web
            pensadas para verse bien en cualquier pantalla.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
