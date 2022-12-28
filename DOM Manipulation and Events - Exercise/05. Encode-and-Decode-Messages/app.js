function encodeAndDecodeMessages() {
  const main = document
    .getElementById("main")
    .addEventListener("click", (ev) => {
      if (ev.target.tagName !== "BUTTON") {
        return;
      }

      const decodeText = document.getElementsByTagName("textarea")[0];
      const encodeText = document.getElementsByTagName("textarea")[1];

      if (ev.target.textContent.includes("Encode")) {
        let decode = decodeText.value;
        let encode = "";

        for (let i = 0; i < decode.length; i++) {
          let symbol = decode.charCodeAt(i);

          encode += String.fromCharCode(symbol + 1);
        }
        decodeText.value = "";
        encodeText.value = encode;
      } else if (ev.target.textContent.includes("Decode")) {
        let encode = encodeText.value;
        let decode = "";

        for (let i = 0; i < encode.length; i++) {
          let symbol = encode.charCodeAt(i);
          decode += String.fromCharCode(symbol - 1);
        }

        encodeText.value = decode;
      }
    });
}
