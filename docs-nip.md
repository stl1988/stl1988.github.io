## Documentation and Wikis with Spaces and Format Declaration

`draft` `optional`

### Summary
This NIP introduces a system for collaborative documentation and wikis on Nostr. It improves upon earlier efforts by adding namespace-like Spaces, explicit content format declaration, and clearer separation of article types, including redirects and merge requests.

---

### Motivation

Previous approaches to wiki-style collaborative content on Nostr had two key limitations:

1. **Format instability** – No declared format per event led to breaking changes (e.g. a shift from Markdown to Asciidoc).
2. **Lack of namespace separation** – All articles existed in a global space, causing confusion and collision between unrelated projects.

This NIP addresses both by introducing:

- **Spaces** – individually defined wikis or documentation sets.
- **Explicit per-article format declaration**.
- **Dedicated event kinds** for articles, redirects, merge requests, and space metadata.

---

### Specification

#### `kind: 31055` – **Space Definition**

Defines a project namespace for articles.

**Tags**:
- `["name", "<space title>"]`
- `["slug", "<short identifier>"]`
- `["description", "<optional description>"]`
- `["language", "<ISO language code>"]`
- `["license", "<license text or SPDX ID>"]`

**Content**: (optional) full description or README for the space.

---

#### `kind: 31056` – **Article**

An article in a specific format belonging to a defined space.

**Tags**:
- `["space", "<slug>"]`
- `["title", "<article title>"]`
- `["format", "markdown" | "asciidoc" | "wikitext" | "html"]`
- `["format-version", "<format version>"]` (optional)
- `["prev", "<event-id>"]` (optional)
- `["summary", "<short change summary>"]` (optional)

**Content**: full body of the article in the declared format.

---

#### `kind: 31057` – **Redirect**

Redirects from one article title to another within the same space.

**Tags**:
- `["space", "<slug>"]`
- `["from", "<old title>"]`
- `["to", "<new title>"]`

**Content**: empty.

---

#### `kind: 31058` – **Merge Request**

Proposes a revision to an article without directly altering the original.

**Tags**:
- `["space", "<slug>"]`
- `["title", "<article title>"]`
- `["base", "<event-id>"]`
- `["format", "<format>"]`
- `["comment", "<short summary>"]` (optional)

**Content**: proposed article content.

---

### Format Guidelines

Currently allowed formats:
- `markdown`
- `asciidoc`
- `wikitext`
- `html`

Clients MUST ignore formats they do not support. Clients MAY apply stricter formatting rules.

---

### Client Behavior

Clients:
- MUST render only supported formats.
- MUST treat `space` as a case-sensitive namespace.
- SHOULD allow filtering, browsing and searching within Spaces.
- SHOULD support revision tracking via `prev`.
- MAY support diff/merge tooling for `kind: 31058`.

---

### Examples

#### Space Definition
```json
{
  "kind": 31055,
  "tags": [
    ["name", "Bitcoin Docs"],
    ["slug", "btc-docs"],
    ["description", "Developer documentation for Bitcoin tools"],
    ["language", "en"],
    ["license", "MIT"]
  ],
  "content": "Welcome to the Bitcoin Docs Space."
}
```

#### Markdown Article
```json
{
  "kind": 31056,
  "tags": [
    ["space", "btc-docs"],
    ["title", "Installation Guide"],
    ["format", "markdown"]
  ],
  "content": "# Installation\n\nFollow these steps to install the software..."
}
```

#### Asciidoc Article
```json
{
  "kind": 31056,
  "tags": [
    ["space", "btc-docs"],
    ["title", "RPC Reference"],
    ["format", "asciidoc"]
  ],
  "content": "= RPC Reference\n\nThis section describes JSON-RPC calls."
}
```

#### Wikitext Article
```json
{
  "kind": 31056,
  "tags": [
    ["space", "btc-docs"],
    ["title", "Block Structure"],
    ["format", "wikitext"]
  ],
  "content": "== Block Structure ==\n\nThe structure of a Bitcoin block is..."
}
```

#### Redirect
```json
{
  "kind": 31057,
  "tags": [
    ["space", "btc-docs"],
    ["from", "Getting Started"],
    ["to", "Installation Guide"]
  ],
  "content": ""
}
```

#### Merge Request
```json
{
  "kind": 31058,
  "tags": [
    ["space", "btc-docs"],
    ["title", "Installation Guide"],
    ["base", "d72fa1..."],
    ["format", "markdown"],
    ["comment", "Added step for testnet"]
  ],
  "content": "# Installation\n\nNow includes setup instructions for testnet users."
}
```

---

### Acknowledgements

This proposal builds on earlier ideas for decentralized wikis and documentation within Nostr, while solving common issues related to format instability and lack of project separation.
