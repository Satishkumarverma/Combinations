function find_combinations() {
    const input_data = document.querySelector("#input");
    const result = document.querySelector("#result");
    const combination = document.querySelector("#combination");
    const list_of_data = input_data.value.split(" ")
    let output = "";


    function getCombinations(arr, r) {
        if (r === 0) return [[]];
        if (arr.length === 0) return [];
        const [first, ...rest] = arr;

        const withFirst = getCombinations(rest, r - 1).map(combo => [first, ...combo]);
        const withoutFirst = getCombinations(rest, r);

        return [...withFirst, ...withoutFirst];
    }

    const possibilities = [];
    for (let r = 1; r <= list_of_data.length; r++) {
        possibilities.push(...getCombinations(list_of_data, r));
    }
    possibilities.forEach(combo => {
        const joinedCombo = combo.join(" + ");
        output += joinedCombo + "\n";
    });
    if (input_data.value.length == 0) {
        combination.innerHTML = 0
        result.value = ""
    } else {
        combination.innerHTML = possibilities.length
        result.value = output
    }
}

function copy() {
    let input = document.getElementById("result");
    input.select()
    navigator.clipboard.writeText(input.value);
}