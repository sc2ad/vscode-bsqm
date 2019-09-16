import * as vscode from "vscode";
import { build } from "./buildpush";
import configure from "./configure";
import create from "./create";

export function activate(context: vscode.ExtensionContext) {
    const commands: { [name: string]: vscode.Disposable } = {};

    commands.activate = vscode.commands.registerCommand("bsqm.activate", () => {
        vscode.window.showInformationMessage("BSQM extension activated.");
    });

    commands.configure = vscode.commands.registerCommand(
        "bsqm.configure",
        configure
    );
    commands.create = vscode.commands.registerCommand("bsqm.create", create);
    commands.build = vscode.commands.registerCommand("bsqm.build", build);

    Object.keys(commands).forEach((command) => {
        context.subscriptions.push(commands[command]);
    });
}
