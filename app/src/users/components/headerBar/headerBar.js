// Notice that we do not have a controller since this component does not
// have any specialized logic.
function headerBarController() {
    console.log(this)

    this.searchTextChange = searchTextChange;
    this.selectedItemChange = selectedItemChange;
    this.querySearch = querySearch;

    function searchTextChange(text) {
        console.log("searchTextChange " + text)
    }

    function selectedItemChange(item) {
        console.log("selectedItemChange " + item)
    }

    function querySearch(text) {
        console.log("querySearch " + text)
        var allStates = '陈奕迅, 我爱你, 吻你一时别再躲, 我想和你唱, 欢乐颂2, 朴树, 咖喱咖喱, 爱不会down, 李志, 爱河';

        return allStates.split(/, +/g).map(function(state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }
}

export default {
    name: 'headerBar',
    config: {
        // bindings: { navRecommands: '=' },
        templateUrl: 'src/users/components/headerBar/headerBar.html',
        controller: headerBarController
    }

};