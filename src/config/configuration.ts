import { Config } from './configuration.interface';

export const configuration = async (): Promise<Config> => {
  const { config } = await import('./envs/default');
  return config;
};
