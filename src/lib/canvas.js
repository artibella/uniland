import { CanvasClient, CANVAS_PUBLISHED_STATE, CANVAS_DRAFT_STATE } from "@uniformdev/canvas";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { projectId, canvasApiHost, canvasApiKey },
} = getConfig();

export const canvasClient = new CanvasClient({
  apiKey: canvasApiKey,
  projectId: projectId,
  apiHost: canvasApiHost
});

export const getCompositionList = async ({ type } = {}) => {
  if (!canvasClient) throw new Error('canvasClient is not configured');
  return canvasClient.getCompositionList({ skipEnhance: true, type, state: getState(false) }).then(c => c.compositions);
};

export const getState = (preview) => (preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE);
