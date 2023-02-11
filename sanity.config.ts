import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './data-access-layer/sanity/schemas';
import { theme } from 'https://themer.sanity.build/api/hues?preset=pixel-art&primary=ec407a;400;darkest:303030&transparent=5b6498;500';
import EditorNavbar from './components/bingo-teacher-components/editor-navbar';

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/editor',
  name: 'BingoTeacher_Editor',
  title: 'BingoTeacher Editor',
  projectId: sanityProjectId,
  dataset: sanityDataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: EditorNavbar,
    },
  },
  theme,
});
