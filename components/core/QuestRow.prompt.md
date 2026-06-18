The brand's core list-item — an icon chip, a game-font title, a small description, and either a progress meter with a pixel `%` or a "proof" pill. Stack several inside a `Panel variant="quests"`.

```jsx
<QuestRow icon="🛠️" title="LifeOS" desc="Build my personal operating system" proof="LIVE" href="#builder" />
<QuestRow icon={<FlaskIcon/>} title="Reaction Simulator" desc="CSTR/PFR network" progress={85} progressColor="coral" />
```

Set `href` to make the whole row a hover-highlight link. Use `progress` (0–100) **or** `proof` on the right, not usually both. Rows auto-divide with a hairline when stacked.
