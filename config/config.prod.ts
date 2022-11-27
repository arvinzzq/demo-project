import { EggAppConfig, PowerPartial } from 'egg';
import path from 'path';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.logger = {
    dir: path.join(__dirname, 'logs'),
  }
  return config;
};
