import { track } from "@vercel/analytics";

/**
 * Clave de almacenamiento en sessionStorage para los datos de atribución UTM.
 */
const UTM_STORAGE_KEY = "portfolio_utm_params";

/**
 * Extrae y almacena los parámetros UTM de la URL actual en sessionStorage.
 * Si detecta parámetros UTM en una nueva visita, emite automáticamente un evento 'campaign_visit'
 * tanto hacia Vercel Analytics como hacia Google Analytics 4 (gtag).
 */
export const initUtmTracking = () => {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
    const currentUtm = {};
    let hasUtm = false;

    utmKeys.forEach((key) => {
      const value = params.get(key);
      if (value) {
        currentUtm[key] = value.trim();
        hasUtm = true;
      }
    });

    if (hasUtm) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentUtm));
      
      // Enviar a Vercel Analytics
      track("campaign_visit", currentUtm);

      // Enviar a Google Analytics 4
      if (typeof window.gtag === "function") {
        window.gtag("event", "campaign_visit", currentUtm);
      }
    }
  } catch {
    // Falla de forma silenciosa para garantizar la robustez del renderizado
  }
};

/**
 * Obtiene los parámetros UTM almacenados en la sesión actual.
 *
 * @returns {Object} Diccionario con los parámetros UTM o un objeto vacío.
 */
export const getStoredUtm = () => {
  if (typeof window === "undefined") return {};
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

/**
 * Envía un evento analítico personalizado enriquecido con datos UTM
 * tanto a Google Analytics 4 (gtag) como a Vercel Analytics.
 *
 * @param {string} eventName - Identificador del evento (ej: 'download_cv', 'open_architecture_modal').
 * @param {Object} [properties={}] - Datos complementarios del evento.
 */
export const trackEvent = (eventName, properties = {}) => {
  try {
    const utmData = getStoredUtm();
    const eventPayload = {
      ...properties,
      ...utmData,
    };

    // 1. Enviar a Vercel Analytics
    track(eventName, eventPayload);

    // 2. Enviar a Google Analytics 4
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, eventPayload);
    }
  } catch {
    // Falla de forma silenciosa
  }
};
