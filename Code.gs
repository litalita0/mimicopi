function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('耳コピプレーヤー')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1, viewport-fit=cover')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
