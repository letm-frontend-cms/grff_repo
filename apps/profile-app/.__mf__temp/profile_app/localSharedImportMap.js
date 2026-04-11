
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "svelte": async () => {
          let pkg = await import("__mf__virtual/profile_app__prebuild__svelte__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "svelte": {
            name: "svelte",
            version: "5.55.3",
            scope: ["default"],
            loaded: false,
            from: "profile_app",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"svelte"}' must be provided by host`);
              }
              usedShared["svelte"].loaded = true
              const {"svelte": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "svelte" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^5.55.3",
              
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      