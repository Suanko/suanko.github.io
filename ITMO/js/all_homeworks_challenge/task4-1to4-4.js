/**
 * Created by Cecil on 11.09.2017.
 */
function arrayConcat(a,b){
        return a.concat(b);
}
function crossNull() {
    var area = [ 1, null, 0, null, 1, 0, 0, null, 1 ], table = '<table style="text-align: center; border-spacing: 0;">', i=0;
    while (i<area.length){
        if(i%3==0 || i==0){
            table+='<tr>';
        }
        if(area[i]==1) table += '<td style="background-color: red; color: blue; height: 90px; width: 90px; font-size: 80px;padding:0;">'+ 'X' +'</td>';
        if(area[i]==0) table += '<td style="background-color: purple; color: red; height: 90px; width: 90px;font-size: 80px;padding:0;">'+ 'O' +'</td>';
        if(area[i]==null) table += '<td style="background-color: #aaaeee; height: 90px; width: 90px; font-size: 80px;padding:0;">'+'&nbsp' +'</td>';
        i++;
        if(i%3==0){
            table+='</tr>';
        }
    }
    table += '</table>'
    document.write(table);
}
function arrayMaxMinDel(a) {
    var i=0, l=0, min = a[0], max = a[0], k=0,r=0;
        while (i<a.length) {
            if(a[i] < min){
                min = a[i];
            }
            i++;
        }
        while (l<a.length){
            if(a[l] > max){
                max = a[l];
            }
            l++;
        }
    while (k<a.length){
        if(a[k]==max)a.splice(k,1);
        k++;
    }
    while (r<a.length){
        if(a[r]==min) a.splice(r,1);
        r++;
    }
    alert(a);
}
function arraySort(a) {
    var temp=0, z=0;
    while (z<a.length) {
        var i=0;
        while (i < a.length) {
            var l = i + 1;
            if (a[i] > a[l]) {
                temp = a[l];
                a[l] = a[i];
                a[i] = temp;
            }
            i++;
        }
        z++;
    }
}