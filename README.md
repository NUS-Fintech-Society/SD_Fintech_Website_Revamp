## Prerequisites

1. Node.js **22.x** (pinned in `.nvmrc`; the production build fails on Node 20)
2. pnpm **8.15.8** (pinned in `package.json` via `packageManager`)

## Key packages and dependencies

1. [Tailwind CSS](https://tailwindcss.com/)
2. [Chakra UI](https://chakra-ui.com/)
3. [TypeScript](https://www.typescriptlang.org/)
4. [ReactJs](https://reactjs.org/)
5. [Next.js](https://nextjs.org/)

## Getting Started
> This repo uses **pnpm** (v8) with **Node 22.x** (Latest Vercel's Update) via Corepack.

1. Clone the repo locally.
2. Switch to Node 22 (e.g. `nvm use` or `fnm use`, which read `.nvmrc`).
3. Enable Corepack & activate pnpm 8
   ```bash
   corepack enable
   corepack prepare pnpm@8.15.8 --activate
   ```
4. Install dependencies by running `pnpm install --frozen-lockfile`
5. Run `pnpm dev` to launch the server locally.
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see
   the result.

> `pnpm-lock.yaml` is the only lockfile. Don't use yarn or npm, as they would
> create a second lockfile with different dependency versions.

## Project Structure
* `/pages`: only for navigation, should render a top-level component
* `/components`: most of the code goes here, 
   * each page should have its own folder e.g. all components for homepage should be in `/components/homepage`
   * `/components/helpers`: shared components should be put here e.g. accordion used in both recruitment and deparments page
* `/interface`: declare types here, **mirrors components structure**
* `/data`: data used in the website

(Note: Please use [absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases) instead of relative imports unless it is CSS modules)

## Styling Standard

1. Use TailwindCSS for majority of styling
   * Themes are set in `tailwind.config.js`.
   * You can add to this file if necessary (for more [custom styling](https://tailwindcss.com/docs/adding-custom-styles)). Do this only for repeating styles not present in TailWind.
2. Use Chakra UI for its reusable components.
3. Use CSS Module only as last resort i.e. either some third party package needs it, etc. 
   * for a component with css Module, please put it in a standalone folder e.g. a folder `/Dropdown` that contains `/Dropdown/Dropdown.tsx` and `/Dropdown/Dropdown.module.css`
4. can use inline-style if it is very little and doesn't warrant creating a css module file or setting a tailwindCSS config.

**Please download eslint and prettier plugin for vscode to enable style checking and auto formatting**

## About Responsive design 

All development should be done mobile-first. Currently our design files only provide us with desktop design. **We need everyone to exercise their own judgement in terms of its design and layout in mobile view (just make sure it looks good)**. 

TailwindCSS supports mobile first design out of the box, please read more here: https://tailwindcss.com/docs/responsive-design.

## Workflow

We follow a
[branching workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow#:~:text=The%20core%20idea%20behind%20the,without%20disturbing%20the%20main%20codebase.)
where developers create a new branch and then make changes to it directly on
this repo (`NUS-Fintech-Society/SD_Fintech_Website_Revamp`).

*If you have write access, there is no need to fork.* Contributors without
write access can fork, but should open their PR into **this repo's `main`**
(not into someone else's fork).

### Making a branch:
* please create a branch in this format: `[yourname]/[branchname]`
   * so for creating a branch called homepage, create branch named `zhiwei/homepage`
* always branch off an up-to-date `main`:
   ```bash
   git switch main && git pull
   git switch -c yourname/short-description
   ```

### Before making a PR:
* Update your branch with the latest `main` (rebase or merge)
* Make sure that lint and the production build pass on Node 22:
   ```bash
   pnpm lint
   pnpm build
   ```
   There is no CI, so this is the only check before your change goes live.

### Making a PR:
1. Push your branch and open a PR into `main`.
2. Vercel will comment on the PR with a **Preview URL**. Check the pages you
   changed there, including on mobile.
3. Get a review from another member where possible, then merge.
4. Delete the branch after merging.

## vs code plugins 
* Eslint 
* TailwindCSS intelliSense
* Prettier

# Deployment
The site is hosted on Vercel (team `nus-fintech-deployments`), connected
directly to this repo through Vercel's GitHub integration. There is no manual
deploy step:

* **Production:** every push or merge to `main` is deployed automatically to
  https://fintechsociety.comp.nus.edu.sg (a CNAME to Vercel, managed under NUS SoC's DNS).
  **Merging to `main` = deploying to production.**
* **Preview:** every other branch and every PR gets its own Preview deployment URL.
* **Rollback:** in the Vercel dashboard, go to Deployments, pick the last good
  production deployment and use *Instant Rollback* / *Promote to Production*.
  Then revert the bad change on `main` with a PR so the next deploy doesn't
  bring it back.

> The old `nusfintech/SD_Fintech_Website_Revamp` fork is no longer used for
> deployment. Don't open PRs against it.
