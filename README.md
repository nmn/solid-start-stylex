# SolidStart-StyleX

This is a project to make StyleX work with SolidStart in particular and Vinxi in general.

The StyleX plugin is conceptually simple:

1. Transform all JS files using the Babel plugin.
2. Collect metadata from those JS files during transformation
3. Generate a single CSS file from the collected metadata

The challenge comes from the fact that Vinxi is creating multiple bundles.
Some files aren't part of the client bundle, but we still want to collect
the styles as metadata from them.
