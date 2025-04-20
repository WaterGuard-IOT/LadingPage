document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    duration: 1000,   // duración en ms
    once: true,
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang] && translations[lang][key];
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
    if (text) {
      if (el.hasAttribute("placeholder")) {
        el.placeholder = text;
      } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = text;
      } else {
        el.textContent = text;
      }
    }
  });
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang);
  AOS.init();
});

const translations = {
  es: {
    title: "WaterGuard - Monitoreo y Control Inteligente del Agua",
    nav_home: "Inicio",
    nav_features: "Funcionalidades",
    nav_how: "Cómo Funciona",
    nav_download: "Descarga",
    nav_contact: "Contacto",
    download_app: "Descargar App",
    hero_title: "Controla y Cuida el Agua de tu Hogar",
    hero_subtitle: "Tecnología inteligente para el uso eficiente del agua, ahora con control de bombas automático.",
    download_now: "Descargar Ahora",
    features_title: "Funcionalidades Principales",
    feature_monitoring: "Monitoreo del Consumo",
    feature_monitoring_desc: "Visualiza en tiempo real el uso de agua en tu hogar para tomar decisiones inteligentes.",
    feature_alerts: "Alertas por Fugas",
    feature_alerts_desc: "Recibe notificaciones automáticas si se detectan fugas o consumos anormales.",
    feature_pumps: "Control de Bombas",
    feature_pumps_desc: "Activa o desactiva bombas según el nivel de agua, automatizando el proceso de llenado.",
    feature_reports: "Reportes Detallados",
    feature_reports_desc: "Obtén informes gráficos y exportables para el seguimiento de tu consumo de agua.",
    feature_quality: "Monitoreo de calidad",
    feature_quality_desc: "Evalúa en tiempo real parámetros clave como pH, turbidez y temperatura para garantizar agua segura.",
    benefits_title: "¿Por qué usar WaterGuard?",
    benefit_saving: "💧 Ahorro de Agua",
    benefit_saving_desc: "Reduce significativamente el consumo mensual de agua gracias al monitoreo y alertas inteligentes.",
    benefit_control: "📱 Control desde tu Móvil",
    benefit_control_desc: "Activa bombas, revisa consumos y calidad del agua desde cualquier lugar.",
    benefit_safety: "🛡️ Seguridad en el Hogar",
    benefit_safety_desc: "Previene daños por fugas o rebalses activando medidas automáticas.",
    contact_title: "¿Tienes dudas o quieres más información?",
    label_name: "Nombre",
    label_email: "Correo Electrónico",
    label_city: "Ciudad",
    label_message: "Mensaje",
    send_message: "Enviar Mensaje",
    download_title: "¡Descarga la App!",
    download_desc: "Disponible para Android e iOS",
    download_google: "Descargar en Google Play",
    download_ios: "Descargar en App Store",
    footer_desc: "Soluciones inteligentes para el uso eficiente y seguro del agua en el hogar.",
    footer_links: "Enlaces",
    footer_social: "Síguenos",
    footer_rights: "Todos los derechos reservados.",
    privacy_policy: "Política de Privacidad",
    stats_title: "Impacto de WaterGuard",
    stats_homes: "Hogares monitoreados en tiempo real",
    stats_reduction: "Reducción promedio del consumo de agua",
    stats_liters: "Litros de agua ahorrados por la comunidad",
    how_title: "¿Cómo Funciona?",
    step_1_title: "Paso 1",
    step_1_desc: "Instalación del sensor en la red principal de agua de tu hogar.",
    step_2_title: "Paso 2",
    step_2_desc: "Sincronización con la app WaterGuard vía conexión inalámbrica.",
    step_3_title: "Paso 3",
    step_3_desc: "Monitorea el consumo, controla bombas y evalúa la calidad del agua desde tu celular.",
    testimonials_title: "Lo que dicen nuestros usuarios",
    testimonial_1: "Desde que uso WaterGuard, he reducido mi consumo mensual en un 30%. ¡Y el control de la bomba me ha salvado varias veces!",
    testimonial_2: "Me encanta ver en tiempo real cómo va mi consumo y recibir alertas si algo se sale de lo normal.",
    testimonial_3: "El monitoreo de calidad del agua me parece increíble, me da tranquilidad saber que todo está en buen estado.",
    placeholder_name: "Tu nombre",
    placeholder_email: "tucorreo@ejemplo.com",
    placeholder_city: "Tu ciudad",
    placeholder_message: "Escríbenos tu consulta..."
  },
  en: {
    title: "WaterGuard - Smart Water Monitoring and Control",
    nav_home: "Home",
    nav_features: "Features",
    nav_how: "How It Works",
    nav_download: "Download",
    nav_contact: "Contact",
    download_app: "Download App",
    hero_title: "Control and Care for Your Home's Water",
    hero_subtitle: "Smart technology for efficient water usage, now with automated pump control.",
    download_now: "Download Now",
    features_title: "Main Features",
    feature_monitoring: "Water Consumption Monitoring",
    feature_monitoring_desc: "Track real-time water usage to make smarter decisions.",
    feature_alerts: "Leak Alerts",
    feature_alerts_desc: "Receive instant alerts if leaks or abnormal usage are detected.",
    feature_pumps: "Pump Control",
    feature_pumps_desc: "Automatically turn pumps on/off based on water levels.",
    feature_reports: "Detailed Reports",
    feature_reports_desc: "Generate visual and exportable reports to track water use.",
    feature_quality: "Water Quality Monitoring",
    feature_quality_desc: "Track key water parameters like pH, turbidity and temperature in real-time.",
    benefits_title: "Why Use WaterGuard?",
    benefit_saving: "💧 Water Saving",
    benefit_saving_desc: "Significantly reduce monthly water consumption through smart monitoring.",
    benefit_control: "📱 Mobile Control",
    benefit_control_desc: "Control pumps, check water quality and usage from anywhere.",
    benefit_safety: "🛡️ Home Safety",
    benefit_safety_desc: "Prevent damage from leaks or overflows with automatic actions.",
    contact_title: "Have questions or need more info?",
    label_name: "Name",
    label_email: "Email",
    label_city: "City",
    label_message: "Message",
    send_message: "Send Message",
    download_title: "Download the App!",
    download_desc: "Available for Android and iOS",
    download_google: "Get it on Google Play",
    download_ios: "Download on App Store",
    footer_desc: "Smart solutions for efficient and safe water usage at home.",
    footer_links: "Links",
    footer_social: "Follow Us",
    footer_rights: "All rights reserved.",
    privacy_policy: "Privacy Policy",
    stats_title: "WaterGuard Impact",
    stats_homes: "Homes monitored in real time",
    stats_reduction: "Average reduction in water consumption",
    stats_liters: "Liters of water saved by the community",
    how_title: "How It Works",
    step_1_title: "Step 1",
    step_1_desc: "Installation of the sensor in your main water line.",
    step_2_title: "Step 2",
    step_2_desc: "Sync with the WaterGuard app via wireless connection.",
    step_3_title: "Step 3",
    step_3_desc: "Monitor usage, control pumps, and check water quality from your phone.",
    testimonials_title: "What Our Users Say",
    testimonial_1: "Since I started using WaterGuard, I've reduced my monthly usage by 30%. The pump control feature is a lifesaver!",
    testimonial_2: "I love seeing real-time usage and getting alerts if anything goes off track.",
    testimonial_3: "The water quality monitoring gives me peace of mind. Everything is working perfectly.",
    placeholder_name: "Your name",
    placeholder_email: "your@email.com",
    placeholder_city: "Your city",
    placeholder_message: "Write us your message..."
  }
};

