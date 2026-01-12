import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import {
  ArticleBlockType,
  ArticleType,
} from 'entities/Article/model/types/article';
import { ArticleDetails } from './ArticleDetails';

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
  <ArticleDetails {...args} />
);

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: "What's new in JS for 2025?",
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2025',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Title of this block',
      paragraphs: [
        'The program traditionally called “Hello, world!” is very simple. It displays the phrase “Hello, world!” or something similar using a certain language.',
        "JavaScript is a language that can be used to run programs in different environments. In our case, we are talking about browsers and the Node.js server platform. If you haven't written a single line of JS code yet and are reading this text in a browser on a desktop computer, it means that you are literally seconds away from your first JavaScript program.",
        "There are other ways to run JS code in a browser. For example, when it comes to the usual use of JavaScript programs, they are loaded into the browser to ensure that web pages work. As a rule, the code is formatted as separate files with the .js extension, which are linked to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, provided on this resource. This example can be run using the tools provided on this resource (look for the Try it Yourself button), but we will do things a little differently. Specifically, we will create a new file in any text editor (for example, VS Code or Notepad++) and name it hello.html, then add the following code to it:",
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Title of this block',
      paragraphs: [
        'The program traditionally called “Hello, world!” is very simple. It displays the phrase “Hello, world!” or something similar using a certain language.',
        "There are other ways to run JS code in a browser. For example, when it comes to the usual use of JavaScript programs, they are loaded into the browser to ensure that web pages work. As a rule, the code is formatted as separate files with the .js extension, which are linked to web pages, but the program code can also be included directly in the page code. All this is done using the <script> tag. When the browser detects such code, it executes it. Details about the script tag can be found on w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, provided on this resource. This example can be run using the tools provided on this resource (look for the Try it Yourself button), but we will do things a little differently. Specifically, we will create a new file in any text editor (for example, VS Code or Notepad++) and name it hello.html, then add the following code to it:",
      ],
    },
  ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  }),
];
