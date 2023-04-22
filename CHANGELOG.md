# Changelog

## 15.7.1

Support JSON-serialized parameters in Query (see https://swagger.io/docs/specification/describing-parameters/#schema-vs-content)

## 15.6.7

Use portable version of NSwag, so it's not required to have .NET installed anymore

15.6.1-15.6.6 were broken, please do NOT use them.

## 15.5.1

New `/minimal` switch is introduced.

It generates `Interfaces` instead of `Classes`, which minimizes the bundle size (since Interfaces are stripped off during bundling).

This mode is experimental and is being tested at the moment.

If you want to convert large codebase to use the `/minimal` switch, here are two regexes that helped me do that (of course there'd be still a lot of things you'd need to convert manually):

- "`new \S*Dto\(([\s\S\r\n]+?)\)`" -> "`$1`"
- "`I(\S*Dto)`" -> "`$1`"
