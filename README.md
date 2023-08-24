# [Apoorva | Terminal]

A terminal style website


## Quick Start

### Using docker (recommended)

```bash
docker run -d --name terminal -p 3000:3000 apoorva/terminal
```

If you want to run with custom configuration, make sure you have a copy of `config.json` then mount in the container:

```bash
docker run -d \
  --name terminal \
  -p 3000:3000 \
  -v `pwd`/config.json:/data/config.json \
  apoorva/terminal
```

### Using npm/yarn

1. Install dependencies:

```bash
yarn install
```

2. Build the project:

```bash
yarn build
```

3. Run the server:

```bash
yarn start
```

## Configuration

Here's a sample of the `config.json` file:

```json
{
  
  "social": {
    "instagram": "_apoorva_20",
    "github": "Apoorvakothari",
    "linkedin": "apoorva-kothari"
  },
  "theme": "gruvboxdark" // list of themes available in themes.json
}
```

## Themes

[Here's](/docs/themes) a list of available themes.


## Contributing

Please feel free to pull requests or log issues.

Thanks!
