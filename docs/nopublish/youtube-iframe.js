module.exports = async (params) => {
    const url = await params.quickAddApi.inputPrompt("YouTube URL");
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (!match) {
        new Notice("No YouTube URL found");
        return;
    }
    const id = match[1];
    const iframe = `<iframe src="https://www.youtube.com/embed/${id}" style="width:100%;max-width:100%;aspect-ratio:16/9;border:none;" allowfullscreen></iframe>`;
    params.app.workspace.activeLeaf.view.editor.replaceSelection(iframe);
}