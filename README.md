# other-window README

`Other window` open a new column if there is only one column. If you have already side by side, then, cycle between columns.

## setting

This includes only one command, `otherWindow.cycle`.

### example:

```
{
  "key": "ctrl+o",
  "command": "otherWindow.cycle",
  "when": "editorTextFocus"
}
```

## FYI

http://d.hatena.ne.jp/rubikitch/20100210/emacs  (Japanese blog)

## Release Notes

### 0.0.3 (2021-10-16)

- Change to use `splitEditorInGroup`
- rename `vscode-other-window`

### 0.0.2 (2016-11-16)

If already split in a tab, not split.

### 0.0.1 (2016-10-19)

first release