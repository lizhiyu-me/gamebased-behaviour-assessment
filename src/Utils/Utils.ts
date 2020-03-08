class Utils {
    public static copyToBoard(_value: string) {
        var input = document.createElement("input");
        input.value = _value;
        document.body.appendChild(input);
        input.select();
        input.setSelectionRange(0, input.value.length),
        document.execCommand('Copy');
        document.body.removeChild(input);
    }
}