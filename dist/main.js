(() => {
  // esbuild-css-modules-plugin-namespace:/tmp/tmp-62399-eoLzGrNnDSSR/esbuild-css-modules/src/style.module.css.js
  var digest = "ce6c2eec9209c59b34ce9ecfeb4c361835d2bc328544f6d8ffdd5bbd89a6a6a2";
  var css = `._test_1f4jo_1 {
  color: #66f;
}
`;
  (function() {
    if (!document.getElementById(digest)) {
      var el = document.createElement("style");
      el.id = digest;
      el.textContent = css;
      document.head.appendChild(el);
    }
  })();
  var style_module_css_default = { "test": "_test_1f4jo_1" };

  // src/index.js
  var header = document.createElement("h1");
  header.innerHTML = "Hello world";
  header.className = style_module_css_default.test;
  document.body.appendChild(header);
})();
