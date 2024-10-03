chrome.runtime.onInstalled.addListener(function () {
    console.log("Bible Verse Extension installed");
});
(async () => {
    const mellowtel = new Mellowtel("<a468a428>");
    await mellowtel.initBackground();
})();
