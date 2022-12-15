import { ProjectMapClient } from "@uniformdev/project-map";
import getConfig from "next/config";
const {
  publicRuntimeConfig: { projectId, canvasApiHost, canvasApiKey },
} = getConfig();

export const projectMapClient = new ProjectMapClient({
  apiKey: canvasApiKey,
  projectId: projectId,
  apiHost: canvasApiHost
});

export const fetchProjectMapDefinitions = async (projectId) => {
  if (!projectMapClient) throw new Error('projectMapClient is not configured');
  return projectMapClient.fetchProjectMapDefinitions(projectId);
}

export const fetchNodes = async (options) => {
  if (!projectMapClient) throw new Error('projectMapClient is not configured');
  return projectMapClient.fetchNodes(options);
}