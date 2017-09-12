function log(v) {
    console.log(JSON.stringify(v, null, 4))
}

declare var Vue;
 
var app = new Vue({
    el: '#app',
})
