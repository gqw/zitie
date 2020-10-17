function loadLib(url) {
    var script = document.createElement("script");
    script.async = false;
    script.src = url;
    document.head.appendChild(script);
}
loadLib("js/hanzi-writer.min.js");
loadLib("js/jquery-3.5.1.min.js");
loadLib("js/bootstrap.bundle.min.js");
loadLib("js/bootstrap-slider.min.js");
loadLib("js/pinyin_dict_withtone.js");
loadLib("js/pinyinUtil.js");
loadLib("js/bundle.js");