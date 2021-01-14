import pino from 'pino';
import { logflarePinoVercel } from 'pino-logflare';
import _ from 'lodash';

// create pino-logflare console stream for serverless functions and send function for browser logs
const { stream, send } = logflarePinoVercel({
  apiKey: process.env.NEXT_PUBLIC_LOGFLARE_KEY,
  sourceToken: process.env.NEXT_PUBLIC_LOGFLARE_STREAM
});

// create pino logger
const logger = pino(
  {
    browser: {
      transmit: {
        send: send
      }
    },
    level: 'debug',
    base: {
      env: process.env.ENV || 'ENV not set',
      revision: process.env.VERCEL_GITHUB_COMMIT_SHA
    }
  },
  stream
);

const formatObjectKeys = (headers) => {
  const keyValues = {};

  Object.keys(headers).map((key) => {
    const newKey = key.replace(/-/g, '_');
    keyValues[newKey] = headers[key];
  });

  return keyValues;
};

export { logger, formatObjectKeys };
