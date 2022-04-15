function echo(parameter) {
    let type = typeof parameter;
    if (type === "string" || type === "number") {
        console.log(parameter);
        console.log(type)
    } else {
        console.log(parameter);
        console.log('Parameter is not suitable for printing');
    }

}
echo(null);