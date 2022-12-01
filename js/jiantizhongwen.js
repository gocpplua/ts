
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

for (let index = 0; index < 100; index++) {
    head = getRandomIntInclusive(0xb0, 0xf7)
    body = getRandomIntInclusive(0xa1, 0xfe)
    val = head * 256 + body
    console.log(val, ":", String.fromCharCode(val))    
}


console.log("===============================")
for(i=0x6300; i<0x77FF; i++) // 5375
    console.log(String.fromCharCode(i)) // 可接受一个指定的 Unicode 值，然后返回一个字符串

//查看字符编码: http://www.mytju.com/classCode/tools/encode_gb2312.asp  // GB2312 -> B0A1  -> 啊 (Unicode:554A)
// GB2312简体中文编码表: http://tools.jb51.net/table/gb2312 // 16-55区为一级汉字，按拼音排序，共3755个
console.log(String.fromCharCode(0x554A))

var str = "啊";
console.log(escape(str).replace(/\%u/g,'/u')) // /u554A
console.log(unescape("\u554A")) // 啊


// https://blog.csdn.net/hacker_crazy/article/details/107500494
// https://github.com/fengjw1/ResourceRep/tree/master/encode
//import Decoder from "./Decoder";
var Decoder = require('./Decoder'); // node下使用
console.log(Decoder.GBKHexstrToString("B0A1"))


/** https://www.cnblogs.com/hdwang/p/10331344.html
 * utf8 byte to unicode string
 * @param utf8Bytes
 * @returns {string}
 */
    function utf8ByteToUnicodeStr(utf8Bytes){
    var unicodeStr ="";
    for (var pos = 0; pos < utf8Bytes.length;){
        var flag= utf8Bytes[pos];
        var unicode = 0 ;
        if ((flag >>>7) === 0 ) {
            unicodeStr+= String.fromCharCode(utf8Bytes[pos]);
            pos += 1;

        } else if ((flag &0xFC) === 0xFC ){
            unicode = (utf8Bytes[pos] & 0x3) << 30;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 24;
            unicode |= (utf8Bytes[pos+2] & 0x3F) << 18;
            unicode |= (utf8Bytes[pos+3] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos+4] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+5] & 0x3F);
            unicodeStr+= String.fromCodePoint(unicode) ;
            pos += 6;

        }else if ((flag &0xF8) === 0xF8 ){
            unicode = (utf8Bytes[pos] & 0x7) << 24;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 18;
            unicode |= (utf8Bytes[pos+2] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos+3] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+4] & 0x3F);
            unicodeStr+= String.fromCodePoint(unicode) ;
            pos += 5;

        } else if ((flag &0xF0) === 0xF0 ){
            unicode = (utf8Bytes[pos] & 0xF) << 18;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 12;
            unicode |= (utf8Bytes[pos+2] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+3] & 0x3F);
            unicodeStr+= String.fromCodePoint(unicode) ;
            pos += 4;

        } else if ((flag &0xE0) === 0xE0 ){
            unicode = (utf8Bytes[pos] & 0x1F) << 12;;
            unicode |= (utf8Bytes[pos+1] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+2] & 0x3F);
            unicodeStr+= String.fromCharCode(unicode) ;
            pos += 3;

        } else if ((flag &0xC0) === 0xC0 ){ //110
            unicode = (utf8Bytes[pos] & 0x3F) << 6;
            unicode |= (utf8Bytes[pos+1] & 0x3F);
            unicodeStr+= String.fromCharCode(unicode) ;
            pos += 2;

        } else{
            unicodeStr+= String.fromCharCode(utf8Bytes[pos]);
            pos += 1;
        }
    }
    return unicodeStr;
}
