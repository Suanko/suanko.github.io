/**
 * Created by Cecil on 15.09.2017.
 */
var alphabet=['а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',
    'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
var cesar = {
        code:function (str, n) {
        str.toLowerCase();
        var i=0, result=[];
        while (i<str.length){
            var l=0;
            while(l<alphabet.length) {
                if(str[i] == alphabet[l]) {
                    if(l<33) {
                        result.push(alphabet[l + n]);
                    }
                }
                l++;
            }
            i++;
        }
            var string='';
            for (var r=0;r<result.length;r++){
                string +=result[r];
            }
            return string;
    },
    decode: function (str, n) {
        str.toLowerCase();
        var i=0, result=[];
        while (i<str.length){
            var l=0;
            while(l<alphabet.length) {
                if(str[i] == alphabet[l]) {
                    if(l>32) {
                        result.push(alphabet[l - n]);
                    }
                }
                l++;
            }
            i++;
        }
        var string='';
        for (var r=0;r<result.length;r++){
            string +=result[r];
        }
        return string;
    }
};