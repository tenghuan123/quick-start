# quick-start

This is a monorepo project based on the currently popular framework and library, without too much configuration, you can start your project, Out Of The Box

Why is there this library?

Originating from myself, when trying to start a brand new project, I need to do too many things that are not related to my project but necessary

1. I need to consider whether my CSS solution is CSS-in-JS or an atomized CSS solution (e.g. [tailwind] ( https://tailwindcss.com/docs/installation ))
2. If I need to use [tailwind] ( https://tailwindcss.com/docs/installation ), my customization will be stronger, I prefer my own [tailwind] ( https://tailwindcss.com/docs/installation ) component library, so I can do whatever I want, so I have to look for a component library similar to headless
3. I am not a professional UI component designer, but it would be great to have a nice theme. At this time, I found a great library, which is [shacdn-ui] ( https://ui.shadcn.com /)
4. Well, I also solved the library, I finally want to get the project architecture, and start using [turbrepo] ( https://turborepo.org/ ) to make a monorepo template
5. Start changing eslint configuration, changing tsconfig configuration, various configurations...
6. Start copying and pasting [shacdn-ui] ( https://ui.shadcn.com/ ) components, I like it, but it's really tiring bro
7. Start intervening [storybook] ( https://storybook.js.org/ ) and test each component to make sure they are running properly
8. OK, we're finally going to start our project!

Okay, we didn't start thinking about our business code until the last step. Then we have to consider designing authentication, verification, routing, etc. Hey, did you notice? Today, it's really difficult to start a project. I just control these things myself, and as a result, I may spend several days preparing for the early stage.

So, I hope everyone can start the creative stage directly. I have added some preset things to this project, so that everyone can directly enter the creative time.

Looking to the future?

Before starting this topic, I still need to thank the author of [shacdn-ui] ( https://ui.shadcn.com/ ) [shacdn] ( https://github.com/shadcn ) and its maintainer, which is based on a lot of inspiration from me. It is a great library until more people see it.

Scaffold can automatically implant code into the project, which is really cool. So I thought, can I bring this idea to the backend? For example, I can use the Scaffold command to port an authentication service and design to the project, and it can run normally. It also incorporates high flexibility, making it easy for developers to adjust it at any time.

Therefore, this template is just the first step. In the future, I will introduce more backend services into the project to make its functionality more powerful.

## RoadMap

- [] Scaffolding tools
- []  changelog
Architecture with front-end and back-end separation
- [] Automatic generation of backend swagger documents
- [] zodios implement e2e type safety
- [] remix project setup
- [] Paradigm of data acquisition
- [] form for bidirectional verification
- [] Routing scheme
- []  Authentication
- []  Authorization
- [] deployment plan