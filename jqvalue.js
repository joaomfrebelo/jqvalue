jQuery.fn.extend({
    value: function (value) {
        if (!arguments.length) {
            return this.val();
        }
        var type = this.attr("type");
        if (["text", "hidden"].includes(type)) {
            var elem = this[0];
            elem.value = value;
            elem.setAttribute("value", value);
        } else {
            this.val(value);
        }
        return this;
    }
});