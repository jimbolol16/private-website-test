/**
 * Got from https://github.com/dword-design/nuxt-route-meta
 */
import * as babel from "@babel/core";
import traverse from "@babel/traverse";
import { fromPairs, keys, omit, pick } from "@dword-design/functions";
import astToLiteral from "ast-to-literal";
import { readFileSync } from "fs-extra";
import P from "path";

const predefinedProperties = {
  components: true,
  computed: true,
  data: true,
  methods: true,
  mixins: true,
  render: true,
  watch: true,
};

export default function () {
  const extractMeta = (filename) => {
    const fileContent = readFileSync(filename, "utf8");
    let data = {};

    const Component =
      P.extname(filename) === ".vue"
        ? (() => {
            const vueTemplateCompiler = require("vue-template-compiler");

            return vueTemplateCompiler.parseComponent(fileContent);
          })()
        : { script: { content: fileContent, lang: "js" } };

    const scriptContent = Component.script?.content;
    if (scriptContent) {
      {
        const ast = babel.parseSync(scriptContent, {
          filename,
          ...pick(["configFile", "babelrc"])(this.options.build.babel),
          ...(!this.options.build.babel.configFile &&
            !this.options.build.babel.babelrc && {
              extends: "@nuxt/babel-preset-app",
            }),
        });
        traverse(ast, {
          ClassDeclaration: (path) => {
            if (path.node.superClass.name === "Vue") {
              data = fromPairs(
                path.node.body.body.map((property) => [
                  property.key.name,
                  astToLiteral(property.value),
                ])
              );
            }
          },
          ExportDefaultDeclaration: (path) => {
            const object =
              path.node.declaration.type === "CallExpression" &&
              (path.node.declaration.callee.name === "defineComponent" ||
                (path.node.declaration.callee.object?.name === "Vue" &&
                  path.node.declaration.callee.property?.name === "extend"))
                ? path.node.declaration.arguments[0]
                : path.node.declaration;
            data = astToLiteral(object);
          },
        });
      }

      return {
        ...omit(["meta", ...keys(predefinedProperties)])(data),
        ...data?.meta,
      };
    }
  };

  const parseRoutes = (routes) => {
    for (const route of routes) {
      route.meta = extractMeta(route.component);
      if (route.children !== undefined) {
        parseRoutes(route.children);
      }
    }
  };
  this.extendRoutes(parseRoutes);
}
