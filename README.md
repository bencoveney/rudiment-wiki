# rudiments

## Usage

```bash
$ npm run build
$ npm run dev
```

## Lilypond

http://lilypond.org/doc/v2.25/Documentation/usage/basic-command_002dline-options-for-lilypond

```bash
lilypond --svg -dcrop=#t -dpoint-and-click=#f --output="./assets/" ./rudiments/single-stroke-roll.ly
```

## Credits

Emojis favicon designed by [OpenMoji](https://openmoji.org/). License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/#)

## TODO

- Maybe add dev script:
  - Get nodemon changed files to reduce writes
  - Remove dependency on concurrently
- Some stuff doesn't align between references
  - Numbers
  - Alternatives
  - Accents
- Some rendering suboptimal
  - Accents above hands

## References

- https://vicfirth.zildjian.com/education/40-essential-rudiments.html
- https://www.40drumrudiments.com/
- https://www.drumeo.com/beat/rudiments/
- https://www.pas.org/resources/rudiments
