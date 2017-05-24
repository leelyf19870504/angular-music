/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function MusicDataService($http) {
    this.searchSong = function(options, callback) {
        var otherParams = {
            'csrf_token': "",
            'type': 1,
            'offset': 0,
            'limit': 10,
            'total': true
        };

        var postData = Object.assign(options, otherParams);
        console.log(postData);

        $http.post("/api/search/get/web", postData).then(resp => {
            //console.log(resp.data);
            callback(resp.data);
        }, resp => {
            console.log("request error");
        });
    };

    this.showSong = function(options, callback) {
        $http.get("/api/song/detail?id=" + options.music_id + "&ids=" + '%5B' + options.music_id + '%5D').then(resp => {
            // console.log(resp.data);
            callback(resp.data);
        }, resp => {
            console.log("request error");
        });
    };

    this.showLyric = function(options, callback) {
        Vue.http.get("/api/song/lyric?os=pc&id=" + options.music_id + '&lv=-1&kv=-1&tv=-1').then(resp => {
            console.log(resp.data);
            callback(resp.data);
        }, resp => {
            console.log("request error");
        });
    };
}
export default MusicDataService;