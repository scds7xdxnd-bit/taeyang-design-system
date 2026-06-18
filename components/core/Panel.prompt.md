The brand's signature container — a white "game panel" with a thick ink border, hard offset shadow, and an optional colored header.

```jsx
<Panel title="Player Profile">…</Panel>
<Panel title="Current Quests" variant="quests">…</Panel>
<Panel variant="dark" title="Manifesto">…</Panel>
<Panel hoverable>…headerless card…</Panel>
```

`variant`: `default` (sunshine header, ink text), `quests` (ink header, sunshine pixel UPPERCASE label — the "CURRENT QUESTS" look), `dark` (ink fill, sunshine header). `headerRight` pins a node (menu, badge) to the header's right edge. `hoverable` grows the shadow and lifts on hover.
