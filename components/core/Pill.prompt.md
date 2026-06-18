Rounded chip with a 2px ink border — for filter bars, skill/tech tags, and status labels.

```jsx
<Pill>TypeScript</Pill>
<Pill interactive active>All</Pill>
<Pill interactive>Engineer</Pill>
<Pill tone="mint">Active</Pill>
<Pill tone="coral">In development</Pill>
```

`tone`: status fills `mint` / `sunshine` / `coral` / `sky` (omit for neutral white). `active` gives the ink-filled selected look for filters. `interactive` adds hover-lift + press. Render as `button`/`a` via `as` for clickable use.
