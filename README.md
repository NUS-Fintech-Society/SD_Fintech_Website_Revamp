## Prerequisites

1. Node.js
2. yarn

## Key packages and dependencies

1. [Tailwind CSS](https://tailwindcss.com/)
2. [Chakra UI](https://chakra-ui.com/)
3. [TypeScript](https://www.typescriptlang.org/)
4. [ReactJs](https://reactjs.org/)
5. [Next.js](https://nextjs.org/)

## Getting Started

1. Clone this repo locally.
2. Install dependencies by running `yarn install` in the root folder of your
   cloned repo.
3. Run `yarn dev` to launch the server locally.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see
   the result.
   
## Project Structure
* `/pages`: only for navigation, should render a top-level component
* `/components`: most of the code goes here, 
   * each page should have its own folder e.g. all components for homepage should be in `/components/homepage`
   * `/components/helpers`: shared components should be put here e.g. accordion used in both recruitment and deparments page
* `/interface`: declare types here, **mirrors components structure**

## Styling Standard

1. Use TailwindCSS for majority of styling
   * Themes are set in `tailwind.config.js`.
   * You can add to this file if necessary (for more [custom styling](https://tailwindcss.com/docs/adding-custom-styles)). Do this only for repeating styles not present in TailWind.
2. Use Chakra UI for its reusable components
3. Use CSS Module only as last resort i.e. either some third party package needs it, etc. 
   * for a component with css Module, please put it in a standalone folder e.g. a folder `/Dropdown` that contains `/Dropdown/Dropdown.tsx` and `/Dropdown/Dropdown.module.css`
4. one-time usage of inline style is allowed.

## About Responsive design 

All development should be done mobile-first. Currently our design files only provide us with desktop design. **We need everyone to exercise their own judgement in terms of its implementation**. 

TailwindCSS supports mobile first design out of the box, please read more here: https://tailwindcss.com/docs/responsive-design.

## Workflow

We follow a
[branching workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow#:~:text=The%20core%20idea%20behind%20the,without%20disturbing%20the%20main%20codebase.)
where developers create a new branch and then make changes to it directly on the
main repo.

### Making a branch: 
* please create a branch in this format: `[yourname]/[branchname]`
   * so for creating a branch called homepage, create branch named `zhiwei/homepage`

### Before making a PR:
* Rebase your branch onto master
* Make sure that lint passes

## vs code plugins 
* Eslint 
* TailwindCSS intelliSense
