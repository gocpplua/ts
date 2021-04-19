# ts
my ts  learning record

## 1. TypeScript in Visual Studio Code
ubuntu 16.04 下面安装 [TypeScript compiler](https://code.visualstudio.com/docs/typescript/typescript-tutorial)

## 2. Language-specific editor settings
添加自动保存:To customize your editor by language, run the global command Preferences: Configure Language Specific Settings (command ID: workbench.action.configureLanguageBasedSettings) from the Command Palette (Ctrl+Shift+P) which opens the language picker. Select the language you want, which then opens your user settings.json with the language entry where you can add applicable settings.
```
// On save, run both fixAll and organizeImports source actions
"editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.organizeImports": true,
}
```

## 3. Debugging
[传送门](https://code.visualstudio.com/docs/editor/debugging)

## 4. es6使用
通过命令: tsc --init  生成tsconfig.json，然后修改：
```
"target": "es5"   ->  "target": "es6", 
```