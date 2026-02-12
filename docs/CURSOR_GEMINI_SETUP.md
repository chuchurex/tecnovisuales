# Cómo usar Gemini en Cursor con la API de Google

Guía para integrar Gemini en el chat/agente de Cursor usando tu propia API key de Google.

**Limitación importante (plan gratuito):** En la cuenta **gratuita** de Cursor solo está disponible el modo **"Auto"**. El mensaje *"Para usar modelos distintos a Auto necesitas Cursor Pro"* significa que **elegir un modelo concreto** (p. ej. Gemini 2.5 Flash) en el selector **requiere una suscripción Cursor Pro**. Aun con tu API key de Google configurada (BYOK), el selector de modelos queda bloqueado hasta tener Pro. Con Pro sí puedes elegir Gemini y el consumo lo paga tu clave de Google.

---

## 1. Obtener una API key de Google

1. Entra en **Google AI Studio**: [https://aistudio.google.com/](https://aistudio.google.com/)
2. Inicia sesión con tu cuenta de Google.
3. En el menú (arriba o lateral), entra en **Get API key** / **Obtener clave API**.
4. Pulsa **Create API key** (puedes elegir “Create in new project” si te lo pide).
5. Copia la clave y guárdala en un lugar seguro. **No la pegues en chats ni la subas a repositorios.**

Opcional: en [Google Cloud Console](https://console.cloud.google.com/) puedes activar la **Generative Language API** en tu proyecto si usas facturación o cuotas avanzadas.

---

## 2. Configurar la API key en Cursor (método recomendado)

Cursor permite **Bring Your Own Key (BYOK)** para Google: tú pones la clave y el uso se factura a tu cuenta de Google.

1. Abre **Cursor Settings**:
   - **macOS**: menú **Cursor** → **Settings** → **Cursor Settings**
   - **Windows/Linux**: **File** → **Preferences** → **Settings**
2. En el panel de la izquierda, entra en **Models** (o **Models / AI Providers**).
3. Busca la sección **Google** (proveedor nativo).
4. Pega tu API key en el campo correspondiente.
5. Si ves **Verify**, pulsa para validar. En algunas versiones de Cursor no hay botón "Verify": la clave se guarda al cerrar Settings o al pulsar **Save** / **Apply**, y se comprueba al usar por primera vez un modelo de Google en el chat.
6. Cierra la ventana de ajustes (o guarda los cambios).

Documentación oficial: [API Keys | Cursor Docs](https://cursor.com/docs/settings/api-keys).

---

## 3. Usar Gemini en el chat de Cursor

1. Abre el **chat integrado** de Cursor (panel lateral o comando de chat).
2. En el **selector de modelo** (donde suele aparecer Claude, GPT, etc.) deberían listarse modelos de **Google**, por ejemplo:
   - **Gemini 3 Flash**
   - **Gemini 3 Pro**
3. Elige uno de ellos (p. ej. Gemini 3 Pro).
4. Escribe tu mensaje. Las respuestas del agente usarán Gemini y consumirán la cuota de tu cuenta de Google.

Las conversaciones del chat/agente en este contexto usan tu API key; **Tab Completion** y otras funciones específicas pueden seguir usando modelos propios de Cursor.

---

## 4. Si no aparece la opción Google o falla la verificación

Algunas versiones de Cursor muestran solo “custom provider” en lugar de un bloque “Google”. En ese caso puedes probar un **proveedor personalizado**:

1. En **Cursor Settings** → **Models**, busca **Custom Provider**, **Add Model** o **Override OpenAI Base URL**.
2. Configura:
   - **Model name / Model ID**:  
     `gemini-2.5-pro-exp-03-25`  
     (o el ID actual que indique [Google AI Studio](https://aistudio.google.com/) para el modelo que quieras)
   - **API Base URL / Endpoint**:  
     `https://generativelanguage.googleapis.com/v1beta/openai/`  
     (con la barra final)
   - **API Key**: tu clave de Google AI Studio
3. Guarda y, si Cursor lo pide, reinicia.
4. En el selector de modelos del chat, elige el modelo personalizado que acabas de crear.

Los IDs de modelo pueden cambiar; conviene revisar en la documentación de [Google AI](https://ai.google.dev/) o en AI Studio el nombre exacto del modelo.

---

## 5. Alternativa: OpenRouter (acceso a Gemini por terceros)

Si la conexión directa a Google te da problemas, puedes usar **OpenRouter** como intermediario:

1. Regístrate en [OpenRouter](https://openrouter.ai/) y crea una API key.
2. En Cursor, en la configuración de **Custom Provider**:
   - **Base URL**: `https://openrouter.ai/api/v1`
   - **API Key**: tu clave de OpenRouter
   - **Model**: p. ej. `google/gemini-2.5-pro-exp-03-25` (revisa en [OpenRouter Models](https://openrouter.ai/models) el ID actual).
3. Guarda y selecciona ese modelo en el chat.

OpenRouter tiene cuota gratuita limitada; el resto se paga según su tarifa.

---

## Resumen

| Paso | Acción |
|------|--------|
| 1 | Crear API key en [Google AI Studio](https://aistudio.google.com/) |
| 2 | Cursor → **Settings** → **Models** → sección **Google** → pegar clave → **Verify** |
| 3 | En el chat, elegir **Gemini 3 Flash** o **Gemini 3 Pro** en el selector de modelos |
| 4 | Si no hay Google nativo, usar Custom Provider con Base URL de Google o OpenRouter |

**Requisito Cursor Pro:** En plan gratuito solo está "Auto"; elegir Gemini (u otro modelo) requiere Pro.

---

## Si no tienes Cursor Pro: opciones para usar Gemini

1. **Cursor Pro** (~20 USD/mes): desbloquea el selector de modelos; entonces puedes elegir Gemini y usar tu API key (BYOK).
2. **Gemini fuera de Cursor**: [Google AI Studio](https://aistudio.google.com/) o [Gemini](https://gemini.google.com/) en el navegador; Claude Code en la terminal para código.
3. **Mantener "Auto" en Cursor**: Cursor elige el modelo; no es configurable.

**Seguridad:** No compartas tu API key en chats, en el código ni en repositorios. Si crees que se ha filtrado, revócala en Google AI Studio y genera una nueva.

**Privacidad:** Al usar tu propia clave, los datos los procesa Google según su política; no aplica la política “Zero Data Retention” de Cursor para esas llamadas.
