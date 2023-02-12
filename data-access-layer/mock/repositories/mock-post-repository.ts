import { Author } from '../../../domain-import-only/Author';
import { Post } from '../../../domain-import-only/Post';

export const getPost = async (slug: string) => {
  const post: Post = createMockPost('One');
  return post;
};

export const getAllPosts = async () => {
  const postOne = createMockPost('One');
  const postTwo = createMockPost('Two');

  return [postOne, postTwo];
};
function createMockPost(numberAsString: string) {
  const author: Author = {
    name: `Mock Author ${numberAsString}`,
    picture:
      'http://images.ctfassets.net/yxxngywtulbk/5xyXrwwIybePHDyS9hcsZc/0147606e6ac7f4f4a519336750fafc2c/github.jpeg?w=2048&q=75',
  };

  const post: Post = {
    title: `Mock Post ${numberAsString}`,
    coverImage:
      'http://images.ctfassets.net/yxxngywtulbk/3OKXvX6D9ssAdBcufpUuFV/783cd4b1211c723114cf2a6351bae964/nature-architecture.jpeg?w=3840&q=75',
    date: '2022-03-09',
    slug: `mock-post-${numberAsString.toLowerCase()}`,
    author,
    content: MOCK_CONTENT,
    excerpt: `mock excerpt ${numberAsString}`,
  };
  return post;
}

const MOCK_CONTENT = {
  data: {},
  content: [
    {
      data: {},
      content: [
        { data: {}, marks: [], value: 'Hi everyone, ', nodeType: 'text' },
        {
          data: { uri: 'https://github.com/qwoodmansee' },
          content: [
            { data: {}, marks: [], value: '@qwoodmansee', nodeType: 'text' },
          ],
          nodeType: 'hyperlink',
        },
        {
          data: {},
          marks: [],
          value: ' here. Long Time No See!',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [{ data: {}, marks: [], value: 'TL;DR', nodeType: 'text' }],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "Bingo Teacher may be back. With a new user-content driven architecture, I hope to help it's real potential and stay up to date easily. This post is step 1.",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        { data: {}, marks: [], value: 'Historical Context', nodeType: 'text' },
      ],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "As many of you may have known, we've previously struggled to keep Bingo Teacher up to date. A few of you may know the process - there is master spreadsheet which i cloned and gave edit access to, and a python script i run manually pulls that data down and populates a file which is then plopped into the react frontend so I didn't depend on a backend.  If it isn't obvious, this incredibly manual task made it effectively impossible to upkeep Bingo Teacher.",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "It didn't take long, maybe a year or so, before most of bingo teacher was out of date. At one point a couple years ago, I built a rails backend and introduced it to the codebase. What I've learned since then, is that I was definitely only solving half of the problem. In fact, I was only solving the easy half. Unsurprisingly, Bingo Teacher remained out of date far into the future, and today's bingo teacher that you see live today doesnt even use that server (I shut it down once the free tier ended for Heroku).",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        { data: {}, marks: [], value: 'The 3 Problems', nodeType: 'text' },
      ],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "That leads us to today. If I want to upkeep bingo teacher (which I'd really like to) I'm going to need to solve primary issues:",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    'Allowing and encouraging average speedrunners, trick finders, tutorial makers, etc. a way to modify the content on bingo maker and keep it up to date.',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    'A way for me to not have to perform manual processes when updates are made',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
        {
          data: {},
          content: [
            {
              data: {},
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    'Build the site in a way which it can be maintained far into the future (years) at a very low cost (e.g. free or as low as possible) such that we can avoid ads, donations, etc. ',
                  nodeType: 'text',
                },
              ],
              nodeType: 'paragraph',
            },
          ],
          nodeType: 'list-item',
        },
      ],
      nodeType: 'ordered-list',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "I actually think this is achievable, and I'd urge the community to worry more about point #1 than anything else. That's where I need the most help.",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'The Plan - Start Small',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "So, what's the plan? You're already seeing it. This is an example piece of content being provided from a CMS called Contentful. The idea here is that I will more easily be able to source bingo teacher content creation out to the community, which will help keep it up to date. While the first version of the rebuild (on which you're currently reading this post) is probably not ready to have community driven content, the fact that you are reading this post means that we are close. ",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Getting Involved: Content',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "Keep an eye out for more posts from me here as well as discord. More to come as soon as possible (maybe even by the time you're reading this post.) I'd encourage those who want to help immediately to ",
          nodeType: 'text',
        },
        {
          data: { uri: 'https://qwoodmansee.github.io/bingo-teacher/' },
          content: [
            {
              data: {},
              marks: [],
              value:
                'mosey on over to the existing live version of BingoTeacher',
              nodeType: 'text',
            },
          ],
          nodeType: 'hyperlink',
        },
        {
          data: {},
          marks: [],
          value:
            ' and help find "source of truth issues" that are alive and on the site today (e.g. I don\'t have a more recent variation of a very common trick or one of the youtube links is dead).',
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'Getting Involved: Development',
          nodeType: 'text',
        },
      ],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "I'm a full stack developer and happy to include other engineers in this effort. If you'd like to contribute or read from the CMS in any way, I'd be happy to consider or help build out the modeling so that you can easily use the data on your site as well, especially for read-only access. For those of you who aren't developers, don't worry about this.",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        { data: {}, marks: [], value: 'The Distant Future', nodeType: 'text' },
      ],
      nodeType: 'heading-1',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            "As a final note, if this works well we have a lot of potential for growth here. I've modeled the data in within the CMS itself to scale as well as i reasonably can, meaning (if I did a good enough job) we could easily expand the scope of this project out of bingo and in to general Ocarina of Time speedrunning tutorials. Of course, If ",
          nodeType: 'text',
        },
        {
          data: {},
          marks: [{ type: 'bold' }],
          value: 'that ',
          nodeType: 'text',
        },
        {
          data: {},
          marks: [],
          value: "goes super well... No reason we can't add more games? :) ",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: "Thank you for taking the time to read - I'm excited -q",
          nodeType: 'text',
        },
      ],
      nodeType: 'paragraph',
    },
  ],
  nodeType: 'document',
};
