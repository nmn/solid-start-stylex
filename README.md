# SolidStart-StyleX

This is a project to make StyleX work with SolidStart in particular and Vinxi in general.

The StyleX plugin is conceptually simple:

1. Transform all JS files using the Babel plugin.
2. Collect metadata from those JS files during transformation
3. Generate a single CSS file from the collected metadata

The challenge comes from the fact that Vinxi is creating multiple bundles.
Some files aren't part of the client bundle, but we still want to collect
the styles as metadata from them.

There are StyleX styles in component/Counter.tsx. This works fine.

However StyleX styles to routes/index.tsx fails to compile and I get a
server-side error that stylex.create is being run at runtime instead of being
compiled away.

I assumed this was caused by the "use client" that is in the Counter component,
but after trying all combinations of adding or removing `"use client"` from
various files, this does not seem to be ths case. `Counter.tsx` compiles fine
in both cases, and `routes/index.tsx` does not compile in both cases.

So I'm wondering, what is different between routes and components. That's seems
to be the source of the issue.
