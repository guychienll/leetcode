const uniqueOccurrences = (arr) => {
    let occurrences = {};

    for (let i = 0; i < arr.length; i++) {
        if (occurrences[arr[i]]) {
            occurrences[arr[i]]++;
        } else {
            occurrences[arr[i]] = 1;
        }
    }

    return (
        [...new Set(Object.values(occurrences))].length ===
        Object.values(occurrences).length
    );
};

export default uniqueOccurrences;
