Chunky ink-bordered action button with the brand's hard offset shadow — use for any primary or secondary call-to-action.

```jsx
<Button variant="primary" href="#start">Start Quest</Button>
<Button variant="secondary">Copy Email</Button>
<Button variant="coral" icon={<MailIcon/>}>Email me</Button>
<Button variant="ghost" size="small">Download CV</Button>
```

Variants: `primary` (ink fill, white text), `secondary` (white, ink text), `coral` (energetic CTA, white text), `ghost` (quiet, grey→ink on hover). Sizes: `medium` (48px) / `small` (36px). Pass `href` to render as a link, `disabled` to dim. Hover lifts -2px and grows the shadow; press sinks +1px.
