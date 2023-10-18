'use client';

import type { EmotionCache, Options as OptionsOfCreateCache } from '@emotion/cache';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider as DefaultCacheProvider } from '@emotion/react';
import type { ReactNode } from 'react';
import { useState } from 'react';

export interface NextAppDirEmotionCacheProviderProps {
  options: Omit<OptionsOfCreateCache, 'insertionPoint'>;
  CacheProvider?: (props: {
    value: EmotionCache;
    children: ReactNode
  }) => JSX.Element | null;
  children: ReactNode;
}

export function NextAppDirEmotionCacheProvider(props: NextAppDirEmotionCacheProviderProps): JSX.Element {
  const { options, CacheProvider = DefaultCacheProvider, children } = props;

  const [emotionCache] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      inserted.push(serialized.name);
      return prevInsert(...args);
    };
    const flush = (): string[] => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });
  const { cache: cacheSt, flush: flushSt } = emotionCache;

  useServerInsertedHTML(() => {
    const names = flushSt();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cacheSt.inserted[name];
    }

    return (
      <style
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
        data-emotion={`${cacheSt.key} ${names.join(' ')}`}
        key={cacheSt.key}
      />
    );
  });

  return <CacheProvider value={cacheSt}>{children}</CacheProvider>;
}
