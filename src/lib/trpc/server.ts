import { cache } from 'react';

import { createCaller } from '@/server/api/root';
import { createTRPCContext } from '@/server/api/trpc';

export const createContext = cache(async () => {
  return createTRPCContext({
    headers: new Headers(),
  });
});

export const api = createCaller(createContext);
