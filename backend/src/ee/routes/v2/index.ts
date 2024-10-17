import { registerProjectRoleRouter } from "./project-role-router";

export const registerV2EERoutes = async (server: FastifyZodProvider) => {
  // org role starts with organization
  await server.register(
    async (projectRouter) => {
      await projectRouter.register(registerProjectRoleRouter);
    },
    { prefix: "/workspace" }
  );
};
