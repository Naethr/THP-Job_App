# job_app

A small React application built with Vite to practice classic Redux state
management and client-side routing.

## What The App Does

`job_app` lets you edit a simple user profile with:

- a first name
- a last name
- a list of skills

The profile data is stored in a global Redux store. When you update the profile,
the header, home page, and sidebar update automatically.

## Tech Stack

- React
- Vite
- pnpm
- react-router-dom
- redux
- react-redux
- Sass

This project intentionally uses classic Redux with `createStore`. It does not
use Redux Toolkit.

## Getting Started

Install the dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Then open the local URL shown in your terminal, usually:

```txt
http://localhost:5173/
```

## Available Routes

- `/` displays the home page.
- `/profile` displays the profile form.

## How To Use The App

1. Open the app in your browser.
2. Go to the `Profile` page.
3. Fill in your first name and last name.
4. Add skills separated by commas, for example:

```txt
Frontend Development, React, Redux
```

5. Submit the form.
6. Go back to the home page.

You should see:

- the full name in the header
- the number of skills in the header
- the skills list in the sidebar
- the welcome message and skills list on the home page

Empty skills are ignored automatically.

## Redux Behavior

The global state has two main slices:

```js
{
  user: {
    firstName: 'Jean',
    lastName: 'Testing',
    fullName: 'Jean Testing'
  },
  skills: {
    skills: ['Frontend Development', 'React', 'Redux'],
    skillsCount: 3
  }
}
```

The `fullName` value is only created when both `firstName` and `lastName` are
present. If one of them is missing, `fullName` is set to `null`.

## Persistence

The Redux state is saved in `localStorage`. This means your profile remains
available after refreshing the page.

To reset the app manually, clear the browser local storage for this site.

## Useful Commands

Build the app for production:

```bash
pnpm run build
```

Run the linter:

```bash
pnpm run lint
```
