# Playlist series system

This patch adds structured playlist-series metadata without turning year into a redundant tag.

For the recurring monthly playlists, use:

```yaml
series: monthly
month: august
```

The site then treats:
- year = archive organization
- series = recurring series identity
- month = calendar/month browsing
- tags = mood/context (night, driving, drawing, rain, etc.)

Random/non-series playlists simply omit `series` and `month` and can keep using freeform `tags`.

Upload `src/content.config.ts` and `src/pages/playlists/index.astro` to the repository, preserving the rest of the current site. This patch assumes the current Astro Content Layer format with `astro/loaders`.
