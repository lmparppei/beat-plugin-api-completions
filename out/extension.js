"use strict";
/*---------------------------------------------------------
 * © Lauri-Matti Parppei 2023. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const baseProvider = vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(document, position, token, context) {
            const linePrefix = document.lineAt(position).text.substring(0, position.character);
            const l = linePrefix.lastIndexOf(".");
            const n = l - 4;
            const prefix = linePrefix.substring(n, l + 1);
            // Don't autocomplete unless we are appeding something related to `Beat.`
            if (prefix != "Beat.")
                return [];
            // ChatGPT converted the ObjC header to use this custom method. Mileage may vary.
            return [
                BCompletion(''),
                BCompletion('lines()', "Returns all parsed lines"),
                BCompletion('outline()', "Returns the current outline"),
                BCompletion('scenes()', "Returns the current outline excluding any structural elements (namely `sections`)"),
                BCompletion('htmlWindow(htmlContent, width, height, function (result) {\n\t// Callback\n})', ''),
                BCompletion('htmlPanel(htmlContent, width, height, function (result) {\n\t// Callback\n},\n\tokButton // true/false \n)', '`okButton` defines if the window displays *OK* and *Cancel* instead of *Close*. This affects the result.'),
                BCompletion('compatibleWith(versionNumber)', "Check compatibility with Beat version. Basically used for checking if Beat version is out of date."),
                BCompletion('promisesAvailable()', "Returns `true` when you can use promises in JS"),
                BCompletion('iOS()', "Returns `true` when the plugin is running in iOS"),
                BCompletion('macOS()', "Returns `true` when the plugin is running in macOS"),
                BCompletion('localize(key)', "Returns a string, with all instances of `#key#` replaced with localized strings."),
                BCompletion('type', "Contains every line type value", vscode.CompletionItemKind.Property),
                BCompletion('currentParser', "Parser of the host document", vscode.CompletionItemKind.Property),
                BCompletion('lineAtPosition(pos)', "Returns the line at given position in document"),
                BCompletion("sceneAtPosition(index)", "Returns the scene at given position in document"),
                BCompletion("scenesAsJSON()", "Returns all scenes as a JSON string"),
                BCompletion('outlineAsJSON', "Returns the full outline as a JSON string"),
                BCompletion("linesAsJSON()", "Returns all lines as a JSON string"),
                BCompletion("linesForScene(scene)", "Returns lines in given scene."),
                BCompletion("createOutline()", "Creates the outline from scratch"),
                BCompletion("getText()", "Returns the full raw text (excluding settings block)"),
                BCompletion("lineWithString(string, type)", "Creates a new line element"),
                BCompletion("currentLine", "Currently edited line", vscode.CompletionItemKind.Property),
                BCompletion("currentScene", "Currently edited scene", vscode.CompletionItemKind.Property),
                BCompletion("getDocumentSetting(key)", "Returns a document setting prefixed by the current plugin name"),
                BCompletion("getRawDocumentSetting(key)", "Returns a non-prefixed document setting"),
                BCompletion("getPropertyValue(key)", "For those who REALLY know what they're doing"),
                BCompletion("setRawDocumentSetting(settingName, setting)", "Sets a document setting without a plugin prefix. Can be used to tweak actual document data."),
                BCompletion("setDocumentSetting(settingName, setting)", "Sets a document setting, prefixed by the plugin name, so you won't mess up settings for other plugins."),
                BCompletion("setUserDefault(settingName, setting)", "Sets a user default (`key`, `value`)"),
                BCompletion("getUserDefault(settingName)", "Returns a user default (`key`)"),
                BCompletion("onPreviewFinishedDisabled", "Listener property: Disable onPreviewFinished event", vscode.CompletionItemKind.Property),
                BCompletion("onOutlineChangeDisabled", "Listener property: Disable onOutlineChange event", vscode.CompletionItemKind.Property),
                BCompletion("onSelectionChangeDisabled", "Listener property: Disable onSelectionChange event", vscode.CompletionItemKind.Property),
                BCompletion("onTextChangeDisabled", "Listener property: Disable onTextChange event", vscode.CompletionItemKind.Property),
                BCompletion("onSceneIndexUpdateDisabled", "Listener property: Disable onSceneIndexUpdate event", vscode.CompletionItemKind.Property),
                BCompletion("makeResident()", "Forces the plugin to stay in memory"),
                BCompletion("setUpdate(updateMethod)", "Alias + actual method for setUpdate"),
                BCompletion("onTextChange(updateMethod)", "Alias + actual method for onTextChange"),
                BCompletion("setSelectionUpdate(updateMethod)", "Alias + actual method for setSelectionUpdate"),
                BCompletion("onSelectionChange(updateMethod)", "Alias + actual method for onSelectionChange"),
                BCompletion("onOutlineChange(updateMethod)", "Alias + actual method for onOutlineChange"),
                BCompletion("onSceneIndexUpdate(updateMethod)", "Alias + actual method for onSceneIndexUpdate"),
                BCompletion("onDocumentBecameMain(updateMethod)", "Alias + actual method for onDocumentBecameMain"),
                BCompletion("onSceneHeadingAutocompletion(callback)", "Alias + actual method for onSceneHeadingAutocompletion"),
                BCompletion("onCharacterAutocompletion(callback)", "Alias + actual method for onCharacterAutocompletion"),
                BCompletion("onPreviewFinished(updateMethod)", "Alias + actual method for onPreviewFinished"),
                BCompletion("onPaginationFinished(updateMethod)", "Alias + actual method for onPaginationFinished"),
                BCompletion("onDocumentSaved(updateMethod)", "Alias + actual method for onDocumentSaved"),
                BCompletion("onEscape(updateMethod)", "Alias + actual method for onEscape"),
                BCompletion("newDocument(string)", "Creates a new document with given string"),
                BCompletion("newDocumentObject(string)", "Creates a new `Document` object without actually opening the window"),
                BCompletion("screen()", "Current screen dimensions"),
                BCompletion("windowFrame()", "Window dimensions"),
                BCompletion("getWindowFrame()", "Alias for windowFrame"),
                BCompletion("setWindowFrame(x, y, width, height)", "Sets the window frame"),
                BCompletion("log(string)", "Logs given string in developer console"),
                BCompletion("openConsole()", "Opens the console programmatically"),
                BCompletion("focusEditor()", "Focuses the editor text view"),
                BCompletion("scrollTo(location)", "Scrolls to given position in document"),
                BCompletion("scrollToLineIndex(index)", "Scrolls to given line index"),
                BCompletion("scrollToLine(line)", "Scrolls to given line"),
                BCompletion("scrollToScene(scene)", "Scrolls to given scene heading"),
                BCompletion("scrollToSceneIndex(index)", "Scrolls to the scene heading at the given outline index"),
                BCompletion("selectedRange()", "Returns the selected range in editor"),
                BCompletion("nextTab()", "Move to the next tab in the document window"),
                BCompletion("previousTab()", "Move to the previous tab in the document window"),
                BCompletion("fileToString(path)", "Read any (text) file into a string variable"),
                BCompletion("pdfToString(path)", "Read a PDF file into a string variable"),
                BCompletion("assetAsString(filename)", "Plugin bundle asset as a string"),
                BCompletion("appAssetAsString(filename)", "Asset from inside the app container"),
                BCompletion("writeToFile(path, content)", "Write a string to a file in the given path. You can't access files unless they are in the container or the user explicitly selected them using a save dialog."),
                BCompletion("openFile(formats, callback)", "Displays an open dialog"),
                BCompletion("openFiles(formats, callback)", "Displays an open dialog with the option to select multiple files"),
                BCompletion("saveFile(format, callback)", "Displays a save dialog"),
                BCompletion("documents()", "Returns all document instances"),
                BCompletion("interface(document)", "Returns a plugin interface for the given document"),
                BCompletion("tagsForScene(scene)", "Returns all tags in the scene"),
                BCompletion("availableTags()", "Returns all available tag names"),
                BCompletion("async(callback)", "Dispatch a block into a background thread"),
                BCompletion("sync(callback)", "Dispatch a block into the main thread"),
                BCompletion("dispatch(callback)", "Alias for async"),
                BCompletion("dispatch_sync(callback)", "Alias for sync"),
                BCompletion("isMainThread()", "Returns `true` if the current operation happens in the main thread"),
                BCompletion("currentPagination()", "Returns the CURRENT pagination manager in the document"),
                BCompletion("paginator(lines)", "Creates and returns a new pagination manager with the given lines as input"),
                BCompletion("pagination()", "Creates and returns a NEW pagination manager"),
                BCompletion("resetPreview()", "Resets the preview and clears pagination"),
                BCompletion("reformatRange(loc, len)", "Reformats the range"),
                BCompletion("reformat(line)", "Reformats the given line"),
                BCompletion("widget(height)", "Add widget into the sidebar (macOS only)"),
                BCompletion("button(name, action, frame)", "Creates a button for widget (macOS only)"),
                BCompletion("dropdown(items, action, frame)", "Creates a dropdown for widget (macOS only)"),
                BCompletion("checkbox(title, action, frame)", "Creates a checkbox for widget (macOS only)"),
                BCompletion("label(title, frame, color, size, fontName)", "Creates a label for widget (macOS only)"),
                BCompletion("speakSynth()", "Create a new speech synthesis instance (macOS only)"),
                BCompletion("timer(seconds, callback, repeats)", "Creates a timer"),
                BCompletion("revisionTracking", "Listener property: BeatRevisions instance"),
                BCompletion("revisedRanges()", "Returns all the revised ranges in attributed text"),
                BCompletion("bakeRevisions()", "Bakes current revisions into lines"),
                BCompletion("bakeRevisionsInRange(loc, len)", "Bakes revisions in the given range"),
                BCompletion("setSelectedRange(start, length)", "Sets the selected range in the editor"),
                BCompletion("addString(string, index)", "Adds a string to the document at the given index"),
                BCompletion("replaceRange(from, length, string)", "Replaces a range in the document"),
                BCompletion("setColorForScene(color, scene)", "Sets color for the scene"),
                BCompletion("alert(title, info)", "Displays a simple modal alert box"),
                BCompletion("prompt(prompt, info, placeholder, defaultText)", "Displays a text input prompt"),
                BCompletion("confirm(title, info)", "Displays a confirmation modal"),
                BCompletion("dropdownPrompt(prompt, info, items)", "Displays a dropdown prompt with a list of strings"),
                BCompletion("modal(settings, callback)", "Displays a modal with given settings"),
                BCompletion("htmlPanel(html, width, height, callback, cancelButton)", "Displays an HTML panel (macOS only)"),
                BCompletion("htmlWindow(html, width, height, callback)", "Displays an HTML window (macOS only)"),
                BCompletion("printInfo()", "Returns print information (macOS only)"),
                BCompletion("printHTML(html, settings, callback)", "Prints HTML content with given settings (macOS only)"),
                BCompletion("textHighlight(hexColor, loc, len)", "Highlights text with a background color"),
                BCompletion("textBackgroundHighlight(hexColor, loc, len)", "Highlights text background with a color"),
                BCompletion("removeTextHighlight(loc, len)", "Removes text highlighting"),
                BCompletion("removeBackgroundHighlight(loc, len)", "Removes background highlighting"),
                BCompletion("importHandler(extensions, callback)", "Import handler for specified file extensions"),
                BCompletion("exportHandler(extensions, callback)", "Export handler for specified file extensions"),
                BCompletion("separatorMenuItem()", "Creates a separator menu item (macOS only)"),
                BCompletion("refreshMenus()", "Refreshes menu items (macOS only)"),
                BCompletion("menu(name, items)", "Creates a menu (macOS only)"),
                BCompletion("menuItem(title, shortcut, action)", "Creates a menu item (macOS only)"),
                BCompletion("submenu(name, items)", "Creates a submenu (macOS only)"),
                BCompletion("document()", "Returns the current document instance (macOS only)")
            ];
        },
    }, '.', 'Beat.');
    // Provides the plain Beat object
    const beatProvider = vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(document, position, token, context) {
            return [BCompletion('Beat.')];
        }
    });
    function BCompletion(str, doc = "", type = vscode.CompletionItemKind.Method, insertText = "") {
        const completion = new vscode.CompletionItem(str, type);
        if (doc.length > 0)
            completion.documentation = new vscode.MarkdownString(doc);
        if (insertText.length > 0)
            completion.insertText = insertText;
        return completion;
    }
    context.subscriptions.push(beatProvider);
    context.subscriptions.push(baseProvider);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map