# SbS Cortex Screen
A virtual GM screen, intended for Discord screen share.

Built with React & Tailwind v4. This isn't designed to be a full VTT, rather something showing key traits for players when needed + a map of the solar system. Character sheets and other miscellany are tracked elsewhere.

Built for *Swashbucklers by Starlight*, my TTRPG which has started as a kinda-sorta-Cortex-hack and will probably end as some strange abomination.

## Setup
This project requires Node v22 LTS or greater, with Corepack enabled — this should also install `pnpm` for you if you don't already have it.

```bash
corepack enable
pnpm i
```

## Commands
All commands are run from a terminal at the project root (here):

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm lint`    | Lints, formats, and checks with Biome        |
| `pnpm preview` | Preview your build locally, before deploying |

## Useful links
- [Biome documentation](https://biomejs.dev)
- [React documentation](https://react.dev)
- [Rsbuild documentation](https://rsbuild.dev)
- [Tailwind v4 documentation](https://tailwindcss.com)

## License
The project code, except where otherwise specified below, is available under the MIT License. See `LICENSE.txt` in the project root.

Exceptions include:

- **Images:** see `assets/images/README.md`.
- **Fonts:** see `assets/fonts/README.md`.
- *Swashbucklers by Starlight* and all setting material remains &copy; and &trade; Alexis Queen.
