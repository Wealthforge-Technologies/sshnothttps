## This is a super simple utility script
> do you receive https github URLs, but need SSH ones? this fixes that.

# `npm install -g sshnothttps`.

or `npm install -g` from within where you clone this if you roll that way.

# use
This is expected to be installed to your $PATH, and used as a single use parser in larger scripts via `|`.

Pass in a https github url, Get a ssh one back.

`echo "https://github.com/Wealthforge-Technologies/dequalify.git" | dequalify`

for example would return

`git@github.com:Wealthforge-Technologies/dequalify.git`

You can add `-h` to reverse it:
`echo "git@github.com:Wealthforge-Technologies/dequalify.git" | dequalify -q` for example would return `https://github.com/Wealthforge-Technologies/dequalify.git`.

> you might think this looks an awful lot like dequalify, and you'd be right. It's easier to write parsers like this than in bash.
