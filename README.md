# rudiments

## Usage

```bash
# Do a production build.
npm run build

# Start the dev server in watch mode.
npm run dev

# Start the dev server, without running lilypond each time.
npm run dev-fast
```

## Lilypond

Music notation is build using [lilypond](http://lilypond.org/). You will need to install it on your machine to build the music notation.

```bash
sudo apt-get install -y lilypond

lilypond --svg -dcrop=#t -dpoint-and-click=#f --output="./assets/" ./rudiments/single-stroke-roll.ly
```

## References

- https://vicfirth.zildjian.com/education/40-essential-rudiments.html
- https://www.40drumrudiments.com/
- https://www.drumeo.com/beat/rudiments/
- https://www.pas.org/resources/rudiments

## Credits

Emojis favicon designed by [OpenMoji](https://openmoji.org/). License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

Colour palette from [ColorHunt](https://colorhunt.co/palette/eeedebe0ccbe7472643c3633)

## TODO

- Some stuff doesn't align between references
  - Numbers
  - Alternatives
  - Accents
- Some rendering suboptimal
  - Accents above hands
- Add "listen" mode - lilypond to midi?
- Allow update to BPM
