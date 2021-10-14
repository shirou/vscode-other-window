import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('otherWindow.cycle', () => {
        if (vscode.window.visibleTextEditors.every(editor => editor.viewColumn === vscode.ViewColumn.One)) {
            // become side-by-side 
            vscode.commands.executeCommand('workbench.action.splitEditorInGroup');
        }
        // switch new column anyway 
        vscode.commands.executeCommand('workbench.action.focusOtherSideEditor');
    });
	context.subscriptions.push(disposable);
}

export function deactivate() {}
