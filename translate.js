function Translate(word, language) {
    this.apikey = "trnsl.1.1.20190817T094831Z.12c83c7421f30e28.03894fe2bdcf4c233f1657c3f7aa169758bd91a2";
    this.word = word;
    this.language = language;

    // XHR object

    this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateWord = function(callback) {
    // Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET", endpoint);

    this.xhr.onload = () => {
        if (this.xhr.status === 200) {
            const json = JSON.parse(this.xhr.responseText);

            const text = json.text[0];

            callback(null, text);

        } else {
            callback("Bir hata oluştu", null);
        }

    }

    this.xhr.send();


};
Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;

}