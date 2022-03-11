# Reproduction for Critical issue 528

This is a very simple site created with Eleventy to reproduce [Critical issue 528](https://github.com/addyosmani/critical/issues/528). The reason this reproduction causes a MaxListenersExceededWarning is because `critical.generate` is called &ge;15 times (at least once per HTML file).

All of the HTML files in `src` are identical.

I have enabled trace warnings, so all you need to run is:

```
npm install
npm run build
```
