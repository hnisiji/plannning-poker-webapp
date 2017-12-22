module.exports = function cardLoader(source, map) {
    this.callback(null, `module.exports = function(Component) {
        console.log(Component);
        Component.options.beforeCreate.push(function () {
            this.$options.__card = ${JSON.stringify(source)};
        });
    }`, map);
};
