const { theme } = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?preset=pixel-art&primary=ec407a;400;darkest:303030&transparent=5b6498;500'
)) as { theme: import('sanity').StudioTheme };
